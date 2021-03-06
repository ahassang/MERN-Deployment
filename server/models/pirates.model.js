const mongoose = require('mongoose');


const PirateSchema = new mongoose.Schema({

    pirateName: {
        type: String,
        required: [true, "You must have a pirate name"],
        minLength: [2, "The pirates name must be at least 2 characters long"],
    },

    pirateShip: {
        type: String, //drop down menu
        required: [true, "Choose either:  'Barkadeer - small pier or jetty vessel','Barque - 3-5 masts wind blown sailing ship','Brigantine - 2 mast sailing ship','Clipper - a fast vessel with 3 sails','Cog - A small warship','Galleon - A large 3 masted Merchant or Warship with 2+ decks of Spanish Origin','Gally - a low flat vessel propelled by oars','Hulk - Gutted floating vessel used as a prison for pirates',' Jolly Boat - light boat carried by larger ships','Long Boat - Logistical Boat used to hold anchors, chains and transport bulk','Lugger - regular sailing vessel with lugsail rig','Man-of-War - A heavily armed vessel outfitted for battle','Pink - a small vessel',' Pinnace - ship to shore communication skiff','Pirogue - small canoe used to overtake large vessels','Schooner - regular sailing vessel','Sloop - shallow draught and maneuverable vessel favored by Pirates' ,"],
        enum: ['Barkadeer', 'Barque', 'Brigantine', 'Clipper', 'Cog', 'Galleon', 'Gally', 'Hulk', 'Jolly Boat', 'Long Boat', 'Lugger', 'Man-of-War', 'Pink', 'Pinnace', 'Pirogue', 'Schooner', 'Sloop']
    },

    pirateOrigin: {
        type: String, //make this a drop down 
        required: [true, "As they say 'A Mediterranean pond-pirate is nuttn but a bearded fisherman on the high seas of the Caribbean Ar!'"],
    },

    pirateSex: {
        type: String,
        required: [false, "It helps us keep a good count of who is on board!"],
    },

    pirateAge: {
        type: String,
        required: [false, "Choose either:  'Young','Adult','Senior'"],
        enum: ['Young', 'Adult', 'Senior'],
    },

    startDate: {
        type: Date,
        required: [true, "You must include a start date"],
        min: ['1400-01-01', " Start date must be after the year 1300 - please try again! "],
        max: [new Date(), " You cannot have entered a pirate aboard Ye 'olde ship in the future Rrr!"],
    },

    pirateSkill: {
        type: String,
        required: [true, "Choose something ya scoundrel or be marooned by days-end!"],
        enum: ['Navigator', 'Scallywag', 'Deckhand', 'Quartermaster', 'Boatswain', 'The Captain', 'Prisoner', 'Cooper', 'Plank-walker', 'Seasoned Swashbuckler', 'Carpenter', 'Surgeon', 'Master Gunner', 'Musician', 'Pirate-Lunch-Lady', 'Onboardsmen'],
    },

    pirateVeteran: {
        type: Boolean,
        required: [true, "Helps us to determine who has 'hands on' experience "],
    },

    pirateEyePatch: {
        type: Boolean,
        required: [true, "Your Pirate needs to be able to see below deck too "],
    },

    piratePegLeg: {
        type: Boolean,
        required: [true, "If your Pirate has a peg-leg he can apply for pirate disability"],
    },

    pirateHookHand: {
        type: Boolean,
        required: [true, "If your Pirate has a hook-hand he can apply for the annual thumb-war convention held in Spanish Town, Jamaica!"],
    },

    pirateDiet: {
        type: String,
        required: [false, "Choose either: 'Rum','Grog','Scurvy-ridden'"],
        enum: ['Rum', 'Grog', 'Scurvy-ridden'],
    },


    piratePictureUrl: {
        type: String,
        required: [true, "Lets show off our peg-legged scallywag"],
    },

    pirateShipPictureUrl: {
        type: String,
        required: [true, "Lets show off our Prize"],
    },


}, { timestamps: true })

// collection names are all lowercase and plural - based on this string 'Animal'
module.exports = mongoose.model('Pirate', PirateSchema);



