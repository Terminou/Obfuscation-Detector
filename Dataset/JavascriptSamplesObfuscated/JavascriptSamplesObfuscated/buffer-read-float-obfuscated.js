var _0x4321=['zero','inf','alloc','end','../common.js','createBenchmark','Double'];(function(_0x3ab7f3,_0x27a28d){var _0x170487=function(_0xfd4a8e){while(--_0xfd4a8e){_0x3ab7f3['push'](_0x3ab7f3['shift']());}};_0x170487(++_0x27a28d);}(_0x4321,0x1d2));var _0x5684=function(_0x575381,_0x4bc1f7){_0x575381=_0x575381-0x0;var _0x37c0a5=_0x4321[_0x575381];return _0x37c0a5;};'use strict';const common=require(_0x5684('0x0'));const bench=common[_0x5684('0x1')](main,{'type':[_0x5684('0x2'),'Float'],'endian':['BE','LE'],'value':[_0x5684('0x3'),'big','small',_0x5684('0x4'),'nan'],'n':[0xf4240]});function main({n,type,endian,value}){type=type||_0x5684('0x2');const _0x2b1efb=Buffer[_0x5684('0x5')](0x8);const _0x194808='read'+type+endian;const _0x14205f={'Double':{'zero':0x0,'big':0x2**0x3ff,'small':0x2**-0x432,'inf':Infinity,'nan':NaN},'Float':{'zero':0x0,'big':0x2**0x7f,'small':0x2**-0x95,'inf':Infinity,'nan':NaN}};_0x2b1efb['write'+type+endian](_0x14205f[type][value],0x0);bench['start']();for(var _0x4d66ea=0x0;_0x4d66ea!==n;_0x4d66ea++){_0x2b1efb[_0x194808](0x0);}bench[_0x5684('0x6')](n);}