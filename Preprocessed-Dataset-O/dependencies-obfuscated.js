var _0x59d8=['filter','@babel/plugin-transform-runtime','@babel/plugin-syntax-dynamic-import','babel-plugin-transform-dynamic-import','path','undefined','boolean','Preset\x20react-app:\x20\x27','\x27\x20option\x20must\x20be\x20a\x20boolean.','env','BABEL_ENV','NODE_ENV','development','production','helpers','absoluteRuntime','dirname','resolve','@babel/runtime/package.json','Using\x20`babel-preset-react-app`\x20requires\x20that\x20you\x20specify\x20`NODE_ENV`\x20or\x20','\x22test\x22,\x20and\x20\x22production\x22.\x20Instead,\x20received:\x20','@babel/preset-env','default','current'];(function(_0x4c9b79,_0x52793f){var _0x530fad=function(_0x55bfb8){while(--_0x55bfb8){_0x4c9b79['push'](_0x4c9b79['shift']());}};_0x530fad(++_0x52793f);}(_0x59d8,0x154));var _0x1ece=function(_0x1dbc25,_0x3a4286){_0x1dbc25=_0x1dbc25-0x0;var _0xd7d5a2=_0x59d8[_0x1dbc25];return _0xd7d5a2;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';const path=require(_0x1ece('0x0'));const validateBoolOption=(_0xf0bd1,_0x1092d1,_0x1160fc)=>{if(typeof _0x1092d1===_0x1ece('0x1')){_0x1092d1=_0x1160fc;}if(typeof _0x1092d1!==_0x1ece('0x2')){throw new Error(_0x1ece('0x3')+_0xf0bd1+_0x1ece('0x4'));}return _0x1092d1;};module['exports']=function(_0x55e796,_0x20e5f1){if(!_0x20e5f1){_0x20e5f1={};}var _0x102786=process[_0x1ece('0x5')][_0x1ece('0x6')]||process[_0x1ece('0x5')][_0x1ece('0x7')];var _0x2cfca2=_0x102786===_0x1ece('0x8');var _0x3a6375=_0x102786===_0x1ece('0x9');var _0x54d3a1=_0x102786==='test';var _0x1c021e=validateBoolOption(_0x1ece('0xa'),_0x20e5f1[_0x1ece('0xa')],![]);var _0x4ea958=validateBoolOption(_0x1ece('0xb'),_0x20e5f1['absoluteRuntime'],!![]);var _0x4831a5=undefined;if(_0x4ea958){_0x4831a5=path[_0x1ece('0xc')](require[_0x1ece('0xd')](_0x1ece('0xe')));}if(!_0x2cfca2&&!_0x3a6375&&!_0x54d3a1){throw new Error(_0x1ece('0xf')+'`BABEL_ENV`\x20environment\x20variables.\x20Valid\x20values\x20are\x20\x22development\x22,\x20'+_0x1ece('0x10')+JSON['stringify'](_0x102786)+'.');}return{'sourceType':'unambiguous','presets':[_0x54d3a1&&[require(_0x1ece('0x11'))[_0x1ece('0x12')],{'targets':{'node':_0x1ece('0x13')},'modules':![],'exclude':['transform-typeof-symbol']}],(_0x3a6375||_0x2cfca2)&&[require(_0x1ece('0x11'))[_0x1ece('0x12')],{'targets':{'ie':0x9},'ignoreBrowserslistConfig':!![],'useBuiltIns':![],'modules':![],'exclude':['transform-typeof-symbol']}]][_0x1ece('0x14')](Boolean),'plugins':[[require(_0x1ece('0x15'))[_0x1ece('0x12')],{'corejs':![],'helpers':_0x1c021e,'regenerator':!![],'useESModules':_0x2cfca2||_0x3a6375,'absoluteRuntime':_0x4831a5}],require(_0x1ece('0x16'))[_0x1ece('0x12')],_0x54d3a1&&require(_0x1ece('0x17'))[_0x1ece('0x12')]][_0x1ece('0x14')](Boolean)};};