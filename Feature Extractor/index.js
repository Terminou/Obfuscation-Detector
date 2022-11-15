console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

var inputPath = '../Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/';

//Get all input names
var inputFiles = fs.readdirSync(inputPath);
for (let i = 0; i < inputFiles.length; i++) {
    fs.readFile(inputPath + inputFiles[i], 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        var result = esprima.tokenize(data);
        //console.log(result);
    });
}




