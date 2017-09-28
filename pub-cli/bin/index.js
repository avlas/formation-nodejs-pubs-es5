#!/usr/bin/env node
// LIBs
var program = require('commander');
var package = require('../package.json');

// MODULE pub-cli
var mainService = require('../src/main');

program
    .version(package.version)
    .option('-l, --list', 'Get all pubs')
    .option('-l, --opened', 'Get opened pubs')
    .parse(process.argv);

if (program.list) {
    console.log('ALL PUBs', mainService.allPubs());
    // console.log('ALL PUBs',require('../src/main').openPubs());
}

if (program.opened) {
    console.log('OPEN PUBs',  mainService.openPubs('Tuesday'));
}

// module.exports = {
//     main: {
//         mainService : mainService
//     }
// }