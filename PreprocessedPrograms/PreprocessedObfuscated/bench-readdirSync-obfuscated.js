var _0xb827=['false','resolve','end','../common','path','createBenchmark','lib','test/parallel','true'];(function(_0x295d0a,_0x16971b){var _0x4b286a=function(_0x57f8a6){while(--_0x57f8a6){_0x295d0a['push'](_0x295d0a['shift']());}};_0x4b286a(++_0x16971b);}(_0xb827,0x174));var _0x272d=function(_0x4ceca4,_0x444990){_0x4ceca4=_0x4ceca4-0x0;var _0xa26328=_0xb827[_0x4ceca4];return _0xa26328;};'use strict';const common=require(_0x272d('0x0'));const fs=require('fs');const path=require(_0x272d('0x1'));const bench=common[_0x272d('0x2')](main,{'n':[0xa],'dir':[_0x272d('0x3'),_0x272d('0x4')],'withFileTypes':[_0x272d('0x5'),_0x272d('0x6')]});function main({n,dir,withFileTypes}){withFileTypes=withFileTypes===_0x272d('0x5');const _0x11a613=path[_0x272d('0x7')](__dirname,'../../',dir);bench['start']();for(var _0x4fe9e0=0x0;_0x4fe9e0<n;_0x4fe9e0++){fs['readdirSync'](_0x11a613,{'withFileTypes':withFileTypes});}bench[_0x272d('0x8')](n);}