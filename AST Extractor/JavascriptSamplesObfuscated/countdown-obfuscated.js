var _0x51c4=['remaining','exports','assert','limit','strictEqual','number','function','mustCall','dec','Countdown\x20expired'];(function(_0x179098,_0x38fc49){var _0x1b6a09=function(_0x116c74){while(--_0x116c74){_0x179098['push'](_0x179098['shift']());}};_0x1b6a09(++_0x38fc49);}(_0x51c4,0x1c4));var _0x3f95=function(_0x435b91,_0x110c49){_0x435b91=_0x435b91-0x0;var _0x5b09ae=_0x51c4[_0x435b91];return _0x5b09ae;};/* eslint-disable node-core/required-modules */
'use strict';const assert=require(_0x3f95('0x0'));const kLimit=Symbol(_0x3f95('0x1'));const kCallback=Symbol('callback');const common=require('./');class Countdown{constructor(_0x2eef3a,_0x128355){assert[_0x3f95('0x2')](typeof _0x2eef3a,_0x3f95('0x3'));assert[_0x3f95('0x2')](typeof _0x128355,_0x3f95('0x4'));this[kLimit]=_0x2eef3a;this[kCallback]=common[_0x3f95('0x5')](_0x128355);}[_0x3f95('0x6')](){assert(this[kLimit]>0x0,_0x3f95('0x7'));if(--this[kLimit]===0x0)this[kCallback]();return this[kLimit];}get[_0x3f95('0x8')](){return this[kLimit];}}module[_0x3f95('0x9')]=Countdown;