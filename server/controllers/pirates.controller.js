const piratesModel = require('../models/pirates.model');
const PirateShip = require('../models/pirates.model');

module.exports = {
    getAll: (req, res) => {
        PirateShip.find()
        .sort({ pirateName: "ascending" })
            .then((allPirates) => {
                console.log(allPirates);
                res.json(allPirates);
            })
            .catch((err) => {
                console.log("error in getAll:" + err);
                res.json(err);
            })
    },

    create: (req, res) => {
        //create a pirate on DB
        console.log(req.body);
        PirateShip.create(req.body)
            .then((newPirate) => {
                console.log(newPirate);
                res.json(newPirate);
            })
            .catch((err) => {
                console.log("error in create: " + err);
                res.json(err);
            })
    },

    getOne: (req, res) => {
        //get a single pirate
        console.log(req.params.id);
        PirateShip.findById(req.params.id)
            .then((onePirate) => {
                console.log(onePirate);
                res.json(onePirate);
            })
            .catch((err) => {
                console.log("error in getOne:" + err);
                res.json(err);
            })
    },

    update: (req, res) => {
        // update a single pirate by ID
        console.log(req.params.id);
        console.log(req.body);
        PirateShip.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
            .then((updatedPirate) => {
                console.log(updatedPirate);
                res.json(updatedPirate);
            })
            .catch((err) => {
                console.log("error in update: " + err);
                res.json(err);
            })
    },

    delete: (req, res) => {
        //remove a single pirate by ID
        console.log(req.params.id);
        PirateShip.findByIdAndRemove(req.params.id)
            .then((removedPirate) => {
                console.log(removedPirate);
                res.json(removedPirate);
            })
            .catch((err) => {
                console.log("error in delete:" + err);
                res.json(err);
            })
    },
}