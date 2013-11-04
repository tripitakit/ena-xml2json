/*
 * ena-xml2json
 * https://github.com/tripitakit/ena-xml2json
 *
 * Copyright (c) 2013 Patrick De Marta
 * Licensed under the MIT license.
 */

'use strict';
var fs = require('fs'),
	xml2json = require("node-xml2json");


var EnaXml2Json = {
	readFileSync: function(path) {
		return fs.readFileSync(path, 'utf-8');
	},
	
	xml2json: function(xml){
		return xml2json.parser(xml).root;
	},
	
	
};


module.exports = EnaXml2Json;