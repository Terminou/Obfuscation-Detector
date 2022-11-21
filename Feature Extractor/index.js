console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

//Not obfuscated samples
var inputPath = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/';
var writePath = '/Users/erenkilic/Desktop/Obfuscation Detector/AST/';

//Obfuscated samples
var inputPath2 = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesObfuscated/JavascriptSamplesObfuscated/';
var writePath2 = '/Users/erenkilic/Desktop/Obfuscation Detector/AST-Obfuscated/';

//Get all input names
var inputNameList = fs.readdirSync(inputPath);
var inputNameList2 = fs.readdirSync(inputPath2);

//Read samples and then tokenize it using Esprima
for (let i = 0; i < inputNameList.length; i++) {
    const data = fs.readFileSync(inputPath + inputNameList[i], 'utf8');
    try {
        var result = esprima.tokenize(data);
        //Convert it to JSON format to write
        let jsonString = JSON.stringify(result);
        let outName = inputNameList[i].substring(0, inputNameList[i].indexOf('.js')) + '.ast';
        fs.writeFileSync(writePath + outName, jsonString, 'utf-8');
    } catch (error) {
        console.log("Error!");
    }
}

//Repeat the same procedure for the remaining group
for (let i = 0; i < inputNameList2.length; i++) {
    const data = fs.readFileSync(inputPath2 + inputNameList2[i], 'utf8');
    try {
        var result = esprima.tokenize(data);
        //Convert it to JSON format to write
        let jsonString = JSON.stringify(result);
        let outName = inputNameList2[i].substring(0, inputNameList2[i].indexOf('.js')) + '.ast';
        fs.writeFileSync(writePath2 + outName, jsonString, 'utf-8');
    } catch (error) {
        console.log("Error!");
    }
}