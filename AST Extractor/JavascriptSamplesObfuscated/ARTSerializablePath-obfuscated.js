var _0x2f18=['prototype','onArc','_arcToBezier','exports','art/core/class.js','reset','path','slice','applyToPath','push'];(function(_0x355f84,_0x376cf5){var _0x4983d3=function(_0x5ade3c){while(--_0x5ade3c){_0x355f84['push'](_0x355f84['shift']());}};_0x4983d3(++_0x376cf5);}(_0x2f18,0x1c6));var _0x53cd=function(_0x3b08fc,_0x2edeca){_0x3b08fc=_0x3b08fc-0x0;var _0x34b61e=_0x2f18[_0x3b08fc];return _0x34b61e;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
'use strict';// TODO: Move this into an ART mode called "serialized" or something
const Class=require(_0x53cd('0x0'));const Path=require('art/core/path.js');const MOVE_TO=0x0;const CLOSE=0x1;const LINE_TO=0x2;const CURVE_TO=0x3;const ARC=0x4;const SerializablePath=Class(Path,{'initialize':function(_0x47c6ad){this[_0x53cd('0x1')]();if(_0x47c6ad instanceof SerializablePath){this['path']=_0x47c6ad[_0x53cd('0x2')][_0x53cd('0x3')](0x0);}else if(_0x47c6ad){if(_0x47c6ad['applyToPath']){_0x47c6ad[_0x53cd('0x4')](this);}else{this['push'](_0x47c6ad);}}},'onReset':function(){this[_0x53cd('0x2')]=[];},'onMove':function(_0x3725b4,_0x3283ec,_0x28c0c6,_0x9d98c){this['path']['push'](MOVE_TO,_0x28c0c6,_0x9d98c);},'onLine':function(_0x37844e,_0xae60f4,_0x10f969,_0x225ea7){this['path'][_0x53cd('0x5')](LINE_TO,_0x10f969,_0x225ea7);},'onBezierCurve':function(_0x58c822,_0x2989ce,_0x1c2a41,_0x767ecf,_0x10d9ff,_0x291f63,_0x7e223f,_0x133116){this[_0x53cd('0x2')][_0x53cd('0x5')](CURVE_TO,_0x1c2a41,_0x767ecf,_0x10d9ff,_0x291f63,_0x7e223f,_0x133116);},'_arcToBezier':Path[_0x53cd('0x6')][_0x53cd('0x7')],'onArc':function(_0x34e33c,_0x398d6a,_0x31389a,_0x10aad7,_0x23fb3e,_0x1c5af3,_0x35771f,_0x2b34c7,_0x229195,_0x412b49,_0x2b25a0,_0x2afa53){if(_0x35771f!==_0x2b34c7||_0x2afa53){return this[_0x53cd('0x8')](_0x34e33c,_0x398d6a,_0x31389a,_0x10aad7,_0x23fb3e,_0x1c5af3,_0x35771f,_0x2b34c7,_0x229195,_0x412b49,_0x2b25a0,_0x2afa53);}this[_0x53cd('0x2')]['push'](ARC,_0x23fb3e,_0x1c5af3,_0x35771f,_0x229195,_0x412b49,_0x2b25a0?0x0:0x1);},'onClose':function(){this[_0x53cd('0x2')][_0x53cd('0x5')](CLOSE);},'toJSON':function(){return this[_0x53cd('0x2')];}});module[_0x53cd('0x9')]=SerializablePath;