//import my controllers
const PiratesController = require('../controllers/pirates.controller');
//create valid routes
module.exports = (app) => {
    app.get('/api/pirates', PiratesController.getAll);
    app.post('/api/pirates', PiratesController.create);
    app.get('/api/pirates/:id', PiratesController.getOne);
    app.put('/api/pirates/:id', PiratesController.update);
    app.delete('/api/pirates/:id', PiratesController.delete);

}