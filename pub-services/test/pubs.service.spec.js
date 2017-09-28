// LIBS  --------------------------------------
var chai = require('chai');
var expect = chai.expect;

// MODULE pub-services  --------------------------------------
var pubService = require('../services/pubs.service');

// listAllPubs -------------------------------------------------------------------------
describe('pubService', function() {

    describe('#listAllPubs()', function() {

        it('given_pubsJson_when_listAllPubs_thenIsArray', function() {
            expect(pubService.listAll()).to.be.an('array');
        });

        it('given_pubsJson_when_listAllPubs_thenArrayLength', function() {
            expect(pubService.listAll().length).to.equal(1);
        });
    });

    describe('#listOpenPubs()', function() {

        it('given_pubsJson_when_listOpenPubs_thenIsArray', function() {
            expect(pubService.listOpen('Tuesday')).to.be.an('array');
        });

        it('given_pubsJson_when_listOpenPubs_thenArrayLength', function() {
            expect(pubService.listOpen('Tuesday').length).to.equal(1);
        });

    });
});