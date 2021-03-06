import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import ToggleEyePatch from './ToggleEyePatch';
import TogglePegLeg from './TogglePegLeg';
import ToggleHookHand from './ToggleHookHand';
import ToggleCannon from './ToggleCannon';

const OnePirate = (props) => {
    const { id } = props;

    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + id)
            .then((res) => {
                const myPirate = res.data;
                console.log(myPirate);
                setPirate(myPirate);
            })
    }, []);

    return (
        <div>
            
            <h2 >{pirate.pirateName}</h2>
            <p>
                <img className="pirate-profile"
                    src={pirate.piratePictureUrl}
                    alt={pirate.pirateName}
                />
            </p>
            <div className="info-box">
            <p>
                Pirate Name: {pirate.pirateName}
            </p>
            <p>
                Pirate Ship: {pirate.pirateShip}
            </p>
            <p>
                Pirate Origin: {pirate.pirateOrigin}
            </p>
            <p>
                Pirate Gender: {pirate.pirateSex}
            </p>
            <p>
                Pirate Age: {pirate.pirateAge}
            </p>
            <p>
                Documented Year of Piracy: {(new Date(pirate.startDate)).toLocaleDateString("en-us")}
            </p>
            <p>
                Pirate Skill: {pirate.pirateSkill}
            </p>
            <hr />
            <p>
                Has Pirate seen battle ? : {pirate.pirateVeteran ? <span>True</span> : <span>False</span>}
                <ToggleCannon/>
            </p>
            <p>
                Has Pirate have an eye-patch ? : {pirate.pirateEyePatch ? <span>True</span> : <span>False</span>}
                <ToggleEyePatch />
            </p>
            <p>
                Does your Pirate have a peg-leg? : {pirate.piratePegLeg ? <span>True</span> : <span>False</span>}
                <TogglePegLeg />
            </p>
            <p>
                Does your Pirate have a hook-hand? : {pirate.pirateHookHand ? <span>True</span> : <span>False</span>}
                <ToggleHookHand />
            </p>
            <hr />
            <p>
                Pirates Diet: {pirate.pirateDiet}
            </p>
            <p>
                Choice of Vessel: {pirate.pirateShip}
            </p>
            </div>
            <div>
                <button className="bottom-btn"
                    onClick={() => window.history.back()}>Previous page</button>
            </div>
            <div>
                <button 
                    onClick={() => navigate('/pirate')}>Navigate to All Pirates</button>
            </div>
        </div>
    )
}

export default OnePirate;
