import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';



const EditPirate = (props) => {
    const { pirateId } = props;
    const [pirateName, setPirateName] = useState("");
    const [pirateShip, setPirateShip] = useState("Sloop");
    const [pirateOrigin, setPirateOrigin] = useState("");
    const [pirateSex, setPirateSex] = useState("Male");
    const [pirateAge, setPirateAge] = useState("Adult");
    const [startDate, setStartDate] = useState("1640-01-01")//look into this
    const [pirateSkill, setPirateSkill] = useState("");
    const [pirateVeteran, setPirateVeteran] = useState(false);
    const [pirateEyePatch, setPirateEyePatch] = useState(false);
    const [piratePegLeg, setPiratePegLeg] = useState(false);
    const [pirateHookHand, setPirateHookHand] = useState(false);
    const [pirateDiet, setPirateDiet] = useState("Rum");
    const [piratePictureUrl, setPiratePictureUrl] = useState("https://i.pinimg.com/736x/53/05/3d/53053d19b1e1b1b7e5703a8f448a4a4d--pirate-symbols-pirate-skull.jpg");
    const [pirateShipPictureUrl, setPirateShipPictureUrl] = useState("https://media.istockphoto.com/vectors/silhouette-of-a-pirate-ship-vector-id1003207066?k=6&m=1003207066&s=170667a&w=0&h=IFnwt6z3kws55Ksbns09FtFl5nwf9kYu3xXF1XNMCa0=");
    const [errs, setErrs] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates/" + pirateId)
            .then((res) => {
                const myPirate = res.data;
                console.log(myPirate);
                setPirateName(myPirate.pirateName);
                setPirateShip(myPirate.pirateShip);
                setPirateOrigin(myPirate.pirateOrigin);
                setPirateSex(myPirate.pirateSex);
                setPirateAge(myPirate.pirateAge);
                setStartDate((new Date(myPirate.startDate)).toLocaleDateString("en-us"));
                setPirateSkill(myPirate.pirateSkill);
                setPirateVeteran(myPirate.pirateVeteran);
                setPirateEyePatch(myPirate.pirateEyePatch);
                setPiratePegLeg(myPirate.piratePegLeg);
                setPirateHookHand(myPirate.pirateHookHand);
                setPirateDiet(myPirate.pirateDiet);
                setPiratePictureUrl(myPirate.piratePictureUrl);
                setPirateShipPictureUrl(myPirate.pirateShipPictureUrl);
            })
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/pirates/" + pirateId, {
            pirateName: pirateName,
            pirateShip: pirateShip,
            pirateOrigin: pirateOrigin,
            pirateSex: pirateSex,
            pirateAge: pirateAge,
            startDate: startDate,
            pirateSkill: pirateSkill,
            pirateVeteran: pirateVeteran,
            pirateEyePatch: pirateEyePatch,
            piratePegLeg: piratePegLeg,
            pirateHookHand: pirateHookHand,
            pirateDiet: pirateDiet,
            piratePictureUrl: piratePictureUrl,
            pirateShipPictureUrl: pirateShipPictureUrl,
        })
            .then((response) => {
                if (response.data.errors) {
                    console.log(response.data.errors);
                    setErrs(response.data.errors);
                } else {
                    console.log(response.data);
                    navigate(`/pirate/${response.data._id}`);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div>
            <h2>Edit Pirate</h2>
            <form onSubmit={submitForm}>
                <div>
                    <label>Pirate Name</label>
                    {
                        errs.pirateName ?
                            <span style className="error-alert">{errs.pirateName.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="pirateName"
                        value={pirateName}
                        onChange={(e) => setPirateName(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Pirate Ship</label>
                    {
                        errs.pirateShip ?
                            <span style className="error-alert">{errs.pirateShip.message}</span>
                            : null
                    }
                    <select
                        name="pirateShip"
                        value={pirateShip}
                        onChange={(e) => setPirateShip(e.target.value)} //updates state instantly
                    >
                        <option value="Barkadeer">Barkadeer - a small pier or jetty vessel</option>
                        <option value="Barque">Barque - 3-5 masts wind blown sailing vessel</option>
                        <option value="Brigantine">Brigantine - a 2 masted sailing vessel</option>
                        <option value="Clipper">Clipper - a fast vessel with 3 sails</option>
                        <option value="Cog">Cog - a small warship</option>
                        <option value="Galleon">Galleon - a large 3 masted Merchant or Warship with 2+ decks of Spanish Origin</option>
                        <option value="Gally">Gally - a low flat vessel propelled by oars</option>
                        <option value="Hulk">Hulk - a gutted floating vessel used as prison for pirates</option>
                        <option value="Jolly Boat">Jolly Boat - a light boat carried by larger ship</option>
                        <option value="Long Boat">Long Boat - a logistical Boat used to hold anchors, chains and transport bulk</option>
                        <option value="Lugger">Lugger - a regular sailing vessel with lugsail rig</option>
                        <option value="Man-of-War">Man-of-War - a heavily armed vessel outfitted for battle</option>
                        <option value="Pink">Pink - a small vessel</option>
                        <option value="Pinnace">Pinnace - a ship to shore communication skiff</option>
                        <option value="Pirogue">Pirogue - a small canoe used to overtake large vessels</option>
                        <option value="Schooner">Schooner - a regular sailing vessel</option>
                        <option value="Sloop">Sloop -  a shallow draught and maneuverable vessel favored by Pirates</option>
                    </select>
                </div>

                <div>
                    <label>Pirate Origin</label>
                    {
                        errs.pirateOrigin ?
                            <span style className="error-alert">{errs.pirateOrigin.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="pirateOrigin"
                        value={pirateOrigin}
                        onChange={(e) => setPirateOrigin(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Pirate Gender</label>
                    {
                        errs.pirateSex ?
                            <span style className="error-alert">{errs.pirateSex.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="pirateSex"
                        value={pirateSex}
                        onChange={(e) => setPirateSex(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Pirate Age</label>
                    {
                        errs.pirateAge ?
                            <span style className="error-alert">{errs.pirateAge.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="pirateAge"
                        value={pirateAge}
                        onChange={(e) => setPirateAge(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Approximate Year of Piracy</label>
                    {
                        errs.startDate ?
                            <span style className="error-alert">{errs.startDate.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Pirate Skill</label>
                    {
                        errs.pirateSkill ?
                            <span style className="error-alert">{errs.pirateSkill.message}</span>
                            : null
                    }
                    <select
                        name="pirateSkill"
                        value={pirateSkill}
                        onChange={(e) => setPirateSkill(e.target.value)} //updates state instantly
                    >
                        {/* **Look into making the job roles a different color * refer to the js basics font style and css */}
                        <option value="Boatswain">Boatswain -oversaw activities such as dropping and weighing the anchor, setting the sails, and making sure the deck was swabbed</option>
                        <option value="Carpenter">Carpenter - in charge of ensuring the ship’s structural integrity</option>
                        <option value="Cooper">Cooper - a person skilled in making and maintaining wooden barrels</option>
                        <option value="Deckhand">Deckhand - a generalist</option>
                        <option value="Master Gunner">Master Gunner - in charge of all of the cannons, gunpowder, shot, and everything else with keeping the cannons battle-ready</option>
                        <option value="Musician">Musician - a privileged music composer of the sort</option>
                        <option value="Navigator">Navigator - able to use the stars to determine a ship's position</option>
                        <option value="Pirate-Lunch-Lady">Pirate-Lunch-Lady - a rusty 'ol galley Pirate with knowledge of a 'proper' swig, primitive cooking skills and optional contemporary makeshift hairnet</option>
                        <option value="Plank-walker">Plank walker - usually done only once. This lucky title is reserved for a rogue seafarer that is often on 'the plank' but never executed</option>
                        <option value="Prisoner">Prisoner - a captive of a prize ship</option>
                        <option value="Quartermaster">Quartermaster - in charge of seeing that the captain’s orders were carried out </option>
                        <option value="Scallywag">Scallywag - a good for nothing, inexperienced pirate</option>
                        <option value="Seasoned Swashbuckler">Seasoned Swashbuckler - a metrosexual swaggering swordsmen</option>
                        <option value="Surgeon">Surgeon - a veteran sailor with wound-care experience</option>
                        <option value="The Captain">The Captain - elected by the crew, Captain's power was only absolute in the in the midst of battle or when giving chase</option>
                        <option value="Onboardsmen">Onboardsmen - 'just onboard'</option>

                    </select>
                </div>

                <div>
                    <label>Armed Conflict Experience?</label>
                    <input
                        type="checkbox"
                        name="pirateVeteran"
                        value={pirateVeteran}
                        checked={pirateVeteran}
                        onChange={(e) => setPirateVeteran(!pirateVeteran)} //updates state instantly
                    />
                </div>
                <div>
                    <label>Pirate Eye Patch ?</label>
                    <input
                        type="checkbox"
                        name="pirateEyePatch"
                        value={pirateEyePatch}
                        checked={pirateEyePatch}
                        onChange={(e) => setPirateEyePatch(!pirateEyePatch)} //updates state instantly
                    />
                </div>
                <div>
                    <label>Pirate Peg-Leg ?</label>
                    <input
                        type="checkbox"
                        name="piratePegLeg"
                        value={piratePegLeg}
                        checked={piratePegLeg}
                        onChange={(e) => setPiratePegLeg(!piratePegLeg)} //updates state instantly
                    />
                </div>
                <div>
                    <label>Pirate Hook Hand ?</label>
                    <input
                        type="checkbox"
                        name="pirateHookHand"
                        value={pirateHookHand}
                        checked={pirateHookHand}
                        onChange={(e) => setPirateHookHand(!pirateHookHand)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Pirate Diet</label>
                    {
                        errs.pirateDiet ?
                            <span style className="error-text">{errs.pirateDiet.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="pirateDiet"
                        value={pirateDiet}
                        onChange={(e) => setPirateDiet(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Photo URL of Pirate</label>
                    {
                        errs.piratePictureUrl ?
                            <span style className="error-alert">{errs.piratePictureUrl.message}</span>
                            : null
                    }
                    <input
                        type="text"
                        name="piratePictureUrl"
                        value={piratePictureUrl}
                        onChange={(e) => setPiratePictureUrl(e.target.value)} //updates state instantly
                    />
                </div>

                <div>
                    <label>Photo URL of Ship</label>
                    {
                        errs.pirateShipPictureUrl ?
                            <span style className="error-alert">{errs.pirateShipPictureUrl.message}</span>
                            : null
                    }
                    {/* Make drop down of jpg and only ships of that choice */}
                    <input
                        type="text"
                        name="pirateShipPictureUrl"
                        value={pirateShipPictureUrl}
                        onChange={(e) => setPirateShipPictureUrl(e.target.value)} //updates state instantly
                    />
                </div>
                <button
                    type="submit"
                >Update Pirate</button>
            </form>
            <div>
                <button
                    onClick={() => window.history.back()}>Previous page</button>
            </div>
        </div>
    )
}

export default EditPirate;
