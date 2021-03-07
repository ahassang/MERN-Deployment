import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ToggleEyePatch from './ToggleEyePatch';
import ToggleHookHand from './ToggleHookHand';
import TogglePegLeg from './TogglePegLeg';
import ToggleCannon from './ToggleCannon';

const AllPirates = (props) => {
    const [allPirates, setAllPirates] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/pirates")
            .then((response) => {
                console.log(response.data);
                setAllPirates(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const deletePirate = (pirateId) => {
        axios.delete("http://localhost:8000/api/pirates/" + pirateId)
            .then((res) => {
                const deletedPirate = res.data;
                console.log(deletedPirate);
                const filteredPiratesArr = allPirates.filter((pirate) => pirate._id !== pirateId);
                setAllPirates(filteredPiratesArr);
            })
            .catch((err) => {
                console.log(err);
            });
    }


    return (
        <div className="wrapper">
            <div className="header">

                <h2 className="header-contents-1">Pirate Crew</h2>
                <button className="header-contents-2" onClick={() => navigate('/pirate/new')}>Add Pirate</button>
            </div>
            {
                allPirates.map((pirate, index) => (
                    <div key={index}>
                        <div className="single-pirate-section">
                        <h3>
                            {pirate.pirateName}
                        </h3>
                        

                            <img className="pirate-profile"
                                src={pirate.piratePictureUrl}
                                alt={pirate.pirateName}
                            />
                            <button className="view-pirate-btn"
                                onClick={() => navigate(`/pirate/${pirate._id}`)}
                            >View Pirate </button>
                            <button className="maroon-btn"
                                onClick={() => deletePirate(pirate._id)}>Maroon this Pirate!</button>

                        </div>



                    </div>
                ))
            }
        </div>
    )
}

export default AllPirates;
