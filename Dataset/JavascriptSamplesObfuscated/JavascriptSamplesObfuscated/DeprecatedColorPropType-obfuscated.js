var _0x24ad=['normalizeColor','Required\x20','`\x20was\x20not\x20specified\x20in\x20`','`\x20supplied\x20to\x20`','Valid\x20color\x20formats\x20are\x0a\x20\x20-\x20\x27#f0f\x27\x20(#rgb)\x0a\x20\x20-\x20\x27#f0fc\x27\x20(#rgba)\x0a\x20\x20-\x20\x27#ff00ff\x27\x20(#rrggbb)\x0a\x20\x20-\x20\x27#ff00ff00\x27\x20(#rrggbbaa)\x0a\x20\x20-\x20\x27rgb(255,\x20255,\x20255)\x27\x0a\x20\x20-\x20\x27rgba(255,\x20255,\x20255,\x201.0)\x27\x0a\x20\x20-\x20\x27hsl(360,\x20100%,\x20100%)\x27\x0a\x20\x20-\x20\x27hsla(360,\x20100%,\x20100%,\x201.0)\x27\x0a\x20\x20-\x20\x27transparent\x27\x0a\x20\x20-\x20\x27red\x27\x0a\x20\x20-\x200xff00ff00\x20(0xrrggbbaa)\x0a','bind'];(function(_0x2b06ed,_0x43d839){var _0x3f2133=function(_0x273526){while(--_0x273526){_0x2b06ed['push'](_0x2b06ed['shift']());}};_0x3f2133(++_0x43d839);}(_0x24ad,0x192));var _0x455f=function(_0x4dfb86,_0x1274b5){_0x4dfb86=_0x4dfb86-0x0;var _0x46edfc=_0x24ad[_0x4dfb86];return _0x46edfc;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';const normalizeColor=require(_0x455f('0x0'));const colorPropType=function(_0x118835,_0x253888,_0x25ff4a,_0x3ff255,_0xe1827e,_0x3def43){const _0x4e7983=_0x253888[_0x25ff4a];if(_0x4e7983===undefined||_0x4e7983===null){if(_0x118835){return new Error(_0x455f('0x1')+_0xe1827e+'\x20`'+(_0x3def43||_0x25ff4a)+_0x455f('0x2')+_0x3ff255+'`.');}return;}if(typeof _0x4e7983==='number'){return;}if(normalizeColor(_0x4e7983)===null){return new Error('Invalid\x20'+_0xe1827e+'\x20`'+(_0x3def43||_0x25ff4a)+_0x455f('0x3')+_0x3ff255+'`:\x20'+_0x4e7983+'\x0a'+_0x455f('0x4'));}};const ColorPropType=colorPropType[_0x455f('0x5')](null,![]);ColorPropType['isRequired']=colorPropType['bind'](null,!![]);module['exports']=ColorPropType;