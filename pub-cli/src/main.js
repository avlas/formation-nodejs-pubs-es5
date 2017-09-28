var pubServiceModule = require('pub-services');

function getAllPubs(){
    return pubServiceModule.services.pubService.listAll();
}

function getOpenPubs(openDate){
    return pubServiceModule.services.pubService.listOpen(openDate);
}

module.exports = {
    allPubs : getAllPubs,                   // var getAllPubs;
    openPubs : getOpenPubs
}