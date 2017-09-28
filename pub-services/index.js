// Fichier de mapping importe dans un autre module

var pubService = require('./services/pubs.service');

//  mappe and exporte les Services metiers expose a l'exterieur
module.exports = {
    services: {
        pubService : pubService
    }
}

// var allPubs = pubService.listAll();
// console.log( 'ALL PUBS : ', allPubs );
//
// var openPubs = pubService.listOpen('Tuesday');
// console.log(  'OPEN PUBS : ', openPubs );

