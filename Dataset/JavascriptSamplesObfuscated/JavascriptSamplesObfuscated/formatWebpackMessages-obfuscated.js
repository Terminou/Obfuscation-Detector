var _0x1c82=['length','trim','splice','Module\x20not\x20found:\x20Cannot\x20find\x20file:','Cannot\x20find\x20file:','match','Run\x20`npm\x20install\x20node-sass`\x20or\x20`yarn\x20add\x20node-sass`\x20inside\x20your\x20workspace.','filter','errors','warnings','some','chalk','indexOf','test','map','join','replace','Line\x20$1:','Attempted\x20import\x20error:\x20\x27$1\x27\x20is\x20not\x20exported\x20from\x20\x27$2\x27.','Attempted\x20import\x20error:\x20\x27$1\x27\x20is\x20not\x20exported\x20from\x20\x27$3\x27\x20(imported\x20as\x20\x27$2\x27).','split'];(function(_0x2f3e31,_0x3a89c9){var _0x2c6db2=function(_0x1fa352){while(--_0x1fa352){_0x2f3e31['push'](_0x2f3e31['shift']());}};_0x2c6db2(++_0x3a89c9);}(_0x1c82,0x89));var _0x46c3=function(_0x4f291c,_0xdce986){_0x4f291c=_0x4f291c-0x0;var _0x18d97b=_0x1c82[_0x4f291c];return _0x18d97b;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';const chalk=require(_0x46c3('0x0'));const friendlySyntaxErrorLabel='Syntax\x20error:';function isLikelyASyntaxError(_0x21a794){return _0x21a794[_0x46c3('0x1')](friendlySyntaxErrorLabel)!==-0x1;}function formatMessage(_0x292d2d){let _0x3d1c59=_0x292d2d['split']('\x0a');_0x3d1c59=_0x3d1c59['filter'](_0x19d34c=>!/Module [A-z ]+\(from/[_0x46c3('0x2')](_0x19d34c));_0x3d1c59=_0x3d1c59[_0x46c3('0x3')](_0x183d3b=>{const _0x1195a3=/Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/['exec'](_0x183d3b);if(!_0x1195a3){return _0x183d3b;}const [,_0x5612b9,_0x9f95fd,_0x10e6ba]=_0x1195a3;return friendlySyntaxErrorLabel+'\x20'+_0x10e6ba+'\x20('+_0x5612b9+':'+_0x9f95fd+')';});_0x292d2d=_0x3d1c59[_0x46c3('0x4')]('\x0a');_0x292d2d=_0x292d2d[_0x46c3('0x5')](/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g,friendlySyntaxErrorLabel+'\x20$3\x20($1:$2)\x0a');_0x292d2d=_0x292d2d[_0x46c3('0x5')](/Line (\d+):\d+:/g,_0x46c3('0x6'));_0x292d2d=_0x292d2d[_0x46c3('0x5')](/^.*export '(.+?)' was not found in '(.+?)'.*$/gm,_0x46c3('0x7'));_0x292d2d=_0x292d2d['replace'](/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm,'Attempted\x20import\x20error:\x20\x27$2\x27\x20does\x20not\x20contain\x20a\x20default\x20export\x20(imported\x20as\x20\x27$1\x27).');_0x292d2d=_0x292d2d['replace'](/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm,_0x46c3('0x8'));_0x3d1c59=_0x292d2d[_0x46c3('0x9')]('\x0a');if(_0x3d1c59[_0x46c3('0xa')]>0x2&&_0x3d1c59[0x1][_0x46c3('0xb')]()===''){_0x3d1c59[_0x46c3('0xc')](0x1,0x1);}_0x3d1c59[0x0]=_0x3d1c59[0x0][_0x46c3('0x5')](/^(.*) \d+:\d+-\d+$/,'$1');if(_0x3d1c59[0x1]&&_0x3d1c59[0x1]['indexOf']('Module\x20not\x20found:\x20')===0x0){_0x3d1c59=[_0x3d1c59[0x0],_0x3d1c59[0x1][_0x46c3('0x5')]('Error:\x20','')[_0x46c3('0x5')](_0x46c3('0xd'),_0x46c3('0xe'))];}if(_0x3d1c59[0x1]&&_0x3d1c59[0x1][_0x46c3('0xf')](/Cannot find module.+node-sass/)){_0x3d1c59[0x1]='To\x20import\x20Sass\x20files,\x20you\x20first\x20need\x20to\x20install\x20node-sass.\x0a';_0x3d1c59[0x1]+=_0x46c3('0x10');}_0x3d1c59[0x0]=chalk['inverse'](_0x3d1c59[0x0]);_0x292d2d=_0x3d1c59[_0x46c3('0x4')]('\x0a');_0x292d2d=_0x292d2d[_0x46c3('0x5')](/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm,'');_0x292d2d=_0x292d2d[_0x46c3('0x5')](/^\s*at\s<anonymous>(\n|$)/gm,'');_0x3d1c59=_0x292d2d[_0x46c3('0x9')]('\x0a');_0x3d1c59=_0x3d1c59[_0x46c3('0x11')]((_0x8ce81c,_0x2add93,_0x34c266)=>_0x2add93===0x0||_0x8ce81c[_0x46c3('0xb')]()!==''||_0x8ce81c[_0x46c3('0xb')]()!==_0x34c266[_0x2add93-0x1]['trim']());_0x292d2d=_0x3d1c59[_0x46c3('0x4')]('\x0a');return _0x292d2d[_0x46c3('0xb')]();}function formatWebpackMessages(_0x2fba71){const _0x5989bb=_0x2fba71[_0x46c3('0x12')][_0x46c3('0x3')](function(_0x5e805d){return formatMessage(_0x5e805d,!![]);});const _0x1efb5e=_0x2fba71[_0x46c3('0x13')][_0x46c3('0x3')](function(_0x2745ac){return formatMessage(_0x2745ac,![]);});const _0x1b043f={'errors':_0x5989bb,'warnings':_0x1efb5e};if(_0x1b043f['errors'][_0x46c3('0x14')](isLikelyASyntaxError)){_0x1b043f['errors']=_0x1b043f[_0x46c3('0x12')]['filter'](isLikelyASyntaxError);}return _0x1b043f;}module['exports']=formatWebpackMessages;