var _0x4488=['@babel/preset-typescript','filter','@babel/plugin-transform-destructuring','useState','useEffect','useContext','useReducer','useCallback','useMemo','useRef','useImperativeHandle','useLayoutEffect','useDebugValue','@babel/plugin-proposal-decorators','@babel/plugin-proposal-class-properties','@babel/plugin-transform-runtime','babel-plugin-transform-react-remove-prop-types','babel-plugin-dynamic-import-node','undefined','boolean','Preset\x20react-app:\x20\x27','\x27\x20option\x20must\x20be\x20a\x20boolean.','exports','development','test','useESModules','flow','typescript','helpers','absoluteRuntime','dirname','resolve','@babel/runtime/package.json','`BABEL_ENV`\x20environment\x20variables.\x20Valid\x20values\x20are\x20\x22development\x22,\x20','\x22test\x22,\x20and\x20\x22production\x22.\x20Instead,\x20received:\x20','@babel/preset-env','current','entry','transform-typeof-symbol','@babel/preset-react','default'];(function(_0x95a64d,_0x45ad2a){var _0x253993=function(_0x33c545){while(--_0x33c545){_0x95a64d['push'](_0x95a64d['shift']());}};_0x253993(++_0x45ad2a);}(_0x4488,0x183));var _0x41c8=function(_0x5d51bf,_0x3ca018){_0x5d51bf=_0x5d51bf-0x0;var _0x1bbe84=_0x4488[_0x5d51bf];return _0x1bbe84;};/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';const path=require('path');const validateBoolOption=(_0x5bcf46,_0x4ccaad,_0x4d743b)=>{if(typeof _0x4ccaad===_0x41c8('0x0')){_0x4ccaad=_0x4d743b;}if(typeof _0x4ccaad!==_0x41c8('0x1')){throw new Error(_0x41c8('0x2')+_0x5bcf46+_0x41c8('0x3'));}return _0x4ccaad;};module[_0x41c8('0x4')]=function(_0x5bf29a,_0x2eb61b,_0x57ec32){if(!_0x2eb61b){_0x2eb61b={};}var _0x10be8d=_0x57ec32===_0x41c8('0x5');var _0x2eeb02=_0x57ec32==='production';var _0x4b48bc=_0x57ec32===_0x41c8('0x6');var _0x2b08ba=validateBoolOption('useESModules',_0x2eb61b[_0x41c8('0x7')],_0x10be8d||_0x2eeb02);var _0x30864e=validateBoolOption('flow',_0x2eb61b[_0x41c8('0x8')],!![]);var _0x1bedd6=validateBoolOption(_0x41c8('0x9'),_0x2eb61b['typescript'],!![]);var _0x55e23b=validateBoolOption(_0x41c8('0xa'),_0x2eb61b[_0x41c8('0xa')],!![]);var _0xe51c85=validateBoolOption(_0x41c8('0xb'),_0x2eb61b[_0x41c8('0xb')],!![]);var _0x404c5a=undefined;if(_0xe51c85){_0x404c5a=path[_0x41c8('0xc')](require[_0x41c8('0xd')](_0x41c8('0xe')));}if(!_0x10be8d&&!_0x2eeb02&&!_0x4b48bc){throw new Error('Using\x20`babel-preset-react-app`\x20requires\x20that\x20you\x20specify\x20`NODE_ENV`\x20or\x20'+_0x41c8('0xf')+_0x41c8('0x10')+JSON['stringify'](_0x57ec32)+'.');}return{'presets':[_0x4b48bc&&[require(_0x41c8('0x11'))['default'],{'targets':{'node':_0x41c8('0x12')}}],(_0x2eeb02||_0x10be8d)&&[require('@babel/preset-env')['default'],{'useBuiltIns':_0x41c8('0x13'),'modules':![],'exclude':[_0x41c8('0x14')]}],[require(_0x41c8('0x15'))[_0x41c8('0x16')],{'development':_0x10be8d||_0x4b48bc,'useBuiltIns':!![]}],_0x1bedd6&&[require(_0x41c8('0x17'))[_0x41c8('0x16')]]][_0x41c8('0x18')](Boolean),'plugins':[_0x30864e&&[require('@babel/plugin-transform-flow-strip-types')['default'],![]],require('babel-plugin-macros'),[require(_0x41c8('0x19'))[_0x41c8('0x16')],{'loose':![],'selectiveLoose':[_0x41c8('0x1a'),_0x41c8('0x1b'),_0x41c8('0x1c'),_0x41c8('0x1d'),_0x41c8('0x1e'),_0x41c8('0x1f'),_0x41c8('0x20'),_0x41c8('0x21'),_0x41c8('0x22'),_0x41c8('0x23')]}],_0x1bedd6&&[require(_0x41c8('0x24'))[_0x41c8('0x16')],![]],[require(_0x41c8('0x25'))['default'],{'loose':!![]}],[require('@babel/plugin-proposal-object-rest-spread')[_0x41c8('0x16')],{'useBuiltIns':!![]}],[require(_0x41c8('0x26'))[_0x41c8('0x16')],{'corejs':![],'helpers':_0x55e23b,'regenerator':!![],'useESModules':_0x2b08ba,'absoluteRuntime':_0x404c5a}],_0x2eeb02&&[require(_0x41c8('0x27'))[_0x41c8('0x16')],{'removeImport':!![]}],require('@babel/plugin-syntax-dynamic-import')['default'],_0x4b48bc&&require(_0x41c8('0x28'))][_0x41c8('0x18')](Boolean),'overrides':[_0x30864e&&{'exclude':/\.tsx?$/,'plugins':[require('@babel/plugin-transform-flow-strip-types')['default']]},_0x1bedd6&&{'test':/\.tsx?$/,'plugins':[[require(_0x41c8('0x24'))[_0x41c8('0x16')],{'legacy':!![]}]]}]['filter'](Boolean)};};