var _0x371c=['../common.js','assert','buffer','uint8array','string','string-utf8','object','repeat','allocUnsafe','array','start','from','arraybuffer-middle','end','utf8','string-base64','base64','fail','Should\x20not\x20get\x20here'];(function(_0x2517aa,_0x96b94a){var _0x280607=function(_0x5c3d57){while(--_0x5c3d57){_0x2517aa['push'](_0x2517aa['shift']());}};_0x280607(++_0x96b94a);}(_0x371c,0x17c));var _0x4f2b=function(_0x3ecaa7,_0x2cff7c){_0x3ecaa7=_0x3ecaa7-0x0;var _0x1815a4=_0x371c[_0x3ecaa7];return _0x1815a4;};'use strict';const common=require(_0x4f2b('0x0'));const assert=require(_0x4f2b('0x1'));const bench=common['createBenchmark'](main,{'source':['array','arraybuffer','arraybuffer-middle',_0x4f2b('0x2'),_0x4f2b('0x3'),_0x4f2b('0x4'),_0x4f2b('0x5'),'string-base64',_0x4f2b('0x6')],'len':[0xa,0x800],'n':[0x800]});function main({len,n,source}){const _0x2043d4=new Array(len)['fill'](0x2a);const _0x44d778=new ArrayBuffer(len);const _0x374ab7='a'[_0x4f2b('0x7')](len);const _0x18346a=Buffer[_0x4f2b('0x8')](len);const _0x33a9c4=new Uint8Array(len);const _0x27c582={'length':null};switch(source){case _0x4f2b('0x9'):bench[_0x4f2b('0xa')]();for(let _0x167db2=0x0;_0x167db2<n*0x400;_0x167db2++){Buffer['from'](_0x2043d4);}bench['end'](n);break;case'arraybuffer':bench['start']();for(let _0x5e7bce=0x0;_0x5e7bce<n*0x400;_0x5e7bce++){Buffer[_0x4f2b('0xb')](_0x44d778);}bench['end'](n);break;case _0x4f2b('0xc'):const _0x79a48d=~~(len/0x4);const _0x349cd8=~~(len/0x2);bench[_0x4f2b('0xa')]();for(let _0x5e7bce=0x0;_0x5e7bce<n*0x400;_0x5e7bce++){Buffer[_0x4f2b('0xb')](_0x44d778,_0x79a48d,_0x349cd8);}bench[_0x4f2b('0xd')](n);break;case _0x4f2b('0x2'):bench[_0x4f2b('0xa')]();for(let _0x21ab76=0x0;_0x21ab76<n*0x400;_0x21ab76++){Buffer[_0x4f2b('0xb')](_0x18346a);}bench[_0x4f2b('0xd')](n);break;case'uint8array':bench[_0x4f2b('0xa')]();for(let _0x7cfaa0=0x0;_0x7cfaa0<n*0x400;_0x7cfaa0++){Buffer[_0x4f2b('0xb')](_0x33a9c4);}bench['end'](n);break;case _0x4f2b('0x4'):bench[_0x4f2b('0xa')]();for(let _0x5af0d6=0x0;_0x5af0d6<n*0x400;_0x5af0d6++){Buffer['from'](_0x374ab7);}bench['end'](n);break;case _0x4f2b('0x5'):bench[_0x4f2b('0xa')]();for(let _0x3979d3=0x0;_0x3979d3<n*0x400;_0x3979d3++){Buffer['from'](_0x374ab7,_0x4f2b('0xe'));}bench[_0x4f2b('0xd')](n);break;case _0x4f2b('0xf'):bench[_0x4f2b('0xa')]();for(let _0x36972d=0x0;_0x36972d<n*0x400;_0x36972d++){Buffer[_0x4f2b('0xb')](_0x374ab7,_0x4f2b('0x10'));}bench[_0x4f2b('0xd')](n);break;case _0x4f2b('0x6'):bench[_0x4f2b('0xa')]();for(let _0x575b4f=0x0;_0x575b4f<n*0x400;_0x575b4f++){Buffer[_0x4f2b('0xb')](_0x27c582);}bench[_0x4f2b('0xd')](n);break;default:assert[_0x4f2b('0x11')](_0x4f2b('0x12'));}}