var _0x25a4=['</i>\x20to\x20the\x20Caterpillar','undefined','utf8','ucs2','binary','buffer','string','readFileSync','resolve','from','toString','start','indexOf','end','../common.js','path','10x','--l','Alice','Gryphon','Panther','Ou\x20est\x20ma\x20chatte?','found\x20it\x20very','among\x20mad\x20people','neighbouring\x20pool','aaaaaaaaaaaaaaaaa'];(function(_0x1d2000,_0x1e37dd){var _0x1de353=function(_0xda637c){while(--_0xda637c){_0x1d2000['push'](_0x1d2000['shift']());}};_0x1de353(++_0x1e37dd);}(_0x25a4,0xc4));var _0x2146=function(_0x5137a4,_0x37c66b){_0x5137a4=_0x5137a4-0x0;var _0x2ab12a=_0x25a4[_0x5137a4];return _0x2ab12a;};'use strict';const common=require(_0x2146('0x0'));const fs=require('fs');const path=require(_0x2146('0x1'));const searchStrings=['@','SQ',_0x2146('0x2'),_0x2146('0x3'),_0x2146('0x4'),_0x2146('0x5'),_0x2146('0x6'),_0x2146('0x7'),_0x2146('0x8'),_0x2146('0x9'),_0x2146('0xa'),'Soo--oop',_0x2146('0xb'),'venture\x20to\x20go\x20near\x20the\x20house\x20till\x20she\x20had\x20brought\x20herself\x20down\x20to',_0x2146('0xc')];const bench=common['createBenchmark'](main,{'search':searchStrings,'encoding':[_0x2146('0xd'),_0x2146('0xe'),_0x2146('0xf'),_0x2146('0x10')],'type':[_0x2146('0x11'),_0x2146('0x12')],'n':[0x186a0]});function main({n,search,encoding,type}){var _0x44b1a8=fs[_0x2146('0x13')](path[_0x2146('0x14')](__dirname,'../fixtures/alice.html'));if(encoding===_0x2146('0xd')){encoding=undefined;}if(encoding===_0x2146('0xf')){_0x44b1a8=Buffer[_0x2146('0x15')](_0x44b1a8[_0x2146('0x16')](),encoding);}if(type===_0x2146('0x11')){search=Buffer['from'](Buffer[_0x2146('0x15')](search)['toString'](),encoding);}bench[_0x2146('0x17')]();for(var _0x5c6c84=0x0;_0x5c6c84<n;_0x5c6c84++){_0x44b1a8[_0x2146('0x18')](search,0x0,encoding);}bench[_0x2146('0x19')](n);}