var _0x1b58=['/fixtures/([a-zA-Z0-9_-]+)(/(index.html)?)?$','url','indexOf','testExists','parse','query','write','generate','end','Fixture\x20','\x20not\x20found.','exec','rewriteTestFile','./util','/e2e','length'];(function(_0x5956a9,_0x2e6131){var _0x20625a=function(_0x5f36ef){while(--_0x5f36ef){_0x5956a9['push'](_0x5956a9['shift']());}};_0x20625a(++_0x2e6131);}(_0x1b58,0x16d));var _0x4a8f=function(_0x27cf12,_0x2524dc){_0x27cf12=_0x27cf12-0x0;var _0x4ef310=_0x1b58[_0x27cf12];return _0x4ef310;};'use strict';var url=require('url');var util=require(_0x4a8f('0x0'));var fixture=require('./fixture');module['exports']=middlewareFactory;function middlewareFactory(_0x525e1d){_0x525e1d=_0x525e1d||_0x4a8f('0x1');while(_0x525e1d['length']&&_0x525e1d[_0x525e1d[_0x4a8f('0x2')]-0x1]==='/')_0x525e1d=_0x525e1d['slice'](0x0,_0x525e1d[_0x4a8f('0x2')]-0x1);var _0x4a50a6=new RegExp('^'+_0x525e1d+_0x4a8f('0x3'));var _0x1b0abe=new RegExp('^'+_0x525e1d+'/fixtures/([a-zA-Z0-9_-]+)(/.*)$');return function(_0x1b82a1,_0x2fbfee,_0x57a110){var _0x3ea9ab;var _0x5aa30c=_0x1b82a1[_0x4a8f('0x4')];var _0x33c974=_0x5aa30c[_0x4a8f('0x5')]('?');if(_0x33c974>=0x0){_0x5aa30c=_0x5aa30c['slice'](0x0,_0x33c974);}if(_0x3ea9ab=_0x4a50a6['exec'](_0x5aa30c)){if(util[_0x4a8f('0x6')](_0x3ea9ab[0x1])){try{var _0x1046b6=url[_0x4a8f('0x7')](_0x1b82a1[_0x4a8f('0x4')],!![])[_0x4a8f('0x8')];_0x2fbfee[_0x4a8f('0x9')](fixture[_0x4a8f('0xa')](_0x3ea9ab[0x1],_0x1046b6));_0x2fbfee[_0x4a8f('0xb')]();}catch(_0x3101b5){return _0x57a110(_0x3101b5);}}else{return _0x57a110(_0x4a8f('0xc')+_0x3ea9ab[0x1]+_0x4a8f('0xd'));}}else if(_0x3ea9ab=_0x1b0abe[_0x4a8f('0xe')](_0x5aa30c)){var _0x12b83d=util[_0x4a8f('0xf')](_0x3ea9ab[0x1],_0x3ea9ab[0x2]);if(_0x12b83d!==![]){_0x1b82a1['url']=_0x12b83d;}_0x57a110();}else{return _0x57a110();}};}