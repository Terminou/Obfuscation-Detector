var _0x2d8b=['should\x20not\x20encode\x20a\x20non\x20ArrayBuffer\x20or\x20non\x20typed\x20array','toThrowError','toByteArray','util','binaryToBase64','should\x20encode\x20a\x20Uint8Array','encode','Test\x20string','toEqual','should\x20encode\x20an\x20ArrayBuffer','buffer','should\x20encode\x20a\x20DataView'];(function(_0x4b66e2,_0x17ca22){var _0x1b986a=function(_0x45cd7d){while(--_0x45cd7d){_0x4b66e2['push'](_0x4b66e2['shift']());}};_0x1b986a(++_0x17ca22);}(_0x2d8b,0x1cb));var _0x25fc=function(_0x3454f6,_0x105ad3){_0x3454f6=_0x3454f6-0x0;var _0xd1f1d5=_0x2d8b[_0x3454f6];return _0xd1f1d5;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';const base64=require('base64-js');const {TextEncoder,TextDecoder}=require(_0x25fc('0x0'));describe(_0x25fc('0x1'),()=>{const _0x1d1170=require(_0x25fc('0x1'));it(_0x25fc('0x2'),()=>{const _0x45f60f=new TextEncoder()[_0x25fc('0x3')](_0x25fc('0x4'));expect(base64ToString(_0x1d1170(_0x45f60f)))[_0x25fc('0x5')](_0x25fc('0x4'));});it(_0x25fc('0x6'),()=>{const _0x207afd=new TextEncoder()[_0x25fc('0x3')](_0x25fc('0x4'))[_0x25fc('0x7')];expect(base64ToString(_0x1d1170(_0x207afd)))[_0x25fc('0x5')]('Test\x20string');});it(_0x25fc('0x8'),()=>{const _0x2b5a31=new DataView(new TextEncoder()[_0x25fc('0x3')](_0x25fc('0x4'))[_0x25fc('0x7')]);expect(base64ToString(_0x1d1170(_0x2b5a31)))[_0x25fc('0x5')](_0x25fc('0x4'));});it(_0x25fc('0x9'),()=>{const _0x158217=['i','n','v','a','l','i','d'];expect(()=>_0x1d1170(_0x158217))[_0x25fc('0xa')]();});});function base64ToString(_0x2de321){const _0x19b709=base64[_0x25fc('0xb')](_0x2de321);return new TextDecoder()['decode'](_0x19b709);}