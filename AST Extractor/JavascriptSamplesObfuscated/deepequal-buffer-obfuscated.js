var _0x4a83=['notDeepEqual','allocUnsafe','alloc','copy','replace','eep','not','start','end','createBenchmark','deepEqual'];(function(_0x40e3ce,_0x431998){var _0x420ea6=function(_0x23ae2f){while(--_0x23ae2f){_0x40e3ce['push'](_0x40e3ce['shift']());}};_0x420ea6(++_0x431998);}(_0x4a83,0x82));var _0x2ff7=function(_0x4b4751,_0x560c79){_0x4b4751=_0x4b4751-0x0;var _0x512c3d=_0x4a83[_0x4b4751];return _0x512c3d;};'use strict';const common=require('../common.js');const assert=require('assert');const bench=common[_0x2ff7('0x0')](main,{'n':[0x4e20],'len':[0x64,0x3e8],'strict':[0x0,0x1],'method':[_0x2ff7('0x1'),_0x2ff7('0x2')]});function main({len,n,method,strict}){if(!method)method=_0x2ff7('0x1');const _0x2fb022=Buffer[_0x2ff7('0x3')](len+0x1);const _0x3282e0=Buffer[_0x2ff7('0x4')](len);const _0x46cf6e=Buffer[_0x2ff7('0x4')](len);const _0x2258b0=Buffer[_0x2ff7('0x4')](len+0x1);_0x2fb022[_0x2ff7('0x5')](_0x3282e0);_0x2fb022[_0x2ff7('0x5')](_0x46cf6e);_0x2fb022[_0x2ff7('0x5')](_0x2258b0);if(strict){method=method[_0x2ff7('0x6')](_0x2ff7('0x7'),'eepStrict');}const _0x3cb36a=assert[method];const _0x398bb4=method['includes'](_0x2ff7('0x8'))?_0x2258b0:_0x46cf6e;bench[_0x2ff7('0x9')]();for(var _0x20708c=0x0;_0x20708c<n;++_0x20708c){_0x3cb36a(_0x3282e0,_0x398bb4);}bench[_0x2ff7('0xa')](n);}