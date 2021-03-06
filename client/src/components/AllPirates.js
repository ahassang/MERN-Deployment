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
        <div>
            <h2>All Pirates</h2>
            <button onClick={() => navigate('/pirate/new')}>Create a Pirate</button>
            {
                allPirates.map((pirate, index) => (
                    <div key={index}>
                        <hr />
                        <img className="pirate-profile"
                            src={pirate.piratePictureUrl}
                            alt={pirate.pirateName}
                        />
                        <img className="pirate-profile"
                            src={pirate.pirateShipPictureUrl}
                            alt={pirate.pirateShip}
                        />
                        <h4>{`${pirate.pirateName}'s Ship of Choice: The ${pirate.pirateShip}`}</h4>
                        <h4>{`Rank: ${pirate.pirateSkill}`}</h4>
                        <h4>{`Documented Year of Piracy : ${pirate.startDate}`}</h4>
                        <div className="true-false-sct">
                            <hr />
                            <h4>(True or False)</h4>
                            <h4>{` Has Pirate seen battle? ${pirate.pirateVeteran}`}</h4>
                            <ToggleCannon/>
                            <h4>{`Does this Pirate have an eye-patch? ${pirate.pirateEyePatch}`}</h4>
                            <ToggleEyePatch />
                            <h4>{` Does this Pirate have a peg-leg? ${pirate.piratePegLeg}`}</h4>
                            <TogglePegLeg/>
                            <h4>{` Does this Pirate have a hook-hand? ${pirate.pirateHookHand}`}</h4>
                            <ToggleHookHand/>
                            <hr />
                        </div>
                        <h4> {`Base of operations: ${pirate.pirateOrigin}`}</h4>
                        <h4>{`Bio: ${pirate.pirateAge}, ${pirate.pirateSex}`}</h4>
                        <h4>{`Preferred Drink: ${pirate.pirateDiet}`}</h4>
                        <button className="all-pirate-bottom-btn"
                            onClick={() => navigate(`/pirate/${pirate._id}`)}
                        >View Pirate Ship Details</button>
                        <button
                            onClick={() => navigate(`/pirate/${pirate._id}/edit`)}
                        >Edit Ye 'ol Pirate</button>
                        <button
                         onClick={() => deletePirate(pirate._id)}>Maroon this Pirate!(delete)</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AllPirates;
