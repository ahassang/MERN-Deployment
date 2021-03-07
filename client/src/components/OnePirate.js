import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';


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
        <div className="header">
            <div className="wrapper">
                <h2 className="header-contents-1" >{pirate.pirateName}</h2>
                <button className="header-contents-2"
                    onClick={() => navigate('/pirate')}>Crew Board</button>
            </div>
            <div className="content-holder">
                <div className="single-pirate-photo-wrapper">
                    <p>
                        <img className="pirate-profile"
                            src={pirate.piratePictureUrl}
                            alt={pirate.pirateName}
                        />
                    </p>
                    <img className="pirate-profile"
                        src={pirate.pirateShipPictureUrl}
                        alt={pirate.pirateShip}
                    />
                </div>



                <div className="info-box">

                    <p>
                        Theatre of Plunder: {pirate.pirateOrigin}
                    </p>
                    <p>
                        Pirate Identified as an {pirate.pirateAge}, {pirate.pirateSex}
                    </p>

                    <p>
                        Documented Year of Piracy: {(new Date(pirate.startDate)).toLocaleDateString("en-us")}
                    </p>
                    <p>
                        Sailing Vessel of Choice: {pirate.pirateShip}
                    </p>
                    <p>
                        Pirate Skill: {pirate.pirateSkill}
                    </p>

                    <hr></hr>
                    <p>Let the be Ye last Warning! </p>
                    <p className="icon-message">*if any icons are present, bring your sea legs matey! It'll be a wild ride with {`${pirate.pirateName} on the hight seas of ${pirate.pirateOrigin}`}</p>
                    <p>
                        Has Pirate seen battle ? : {pirate.pirateVeteran ? <span>{
                            <img className="toggle-item"
                                src={"https://static.vecteezy.com/system/resources/previews/000/552/195/original/war-cannon-firing-cannonball-vector-icon.jpg"}
                                alt="cannon"
                            />
                        }</span> : <span>False</span>}

                    </p>
                    <p>
                        Does Pirate have an eye-patch ? : {pirate.pirateEyePatch ? <span>{
                            <img className="toggle-item"
                                src={"https://image.flaticon.com/icons/png/512/877/877460.png"}
                                alt="eye-patch"
                            />
                        }</span> : <span>False</span>}

                    </p>
                    <p>
                        Does your Pirate have a peg-leg? : {pirate.piratePegLeg ? <span>{
                            <img className="toggle-item"
                                src={"https://image.flaticon.com/icons/svg/123/123970.svg"}
                                alt="peg-leg"
                            />
                        }</span> : <span>False</span>}

                    </p>
                    <p>
                        Does your Pirate have a hook-hand? : {pirate.pirateHookHand ? <span>{
                            <img className="toggle-item"
                                src={"https://media.istockphoto.com/vectors/pirate-hook-hand-icon-vector-isolated-vector-id1096534672?k=6&m=1096534672&s=612x612&w=0&h=slA0eBiOwdaQJOBb4A61Bb5-QuP5Y1wqP7mGsuCHKxw="}
                                alt="hook-hand"
                            />
                        }</span> : <span>False</span>}
                    </p>
                </div>
                <div>
                </div>
            </div>
            <button className="view-pirate-btn"
                onClick={() => navigate(`/pirate/${pirate._id}/edit`)}
            >Edit Ye 'ol Pirate</button>
        </div>
    )
}

export default OnePirate;
