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
    app.post('/menuPilotes/ajouterPilote/ajout',PiloteController.ajouterPilote);
    app.get('/menuPilotes/modifierPilote/:numPilote',PiloteController.pageModifierPilote);
    app.post('/menuPilotes/modifierPilote/:numPilote/modifier',PiloteController.modifierPilote);
    app.get('/menuPilotes/supprimerPilote/:numPilote',PiloteController.pageSupprimerPilote);

 // circuits
    app.get('/menuCircuits',CircuitController.menuCircuit);
    app.get('/menuCircuits/ajouterCircuit',CircuitController.pageAjouterCircuit);
    app.post('/menuCircuits/ajouterCircuit/ajout',CircuitController.ajouterCircuit);
    app.get('/menuCircuits/modifierCircuit/:numCircuit',CircuitController.pageModifierCircuit);
    app.post('/menuCircuits/modifierCircuit/:numCircuit/modifier',CircuitController.modifierCircuit);
    app.get('/menuCircuits/supprimerCircuit/:numCircuit',CircuitController.pageSupprimerCircuit);

// Ecuries
    app.get('/menuEcuries', EcurieController.ListerEcurie);
    app.get('/detailEcurie/:numEcurie', EcurieController.DetailEcurie);

 //Résultats
    app.get('/menuResultats', ResultatController.ListerGrandPrix);
   //app.get('/resultats', ResultatController.ListerResultat);
    



// tout le reste
  app.get('*', HomeController.Index);
  app.post('*', HomeController.Index);

};
