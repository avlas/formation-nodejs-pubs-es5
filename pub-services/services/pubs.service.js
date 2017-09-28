const _ = require('lodash');
const moment = require('moment');

var pubsJson = require('../mocks/pubs.json');

function listAllPubs() {
    return pubsJson;
}

function listOpenPubs(openDate) {
    var openPubs = [];

    return _.filter(pubsJson, function (pub) {
        return _.find(pub.openDays, function (openDay) {
            if(openDay === openDate) {
                openPubs.push(pub);
                return openPubs;
            }
        });
    });

    // var nbPubs = Object.keys(pubsJson).length;
    // var nbPubs = _.size(nbPubs);

    // for (var i=0; i < pubsJson.length; i++) {
    //     var openDays = pubsJson[i].openDays;
    //
    //     for (var j=0; j < openDays.length; j++) {
    //         if(openDate === openDays[j]) {
    //             openPubs.push(pubsJson[i]);
    //         }
    //     }
    // }
    // return openPubs;
}

module.exports = {
    listAll: listAllPubs,
    listOpen: listOpenPubs
};

