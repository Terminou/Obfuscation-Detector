var _0x5f73=['The\x20bundle\x20size\x20is\x20significantly\x20larger\x20than\x20recommended.','Consider\x20reducing\x20it\x20with\x20code\x20splitting:\x20https://goo.gl/9VhYWB','You\x20can\x20also\x20analyze\x20the\x20project\x20dependencies:\x20https://goo.gl/LeUzfb','replace','isNaN','red','exports','path','filesize','recursive-readdir','sync','test','sizes','map','assets','filter','name','readFileSync','join','basename','dirname','reduce','sort','size','sizeLabel','length','forEach','repeat','indexOf','main.','extname','.js','yellow','dim','cyan','log'];(function(_0x15a272,_0x516b6a){var _0x4dd628=function(_0x4485e5){while(--_0x4485e5){_0x15a272['push'](_0x15a272['shift']());}};_0x4dd628(++_0x516b6a);}(_0x5f73,0x16f));var _0x44ea=function(_0x97dddb,_0x167190){_0x97dddb=_0x97dddb-0x0;var _0x3919f7=_0x5f73[_0x97dddb];return _0x3919f7;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';var fs=require('fs');var path=require(_0x44ea('0x0'));var chalk=require('chalk');var filesize=require(_0x44ea('0x1'));var recursive=require(_0x44ea('0x2'));var stripAnsi=require('strip-ansi');var gzipSize=require('gzip-size')[_0x44ea('0x3')];function canReadAsset(_0x2f0104){return/\.(js|css)$/[_0x44ea('0x4')](_0x2f0104)&&!/service-worker\.js/['test'](_0x2f0104)&&!/precache-manifest\.[0-9a-f]+\.js/[_0x44ea('0x4')](_0x2f0104);}function printFileSizesAfterBuild(_0x2264dd,_0x58ab33,_0x1d3f6d,_0x1b8b7a,_0x4ef0a7){var _0x497190=_0x58ab33['root'];var _0x374966=_0x58ab33[_0x44ea('0x5')];var _0x54d99f=(_0x2264dd['stats']||[_0x2264dd])[_0x44ea('0x6')](_0x1e3d30=>_0x1e3d30['toJson']({'all':![],'assets':!![]})[_0x44ea('0x7')][_0x44ea('0x8')](_0x213a22=>canReadAsset(_0x213a22[_0x44ea('0x9')]))['map'](_0x1a8e1a=>{var _0x35f02c=fs[_0x44ea('0xa')](path['join'](_0x497190,_0x1a8e1a['name']));var _0x51dc15=gzipSize(_0x35f02c);var _0x5242b9=_0x374966[removeFileNameHash(_0x497190,_0x1a8e1a[_0x44ea('0x9')])];var _0x1d6f2d=getDifferenceLabel(_0x51dc15,_0x5242b9);return{'folder':path[_0x44ea('0xb')](path[_0x44ea('0xc')](_0x1d3f6d),path[_0x44ea('0xd')](_0x1a8e1a[_0x44ea('0x9')])),'name':path[_0x44ea('0xc')](_0x1a8e1a[_0x44ea('0x9')]),'size':_0x51dc15,'sizeLabel':filesize(_0x51dc15)+(_0x1d6f2d?'\x20('+_0x1d6f2d+')':'')};}))[_0x44ea('0xe')]((_0x32981c,_0xed2e7b)=>_0xed2e7b['concat'](_0x32981c),[]);_0x54d99f[_0x44ea('0xf')]((_0x3cdbc5,_0x483657)=>_0x483657[_0x44ea('0x10')]-_0x3cdbc5[_0x44ea('0x10')]);var _0x6a8612=Math['max']['apply'](null,_0x54d99f[_0x44ea('0x6')](_0x265cad=>stripAnsi(_0x265cad[_0x44ea('0x11')])[_0x44ea('0x12')]));var _0x215f39=![];_0x54d99f[_0x44ea('0x13')](_0x55fc37=>{var _0x55ff34=_0x55fc37[_0x44ea('0x11')];var _0x2aadd9=stripAnsi(_0x55ff34)[_0x44ea('0x12')];if(_0x2aadd9<_0x6a8612){var _0x2f46e5='\x20'[_0x44ea('0x14')](_0x6a8612-_0x2aadd9);_0x55ff34+=_0x2f46e5;}var _0x1611c3=_0x55fc37[_0x44ea('0x9')][_0x44ea('0x15')](_0x44ea('0x16'))===0x0;var _0x51620e=_0x1611c3?_0x1b8b7a:_0x4ef0a7;var _0x15d2b7=_0x51620e&&_0x55fc37[_0x44ea('0x10')]>_0x51620e;if(_0x15d2b7&&path[_0x44ea('0x17')](_0x55fc37[_0x44ea('0x9')])===_0x44ea('0x18')){_0x215f39=!![];}console['log']('\x20\x20'+(_0x15d2b7?chalk[_0x44ea('0x19')](_0x55ff34):_0x55ff34)+'\x20\x20'+chalk[_0x44ea('0x1a')](_0x55fc37['folder']+path['sep'])+chalk[_0x44ea('0x1b')](_0x55fc37['name']));});if(_0x215f39){console[_0x44ea('0x1c')]();console[_0x44ea('0x1c')](chalk[_0x44ea('0x19')](_0x44ea('0x1d')));console['log'](chalk[_0x44ea('0x19')](_0x44ea('0x1e')));console[_0x44ea('0x1c')](chalk[_0x44ea('0x19')](_0x44ea('0x1f')));}}function removeFileNameHash(_0xbfa6d2,_0x596cc8){return _0x596cc8[_0x44ea('0x20')](_0xbfa6d2,'')[_0x44ea('0x20')](/\\/g,'/')[_0x44ea('0x20')](/\/?(.*)(\.[0-9a-f]+)(\.chunk)?(\.js|\.css)/,(_0x472379,_0x19ea6c,_0x1f6880,_0x173d23,_0x126421)=>_0x19ea6c+_0x126421);}function getDifferenceLabel(_0x2aa6dd,_0x3f1f14){var _0x1f87e1=0x400*0x32;var _0x5e1425=_0x2aa6dd-_0x3f1f14;var _0x40d09f=!Number[_0x44ea('0x21')](_0x5e1425)?filesize(_0x5e1425):0x0;if(_0x5e1425>=_0x1f87e1){return chalk[_0x44ea('0x22')]('+'+_0x40d09f);}else if(_0x5e1425<_0x1f87e1&&_0x5e1425>0x0){return chalk[_0x44ea('0x19')]('+'+_0x40d09f);}else if(_0x5e1425<0x0){return chalk['green'](_0x40d09f);}else{return'';}}function measureFileSizesBeforeBuild(_0x1e7545){return new Promise(_0x22c691=>{recursive(_0x1e7545,(_0x4a6806,_0xf22897)=>{var _0x38f821;if(!_0x4a6806&&_0xf22897){_0x38f821=_0xf22897['filter'](canReadAsset)[_0x44ea('0xe')]((_0x2648bb,_0x49478a)=>{var _0x344765=fs[_0x44ea('0xa')](_0x49478a);var _0x2d2f5a=removeFileNameHash(_0x1e7545,_0x49478a);_0x2648bb[_0x2d2f5a]=gzipSize(_0x344765);return _0x2648bb;},{});}_0x22c691({'root':_0x1e7545,'sizes':_0x38f821||{}});});});}module[_0x44ea('0x23')]={'measureFileSizesBeforeBuild':measureFileSizesBeforeBuild,'printFileSizesAfterBuild':printFileSizesAfterBuild};