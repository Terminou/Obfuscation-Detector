console.log('Tokenizing programs...');

var esprima = require('esprima');

var result = esprima.parseScript('answer = 42');

console.log(result);