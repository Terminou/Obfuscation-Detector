var _0x3998=['end','createBenchmark','tls','start'];(function(_0x41e03d,_0x21bfc6){var _0x2afcc2=function(_0x639078){while(--_0x639078){_0x41e03d['push'](_0x41e03d['shift']());}};_0x2afcc2(++_0x21bfc6);}(_0x3998,0x171));var _0x1052=function(_0x468726,_0x379935){_0x468726=_0x468726-0x0;var _0x115cae=_0x3998[_0x468726];return _0x115cae;};'use strict';const common=require('../common.js');const bench=common[_0x1052('0x0')](main,{'n':[0x1,0x1388],'v':['crypto',_0x1052('0x1')]});function main({n,v}){const _0x5a8bdc=require(v)['getCiphers'];var _0x11df21=0x0;if(n>0x1){for(;_0x11df21<n;_0x11df21++)_0x5a8bdc();}bench[_0x1052('0x2')]();for(_0x11df21=0x0;_0x11df21<n;_0x11df21++)_0x5a8bdc();bench[_0x1052('0x3')](n);}