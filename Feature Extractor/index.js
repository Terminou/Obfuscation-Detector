console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

var inputPath = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/';
var writePath = '/Users/erenkilic/Desktop/Obfuscation Detector/AST/';

//Get all input names
var inputNameList = fs.readdirSync(inputPath);
for (let i = 0; i < inputNameList.length; i++) {
    const data = fs.readFileSync(inputPath + inputNameList[i], 'utf8');
    try {
        var result = esprima.tokenize(data);
        let jsonString = JSON.stringify(result);
        let outName = inputNameList[i].substring(0, inputNameList[i].indexOf('.js')) + '.ast';
        fs.writeFileSync(writePath + outName, jsonString, 'utf-8');
    } catch (error) {
        console.log("Error!");
    }
}