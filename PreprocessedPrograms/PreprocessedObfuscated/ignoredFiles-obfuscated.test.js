var _0x2595=['/foo','toBe','node\x20modules','/root/src/','/root/node_modules/foo','path\x20contains\x20source\x20directory','/bar/root/src/node_modules/foo','path\x20starts\x20with\x20source\x20directory','/root/src2/node_modules/foo','../ignoredFiles','normal\x20file','test'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x2595,0x1e9));var _0x586c=function(_0x1e2486,_0x5bbe23){_0x1e2486=_0x1e2486-0x0;var _0x85f428=_0x2595[_0x1e2486];return _0x85f428;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';const ignoredFiles=require(_0x586c('0x0'));describe('ignore\x20watch\x20files\x20regex',()=>{it(_0x586c('0x1'),()=>{const _0x4ee0cd='/root/src/';const _0xd5bcfa=ignoredFiles(_0x4ee0cd)[_0x586c('0x2')](_0x586c('0x3'));const _0x59fec0=ignoredFiles(_0x4ee0cd)[_0x586c('0x2')]('/root/src/foo');expect(_0xd5bcfa)[_0x586c('0x4')](![]);expect(_0x59fec0)[_0x586c('0x4')](![]);});it(_0x586c('0x5'),()=>{const _0x388275=_0x586c('0x6');const _0x4d2b83=ignoredFiles(_0x388275)['test'](_0x586c('0x7'));expect(_0x4d2b83)[_0x586c('0x4')](!![]);});it('node\x20modules\x20inside\x20source\x20directory',()=>{const _0x5e768a=_0x586c('0x6');const _0x3b9629=ignoredFiles(_0x5e768a)['test']('/root/src/node_modules/foo');const _0x23a9fc=ignoredFiles(_0x5e768a)[_0x586c('0x2')]('/root/src/bar/node_modules/foo');expect(_0x3b9629)[_0x586c('0x4')](![]);expect(_0x23a9fc)[_0x586c('0x4')](![]);});it(_0x586c('0x8'),()=>{const _0x31ccfa=_0x586c('0x6');const _0x25b554=ignoredFiles(_0x31ccfa)[_0x586c('0x2')](_0x586c('0x9'));expect(_0x25b554)[_0x586c('0x4')](!![]);});it(_0x586c('0xa'),()=>{const _0x23f3ed=_0x586c('0x6');const _0x39fbc4=ignoredFiles(_0x23f3ed)[_0x586c('0x2')](_0x586c('0xb'));expect(_0x39fbc4)[_0x586c('0x4')](!![]);});});