var _0x532c=['ended','finished','destroyed','decodeStrings','defaultEncoding','utf8','length','writing','corked','sync','bufferProcessing','onwrite','bind','writecb','writelen','bufferedRequest','lastBufferedRequest','pendingcb','prefinished','errorEmitted','emitClose','autoDestroy','bufferedRequestCount','finish','getBuffer','push','next','defineProperty','prototype','deprecate','_writableState.buffer\x20is\x20deprecated.\x20Use\x20_writableState.getBuffer\x20','instead.','DEP0003','function','hasInstance','_writableState','call','writable','write','writev','_writev','destroy','_final','final','pipe','nextTick','string','chunk','Buffer','_isUint8Array','getPrototypeOf','_uint8ArrayToBuffer','ending','cork','uncork','setDefaultEncoding','toLowerCase','from','writableHighWaterMark','highWaterMark','_write','drain','isBuf','allBuffers','corkedRequestsFree','callback','_write()','end','writableLength','emit','finalCalled','prefinish','_readableState','once','entry','_destroy','WritableState','internal/util','buffer','internal/streams/destroy','internal/streams/state','internal/errors','codes','setPrototypeOf','boolean','Duplex','objectMode','writableObjectMode','needDrain'];(function(_0x179bb9,_0x5a7602){var _0x10ab1e=function(_0x3596e5){while(--_0x3596e5){_0x179bb9['push'](_0x179bb9['shift']());}};_0x10ab1e(++_0x5a7602);}(_0x532c,0xa5));var _0x5857=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x532c[_0x2d8f05];return _0x4d74cb;};// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.
'use strict';module['exports']=Writable;Writable[_0x5857('0x0')]=WritableState;const internalUtil=require(_0x5857('0x1'));const Stream=require('stream');const {Buffer}=require(_0x5857('0x2'));const destroyImpl=require(_0x5857('0x3'));const {getHighWaterMark}=require(_0x5857('0x4'));const {ERR_INVALID_ARG_TYPE,ERR_METHOD_NOT_IMPLEMENTED,ERR_MULTIPLE_CALLBACK,ERR_STREAM_CANNOT_PIPE,ERR_STREAM_DESTROYED,ERR_STREAM_NULL_VALUES,ERR_STREAM_WRITE_AFTER_END,ERR_UNKNOWN_ENCODING}=require(_0x5857('0x5'))[_0x5857('0x6')];const {errorOrDestroy}=destroyImpl;Object[_0x5857('0x7')](Writable['prototype'],Stream['prototype']);Object[_0x5857('0x7')](Writable,Stream);function nop(){}function WritableState(_0x1460d9,_0x346796,_0x9129d){_0x1460d9=_0x1460d9||{};if(typeof _0x9129d!==_0x5857('0x8'))_0x9129d=_0x346796 instanceof Stream[_0x5857('0x9')];this[_0x5857('0xa')]=!!_0x1460d9[_0x5857('0xa')];if(_0x9129d)this[_0x5857('0xa')]=this['objectMode']||!!_0x1460d9[_0x5857('0xb')];this['highWaterMark']=getHighWaterMark(this,_0x1460d9,'writableHighWaterMark',_0x9129d);this['finalCalled']=![];this[_0x5857('0xc')]=![];this['ending']=![];this[_0x5857('0xd')]=![];this[_0x5857('0xe')]=![];this[_0x5857('0xf')]=![];var _0x3f7cbe=_0x1460d9[_0x5857('0x10')]===![];this[_0x5857('0x10')]=!_0x3f7cbe;this[_0x5857('0x11')]=_0x1460d9[_0x5857('0x11')]||_0x5857('0x12');this[_0x5857('0x13')]=0x0;this[_0x5857('0x14')]=![];this[_0x5857('0x15')]=0x0;this[_0x5857('0x16')]=!![];this[_0x5857('0x17')]=![];this[_0x5857('0x18')]=onwrite[_0x5857('0x19')](undefined,_0x346796);this[_0x5857('0x1a')]=null;this[_0x5857('0x1b')]=0x0;this[_0x5857('0x1c')]=null;this[_0x5857('0x1d')]=null;this[_0x5857('0x1e')]=0x0;this[_0x5857('0x1f')]=![];this[_0x5857('0x20')]=![];this[_0x5857('0x21')]=_0x1460d9[_0x5857('0x21')]!==![];this[_0x5857('0x22')]=!!_0x1460d9['autoDestroy'];this[_0x5857('0x23')]=0x0;var _0x347ba4={'next':null,'entry':null,'finish':undefined};_0x347ba4[_0x5857('0x24')]=onCorkedFinish[_0x5857('0x19')](undefined,_0x347ba4,this);this['corkedRequestsFree']=_0x347ba4;}WritableState['prototype'][_0x5857('0x25')]=function getBuffer(){var _0x418a0a=this['bufferedRequest'];var _0x17325d=[];while(_0x418a0a){_0x17325d[_0x5857('0x26')](_0x418a0a);_0x418a0a=_0x418a0a[_0x5857('0x27')];}return _0x17325d;};Object[_0x5857('0x28')](WritableState[_0x5857('0x29')],_0x5857('0x2'),{'get':internalUtil[_0x5857('0x2a')](function writableStateBufferGetter(){return this[_0x5857('0x25')]();},_0x5857('0x2b')+_0x5857('0x2c'),_0x5857('0x2d'))});var realHasInstance;if(typeof Symbol===_0x5857('0x2e')&&Symbol[_0x5857('0x2f')]){realHasInstance=Function[_0x5857('0x29')][Symbol[_0x5857('0x2f')]];Object[_0x5857('0x28')](Writable,Symbol[_0x5857('0x2f')],{'value':function(_0x2044d5){if(realHasInstance['call'](this,_0x2044d5))return!![];if(this!==Writable)return![];return _0x2044d5&&_0x2044d5[_0x5857('0x30')]instanceof WritableState;}});}else{realHasInstance=function(_0x32f565){return _0x32f565 instanceof this;};}function Writable(_0xee7c7d){const _0xf9d2ab=this instanceof Stream[_0x5857('0x9')];if(!_0xf9d2ab&&!realHasInstance[_0x5857('0x31')](Writable,this))return new Writable(_0xee7c7d);this[_0x5857('0x30')]=new WritableState(_0xee7c7d,this,_0xf9d2ab);this[_0x5857('0x32')]=!![];if(_0xee7c7d){if(typeof _0xee7c7d[_0x5857('0x33')]==='function')this['_write']=_0xee7c7d['write'];if(typeof _0xee7c7d[_0x5857('0x34')]==='function')this[_0x5857('0x35')]=_0xee7c7d[_0x5857('0x34')];if(typeof _0xee7c7d[_0x5857('0x36')]===_0x5857('0x2e'))this['_destroy']=_0xee7c7d[_0x5857('0x36')];if(typeof _0xee7c7d['final']==='function')this[_0x5857('0x37')]=_0xee7c7d[_0x5857('0x38')];}Stream[_0x5857('0x31')](this);}Writable[_0x5857('0x29')][_0x5857('0x39')]=function(){errorOrDestroy(this,new ERR_STREAM_CANNOT_PIPE());};function writeAfterEnd(_0x459767,_0x542eff){var _0x18567c=new ERR_STREAM_WRITE_AFTER_END();errorOrDestroy(_0x459767,_0x18567c);process[_0x5857('0x3a')](_0x542eff,_0x18567c);}function validChunk(_0x40122f,_0x23c8f9,_0x4c413c,_0x161902){var _0x572fec;if(_0x4c413c===null){_0x572fec=new ERR_STREAM_NULL_VALUES();}else if(typeof _0x4c413c!==_0x5857('0x3b')&&!_0x23c8f9[_0x5857('0xa')]){_0x572fec=new ERR_INVALID_ARG_TYPE(_0x5857('0x3c'),[_0x5857('0x3b'),_0x5857('0x3d')],_0x4c413c);}if(_0x572fec){errorOrDestroy(_0x40122f,_0x572fec);process[_0x5857('0x3a')](_0x161902,_0x572fec);return![];}return!![];}Writable[_0x5857('0x29')][_0x5857('0x33')]=function(_0x16387c,_0x43da9d,_0x3e904d){var _0x5868cf=this['_writableState'];var _0x10bcd5=![];var _0x43fffd=!_0x5868cf[_0x5857('0xa')]&&Stream[_0x5857('0x3e')](_0x16387c);if(_0x43fffd&&Object[_0x5857('0x3f')](_0x16387c)!==Buffer[_0x5857('0x29')]){_0x16387c=Stream[_0x5857('0x40')](_0x16387c);}if(typeof _0x43da9d==='function'){_0x3e904d=_0x43da9d;_0x43da9d=null;}if(_0x43fffd)_0x43da9d=_0x5857('0x2');else if(!_0x43da9d)_0x43da9d=_0x5868cf[_0x5857('0x11')];if(typeof _0x3e904d!==_0x5857('0x2e'))_0x3e904d=nop;if(_0x5868cf[_0x5857('0x41')])writeAfterEnd(this,_0x3e904d);else if(_0x43fffd||validChunk(this,_0x5868cf,_0x16387c,_0x3e904d)){_0x5868cf[_0x5857('0x1e')]++;_0x10bcd5=writeOrBuffer(this,_0x5868cf,_0x43fffd,_0x16387c,_0x43da9d,_0x3e904d);}return _0x10bcd5;};Writable[_0x5857('0x29')][_0x5857('0x42')]=function(){this[_0x5857('0x30')][_0x5857('0x15')]++;};Writable['prototype'][_0x5857('0x43')]=function(){var _0xc1112a=this['_writableState'];if(_0xc1112a[_0x5857('0x15')]){_0xc1112a['corked']--;if(!_0xc1112a[_0x5857('0x14')]&&!_0xc1112a[_0x5857('0x15')]&&!_0xc1112a[_0x5857('0x17')]&&_0xc1112a['bufferedRequest'])clearBuffer(this,_0xc1112a);}};Writable[_0x5857('0x29')][_0x5857('0x44')]=function setDefaultEncoding(_0x20767a){if(typeof _0x20767a==='string')_0x20767a=_0x20767a[_0x5857('0x45')]();if(!Buffer['isEncoding'](_0x20767a))throw new ERR_UNKNOWN_ENCODING(_0x20767a);this[_0x5857('0x30')][_0x5857('0x11')]=_0x20767a;return this;};Object[_0x5857('0x28')](Writable[_0x5857('0x29')],'writableBuffer',{'enumerable':![],'get':function(){return this[_0x5857('0x30')]&&this['_writableState'][_0x5857('0x25')]();}});function decodeChunk(_0xbdc934,_0x511f11,_0x3f912c){if(!_0xbdc934[_0x5857('0xa')]&&_0xbdc934[_0x5857('0x10')]!==![]&&typeof _0x511f11==='string'){_0x511f11=Buffer[_0x5857('0x46')](_0x511f11,_0x3f912c);}return _0x511f11;}Object[_0x5857('0x28')](Writable[_0x5857('0x29')],_0x5857('0x47'),{'enumerable':![],'get':function(){return this[_0x5857('0x30')][_0x5857('0x48')];}});function writeOrBuffer(_0x168848,_0x335406,_0xc3235,_0x43e2e7,_0x4211f8,_0x59a390){if(!_0xc3235){var _0x34a412=decodeChunk(_0x335406,_0x43e2e7,_0x4211f8);if(_0x43e2e7!==_0x34a412){_0xc3235=!![];_0x4211f8=_0x5857('0x2');_0x43e2e7=_0x34a412;}}var _0x43c116=_0x335406['objectMode']?0x1:_0x43e2e7[_0x5857('0x13')];_0x335406[_0x5857('0x13')]+=_0x43c116;var _0x5d9800=_0x335406['length']<_0x335406[_0x5857('0x48')];if(!_0x5d9800)_0x335406[_0x5857('0xc')]=!![];if(_0x335406[_0x5857('0x14')]||_0x335406[_0x5857('0x15')]){var _0x5aa4d3=_0x335406[_0x5857('0x1d')];_0x335406[_0x5857('0x1d')]={'chunk':_0x43e2e7,'encoding':_0x4211f8,'isBuf':_0xc3235,'callback':_0x59a390,'next':null};if(_0x5aa4d3){_0x5aa4d3[_0x5857('0x27')]=_0x335406['lastBufferedRequest'];}else{_0x335406[_0x5857('0x1c')]=_0x335406[_0x5857('0x1d')];}_0x335406[_0x5857('0x23')]+=0x1;}else{doWrite(_0x168848,_0x335406,![],_0x43c116,_0x43e2e7,_0x4211f8,_0x59a390);}return _0x5d9800;}function doWrite(_0x35a9a1,_0x480193,_0x2fb6e2,_0x517142,_0x443d75,_0x50ebaa,_0x29672b){_0x480193['writelen']=_0x517142;_0x480193['writecb']=_0x29672b;_0x480193[_0x5857('0x14')]=!![];_0x480193[_0x5857('0x16')]=!![];if(_0x480193[_0x5857('0xf')])_0x480193[_0x5857('0x18')](new ERR_STREAM_DESTROYED(_0x5857('0x33')));else if(_0x2fb6e2)_0x35a9a1[_0x5857('0x35')](_0x443d75,_0x480193[_0x5857('0x18')]);else _0x35a9a1[_0x5857('0x49')](_0x443d75,_0x50ebaa,_0x480193['onwrite']);_0x480193['sync']=![];}function onwriteError(_0x5574e1,_0x38f59e,_0xa2f05d,_0x4064f2,_0x1ff262){--_0x38f59e[_0x5857('0x1e')];if(_0xa2f05d){process[_0x5857('0x3a')](_0x1ff262,_0x4064f2);process[_0x5857('0x3a')](finishMaybe,_0x5574e1,_0x38f59e);_0x5574e1['_writableState'][_0x5857('0x20')]=!![];errorOrDestroy(_0x5574e1,_0x4064f2);}else{_0x1ff262(_0x4064f2);_0x5574e1[_0x5857('0x30')][_0x5857('0x20')]=!![];errorOrDestroy(_0x5574e1,_0x4064f2);finishMaybe(_0x5574e1,_0x38f59e);}}function onwriteStateUpdate(_0x5cdfe3){_0x5cdfe3[_0x5857('0x14')]=![];_0x5cdfe3[_0x5857('0x1a')]=null;_0x5cdfe3['length']-=_0x5cdfe3[_0x5857('0x1b')];_0x5cdfe3[_0x5857('0x1b')]=0x0;}function onwrite(_0x480d4a,_0x175504){var _0xa8558d=_0x480d4a[_0x5857('0x30')];var _0x111f07=_0xa8558d[_0x5857('0x16')];var _0x2803d2=_0xa8558d['writecb'];if(typeof _0x2803d2!=='function')throw new ERR_MULTIPLE_CALLBACK();onwriteStateUpdate(_0xa8558d);if(_0x175504)onwriteError(_0x480d4a,_0xa8558d,_0x111f07,_0x175504,_0x2803d2);else{var _0x20dcf2=needFinish(_0xa8558d)||_0x480d4a[_0x5857('0xf')];if(!_0x20dcf2&&!_0xa8558d[_0x5857('0x15')]&&!_0xa8558d[_0x5857('0x17')]&&_0xa8558d[_0x5857('0x1c')]){clearBuffer(_0x480d4a,_0xa8558d);}if(_0x111f07){process[_0x5857('0x3a')](afterWrite,_0x480d4a,_0xa8558d,_0x20dcf2,_0x2803d2);}else{afterWrite(_0x480d4a,_0xa8558d,_0x20dcf2,_0x2803d2);}}}function afterWrite(_0x52eeea,_0x6787b1,_0xeafdab,_0x157bff){if(!_0xeafdab)onwriteDrain(_0x52eeea,_0x6787b1);_0x6787b1[_0x5857('0x1e')]--;_0x157bff();finishMaybe(_0x52eeea,_0x6787b1);}function onwriteDrain(_0x1d46b3,_0x930d1d){if(_0x930d1d['length']===0x0&&_0x930d1d['needDrain']){_0x930d1d[_0x5857('0xc')]=![];_0x1d46b3['emit'](_0x5857('0x4a'));}}function clearBuffer(_0x183e7c,_0xe9aa78){_0xe9aa78[_0x5857('0x17')]=!![];var _0x34d418=_0xe9aa78[_0x5857('0x1c')];if(_0x183e7c['_writev']&&_0x34d418&&_0x34d418[_0x5857('0x27')]){var _0x45abce=_0xe9aa78[_0x5857('0x23')];var _0x199573=new Array(_0x45abce);var _0x4f9ccc=_0xe9aa78['corkedRequestsFree'];_0x4f9ccc['entry']=_0x34d418;var _0xeec660=0x0;var _0x525137=!![];while(_0x34d418){_0x199573[_0xeec660]=_0x34d418;if(!_0x34d418[_0x5857('0x4b')])_0x525137=![];_0x34d418=_0x34d418['next'];_0xeec660+=0x1;}_0x199573[_0x5857('0x4c')]=_0x525137;doWrite(_0x183e7c,_0xe9aa78,!![],_0xe9aa78[_0x5857('0x13')],_0x199573,'',_0x4f9ccc[_0x5857('0x24')]);_0xe9aa78['pendingcb']++;_0xe9aa78[_0x5857('0x1d')]=null;if(_0x4f9ccc['next']){_0xe9aa78[_0x5857('0x4d')]=_0x4f9ccc[_0x5857('0x27')];_0x4f9ccc[_0x5857('0x27')]=null;}else{var _0x5213df={'next':null,'entry':null,'finish':undefined};_0x5213df[_0x5857('0x24')]=onCorkedFinish['bind'](undefined,_0x5213df,_0xe9aa78);_0xe9aa78[_0x5857('0x4d')]=_0x5213df;}_0xe9aa78[_0x5857('0x23')]=0x0;}else{while(_0x34d418){var _0x18576a=_0x34d418[_0x5857('0x3c')];var _0x36cfcb=_0x34d418['encoding'];var _0x5a94d4=_0x34d418[_0x5857('0x4e')];var _0x2ab5e3=_0xe9aa78[_0x5857('0xa')]?0x1:_0x18576a[_0x5857('0x13')];doWrite(_0x183e7c,_0xe9aa78,![],_0x2ab5e3,_0x18576a,_0x36cfcb,_0x5a94d4);_0x34d418=_0x34d418[_0x5857('0x27')];_0xe9aa78[_0x5857('0x23')]--;if(_0xe9aa78[_0x5857('0x14')]){break;}}if(_0x34d418===null)_0xe9aa78[_0x5857('0x1d')]=null;}_0xe9aa78[_0x5857('0x1c')]=_0x34d418;_0xe9aa78[_0x5857('0x17')]=![];}Writable[_0x5857('0x29')]['_write']=function(_0x3fde3f,_0x5cd70f,_0x55476a){_0x55476a(new ERR_METHOD_NOT_IMPLEMENTED(_0x5857('0x4f')));};Writable[_0x5857('0x29')]['_writev']=null;Writable[_0x5857('0x29')][_0x5857('0x50')]=function(_0x4f7e54,_0x2d09ea,_0x2df97a){var _0xa21175=this[_0x5857('0x30')];if(typeof _0x4f7e54===_0x5857('0x2e')){_0x2df97a=_0x4f7e54;_0x4f7e54=null;_0x2d09ea=null;}else if(typeof _0x2d09ea===_0x5857('0x2e')){_0x2df97a=_0x2d09ea;_0x2d09ea=null;}if(_0x4f7e54!==null&&_0x4f7e54!==undefined)this[_0x5857('0x33')](_0x4f7e54,_0x2d09ea);if(_0xa21175[_0x5857('0x15')]){_0xa21175['corked']=0x1;this[_0x5857('0x43')]();}if(!_0xa21175[_0x5857('0x41')])endWritable(this,_0xa21175,_0x2df97a);return this;};Object[_0x5857('0x28')](Writable[_0x5857('0x29')],_0x5857('0x51'),{'enumerable':![],'get'(){return this[_0x5857('0x30')][_0x5857('0x13')];}});function needFinish(_0x5f0553){return _0x5f0553[_0x5857('0x41')]&&_0x5f0553[_0x5857('0x13')]===0x0&&_0x5f0553[_0x5857('0x1c')]===null&&!_0x5f0553['finished']&&!_0x5f0553[_0x5857('0x14')];}function callFinal(_0x11f7a2,_0x468637){_0x11f7a2[_0x5857('0x37')](_0xca334a=>{_0x468637['pendingcb']--;if(_0xca334a){errorOrDestroy(_0x11f7a2,_0xca334a);}_0x468637['prefinished']=!![];_0x11f7a2[_0x5857('0x52')]('prefinish');finishMaybe(_0x11f7a2,_0x468637);});}function prefinish(_0x44780f,_0x5a3787){if(!_0x5a3787[_0x5857('0x1f')]&&!_0x5a3787[_0x5857('0x53')]){if(typeof _0x44780f[_0x5857('0x37')]==='function'&&!_0x5a3787[_0x5857('0xf')]){_0x5a3787[_0x5857('0x1e')]++;_0x5a3787['finalCalled']=!![];process[_0x5857('0x3a')](callFinal,_0x44780f,_0x5a3787);}else{_0x5a3787[_0x5857('0x1f')]=!![];_0x44780f['emit'](_0x5857('0x54'));}}}function finishMaybe(_0x1322fd,_0x3afa1c){var _0x2bc7c2=needFinish(_0x3afa1c);if(_0x2bc7c2){prefinish(_0x1322fd,_0x3afa1c);if(_0x3afa1c[_0x5857('0x1e')]===0x0){_0x3afa1c[_0x5857('0xe')]=!![];_0x1322fd['emit'](_0x5857('0x24'));if(_0x3afa1c[_0x5857('0x22')]){const _0x54bc41=_0x1322fd[_0x5857('0x55')];if(!_0x54bc41||_0x54bc41['autoDestroy']&&_0x54bc41['endEmitted']){_0x1322fd[_0x5857('0x36')]();}}}}return _0x2bc7c2;}function endWritable(_0x473173,_0x23a7bc,_0x1395b8){_0x23a7bc[_0x5857('0x41')]=!![];finishMaybe(_0x473173,_0x23a7bc);if(_0x1395b8){if(_0x23a7bc[_0x5857('0xe')])process['nextTick'](_0x1395b8);else _0x473173[_0x5857('0x56')](_0x5857('0x24'),_0x1395b8);}_0x23a7bc[_0x5857('0xd')]=!![];_0x473173[_0x5857('0x32')]=![];}function onCorkedFinish(_0x656c2d,_0x12100f,_0x3ae69f){var _0x26d7ba=_0x656c2d[_0x5857('0x57')];_0x656c2d[_0x5857('0x57')]=null;while(_0x26d7ba){var _0x254414=_0x26d7ba[_0x5857('0x4e')];_0x12100f['pendingcb']--;_0x254414(_0x3ae69f);_0x26d7ba=_0x26d7ba[_0x5857('0x27')];}_0x12100f[_0x5857('0x4d')]['next']=_0x656c2d;}Object[_0x5857('0x28')](Writable[_0x5857('0x29')],'destroyed',{'enumerable':![],'get'(){if(this[_0x5857('0x30')]===undefined){return![];}return this[_0x5857('0x30')][_0x5857('0xf')];},'set'(_0x3a569b){if(!this['_writableState']){return;}this[_0x5857('0x30')][_0x5857('0xf')]=_0x3a569b;}});Writable[_0x5857('0x29')][_0x5857('0x36')]=destroyImpl['destroy'];Writable[_0x5857('0x29')]['_undestroy']=destroyImpl['undestroy'];Writable['prototype'][_0x5857('0x58')]=function(_0x15963b,_0x2267a1){_0x2267a1(_0x15963b);};