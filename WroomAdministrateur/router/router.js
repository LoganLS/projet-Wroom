let HomeController = require('./../controllers/HomeController');
let ResultatController = require('./../controllers/ResultatController');
let EcurieController = require('./../controllers/EcurieController');
let PiloteController = require('./../controllers/PiloteController');
let CircuitController = require('./../controllers/CircuitController');

// Routes
module.exports = function(app){

// Main Routes
    app.get('/', HomeController.Index);

// pilotes
    app.get('/menuPilotes',PiloteController.menuPilote);
    app.get('/menuPilotes/ajouterPilote',PiloteController.pageAjouterPilote);
    app.get('/menuPilotes/ajouterPilote/ajout',PiloteController.pageAjouterPilote);
    app.get('/menuPilotes/modifierPilote/:numPilote',PiloteController.pageModifierPilote);
    app.get('/menuPilotes/supprimerPilote/:numPilote',PiloteController.pageSupprimerPilote);

 // circuits
    app.get('/menuCircuits',CircuitController.menuCircuit);
    app.get('/menuCircuits/ajouterCircuit',CircuitController.pageAjouterCircuit);
    app.get('/menuCircuits/modifierCircuit/:numCircuit',CircuitController.pageModifierCircuit);
    //app.get('/menuCircuits/supprimerCircuit/:numCircuit',CircuitController.pageSupprimerCircuit);

// Ecuries
   //app.get('/ecuries', EcurieController.ListerEcurie);

 //Résultats
   //app.get('/resultats', ResultatController.ListerResultat);
    



// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
