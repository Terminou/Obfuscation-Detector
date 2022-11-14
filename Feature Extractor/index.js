console.log('Tokenizing programs...');

var esprima = require('esprima');

const fs = require('fs');

fs.readFile('../Dataset/JavascriptSamplesNotObfuscated/JavascriptSamples/ng-jq-obfuscated.spec.js', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    var result = esprima.tokenize(data);
    console.log(result);
});