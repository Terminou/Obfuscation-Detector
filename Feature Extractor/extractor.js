console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

//Not obfuscated samples
var readPath = '/Users/erenkilic/Desktop/Obfuscation Detector/AST/';

//Obfuscated samples
var readPath2 = '/Users/erenkilic/Desktop/Obfuscation Detector/AST-Extractor/';

//Get all input names
var inputNameList = fs.readdirSync(readPath);
var inputNameList2 = fs.readdirSync(readPath2);
