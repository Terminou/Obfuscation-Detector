var _0x4eed=['start','createHash','digest','end','write','read','../common.js','createBenchmark','sha1','sha256','sha512','asc','utf','buf','legacy','stream','version','error','Crypto\x20streams\x20not\x20available\x20until\x20v0.10','ascii'];(function(_0x546b93,_0x13fa12){var _0x1dd830=function(_0x4c7a82){while(--_0x4c7a82){_0x546b93['push'](_0x546b93['shift']());}};_0x1dd830(++_0x13fa12);}(_0x4eed,0x10a));var _0x3318=function(_0x32d44b,_0x1fb12a){_0x32d44b=_0x32d44b-0x0;var _0xb65f3c=_0x4eed[_0x32d44b];return _0xb65f3c;};// throughput benchmark
// creates a single hasher, then pushes a bunch of data through it
'use strict';const common=require(_0x3318('0x0'));const crypto=require('crypto');const bench=common[_0x3318('0x1')](main,{'writes':[0x1f4],'algo':[_0x3318('0x2'),_0x3318('0x3'),_0x3318('0x4')],'type':[_0x3318('0x5'),_0x3318('0x6'),_0x3318('0x7')],'len':[0x2,0x400,0x19000,0x400*0x400],'api':[_0x3318('0x8'),_0x3318('0x9')]});function main({api,type,len,algo,writes}){if(api===_0x3318('0x9')&&/^v0\.[0-8]\./['test'](process[_0x3318('0xa')])){console[_0x3318('0xb')](_0x3318('0xc'));api='legacy';}var _0x3739bd;var _0x5a7f7d;switch(type){case'asc':_0x3739bd='a'['repeat'](len);_0x5a7f7d=_0x3318('0xd');break;case _0x3318('0x6'):_0x3739bd='ü'['repeat'](len/0x2);_0x5a7f7d='utf8';break;case _0x3318('0x7'):_0x3739bd=Buffer['alloc'](len,'b');break;default:throw new Error('unknown\x20message\x20type:\x20'+type);}const _0x4d8dcc=api===_0x3318('0x9')?streamWrite:legacyWrite;bench[_0x3318('0xe')]();_0x4d8dcc(algo,_0x3739bd,_0x5a7f7d,writes,len);}function legacyWrite(_0x26ad43,_0x16951a,_0x572036,_0x4c3ddf,_0x4355e5){const _0x351e18=_0x4c3ddf*_0x4355e5;const _0x32ae0b=_0x351e18*0x8;const _0x2c4250=_0x32ae0b/(0x400*0x400*0x400);const _0x5d592f=crypto[_0x3318('0xf')](_0x26ad43);while(_0x4c3ddf-->0x0)_0x5d592f['update'](_0x16951a,_0x572036);_0x5d592f[_0x3318('0x10')]();bench[_0x3318('0x11')](_0x2c4250);}function streamWrite(_0x64324c,_0x5bef49,_0x16164b,_0xdd992,_0x2f59b1){const _0x417e31=_0xdd992*_0x2f59b1;const _0x144687=_0x417e31*0x8;const _0x29969e=_0x144687/(0x400*0x400*0x400);const _0x598d8e=crypto[_0x3318('0xf')](_0x64324c);while(_0xdd992-->0x0)_0x598d8e[_0x3318('0x12')](_0x5bef49,_0x16164b);_0x598d8e[_0x3318('0x11')]();_0x598d8e[_0x3318('0x13')]();bench[_0x3318('0x11')](_0x29969e);}