var _0x4869=['test','filter','existsSync','dotenv-expand','config','realpathSync','cwd','NODE_PATH','split','delimiter','isAbsolute','map','keys','reduce','development','stringify','exports','path','./paths','cache','resolve','env','NODE_ENV','The\x20NODE_ENV\x20environment\x20variable\x20is\x20required\x20but\x20was\x20not\x20specified.','dotenv','.local'];(function(_0x10a658,_0x4e5e34){var _0x420f0d=function(_0x5764db){while(--_0x5764db){_0x10a658['push'](_0x10a658['shift']());}};_0x420f0d(++_0x4e5e34);}(_0x4869,0x149));var _0x5d99=function(_0x4c6e90,_0x563a71){_0x4c6e90=_0x4c6e90-0x0;var _0x25a3b0=_0x4869[_0x4c6e90];return _0x25a3b0;};// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';const fs=require('fs');const path=require(_0x5d99('0x0'));const paths=require(_0x5d99('0x1'));delete require[_0x5d99('0x2')][require[_0x5d99('0x3')](_0x5d99('0x1'))];const NODE_ENV=process[_0x5d99('0x4')][_0x5d99('0x5')];if(!NODE_ENV){throw new Error(_0x5d99('0x6'));}var dotenvFiles=[paths[_0x5d99('0x7')]+'.'+NODE_ENV+_0x5d99('0x8'),paths[_0x5d99('0x7')]+'.'+NODE_ENV,NODE_ENV!==_0x5d99('0x9')&&paths[_0x5d99('0x7')]+_0x5d99('0x8'),paths['dotenv']][_0x5d99('0xa')](Boolean);dotenvFiles['forEach'](_0x29ce21=>{if(fs[_0x5d99('0xb')](_0x29ce21)){require(_0x5d99('0xc'))(require(_0x5d99('0x7'))[_0x5d99('0xd')]({'path':_0x29ce21}));}});const appDirectory=fs[_0x5d99('0xe')](process[_0x5d99('0xf')]());process[_0x5d99('0x4')]['NODE_PATH']=(process[_0x5d99('0x4')][_0x5d99('0x10')]||'')[_0x5d99('0x11')](path[_0x5d99('0x12')])[_0x5d99('0xa')](_0x350184=>_0x350184&&!path[_0x5d99('0x13')](_0x350184))[_0x5d99('0x14')](_0x3c6e9c=>path[_0x5d99('0x3')](appDirectory,_0x3c6e9c))['join'](path[_0x5d99('0x12')]);const REACT_APP=/^REACT_APP_/i;function getClientEnvironment(_0x23b71e){const _0x49a387=Object[_0x5d99('0x15')](process[_0x5d99('0x4')])[_0x5d99('0xa')](_0xffa314=>REACT_APP[_0x5d99('0x9')](_0xffa314))[_0x5d99('0x16')]((_0x240def,_0x4bdc5e)=>{_0x240def[_0x4bdc5e]=process[_0x5d99('0x4')][_0x4bdc5e];return _0x240def;},{'NODE_ENV':process[_0x5d99('0x4')]['NODE_ENV']||_0x5d99('0x17'),'PUBLIC_URL':_0x23b71e});const _0x4204f3={'process.env':Object[_0x5d99('0x15')](_0x49a387)[_0x5d99('0x16')]((_0x33a910,_0x475e42)=>{_0x33a910[_0x475e42]=JSON[_0x5d99('0x18')](_0x49a387[_0x475e42]);return _0x33a910;},{})};return{'raw':_0x49a387,'stringified':_0x4204f3};}module[_0x5d99('0x19')]=getClientEnvironment;