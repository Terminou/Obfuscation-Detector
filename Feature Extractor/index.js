console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

var inputPath = '/Users/erenkilic/Desktop/Obfuscation Detector/Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/';

//Get all input names
var inputNameList = fs.readdirSync(inputPath);
for (let i = 0; i < inputNameList.length; i++) {
    fs.readFile(inputPath + inputNameList[i], 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    });

    try {
        var result = esprima.tokenize(data);
    } catch (error) {
        console.log("Error!");
    }
}