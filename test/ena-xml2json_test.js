'use strict';

var ex2j = require('../lib/ena-xml2json.js');


/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['ENA-XML2JSON'] = {
  
  setUp: function(done) {
    this.taxon_xml_entry = "test/meleagris_gallopavo_silvestris.xml";
    this.cds_xml_entry = "test/meleagris_cds.xml";
    done();
  },
  
  'Should readFileSync the two test ENA XML files.': function(test) {
    test.expect(2);
    test.equal(ex2j.readFileSync(this.taxon_xml_entry).length, 2858, 'should synch read ' + this.taxon_xml_entry);
    test.equal(ex2j.readFileSync(this.cds_xml_entry).length, 49892, 'should synch read ' + this.cds_xml_entry);
    test.done();
  },

  
  'Convert xml string into json object (strip Root) for Taxon entry': function(test) {
	  test.expect(1);
	  var xml = ex2j.readFileSync(this.taxon_xml_entry);
	  var json = ex2j.xml2json(xml)
	  test.equal(json.taxon.scientificname, 'Meleagris gallopavo silvestris');
	  test.done();
  },
  
  'Convert xml string into json object (strip Root) for CDS entry': function(test) {
	  test.expect(1);
	  var xml = ex2j.readFileSync(this.cds_xml_entry);
	  var json = ex2j.xml2json(xml);

	  test.equal(json.entry[0].accession, 'AAF18048');
	  test.done();
  }
  
  
};
