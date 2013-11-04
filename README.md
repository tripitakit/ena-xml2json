# ena-xml2json

(EMBL-EBI) ENA xml2json parser

[Unstable] [Alpha]

##Installation
~~~
$ npm install ena-xml2json
~~~

## Examples
~~~javascript

/**
 * Dependencies
 */
var ena = require('ena-xml2json');
 

/**
 * Two test files
 */
var ena_test_taxon_xml = "test/meleagris_gallopavo_silvestris.xml";
var ena_test_cds_xml = "test/meleagris_cds.xml";


/**
 * readFileSync(path) Sync read XML file into a string
 */
var meleagris_taxon_xml = ena.readFileSync(ena_test_taxon_xml);
console.log(meleagris_taxon_xml);

var meleagris_cds_xml = ena.readFileSync(ena_test_cds_xml);
console.log(meleagris_cds_xml);

 
/**
 * Convert xml string into json object for a Taxon entry (stripping Root node)
 */
var meleagris_taxon_json = ena.xml2json(meleagris_taxon_xml);
console.log(meleagris_taxon_json.taxon.scientificname); // 'Meleagris gallopavo silvestris'


/**
 * Convert xml string into json object for a CDS entry (stripping Root node)
 */
var meleagris_cds_json = ena.xml2json(meleagris_cds_xml);
console.log(meleagris_taxon_json.entry[0].accession); // 'AAF18048'
 
~~~

## Release History

0.0.1 Sync read file; convert root node of ENA xml entries (strings) to json objects

## License
Copyright (c) 2013 Patrick De Marta  
Licensed under the MIT license.
