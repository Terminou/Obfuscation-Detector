var a8_0x2978=['$eval','ngModelOptions','createChild','?^^ngModelOptions','$$options','prototype','$inherit','updateOn','updateOnDefault','replace','$attrs','$scope','$$attrs','$$scope','parentCtrl','$options'];(function(_0x4a8d4a,_0x3c8e49){var _0x269197=function(_0x5a3ff4){while(--_0x5a3ff4){_0x4a8d4a['push'](_0x4a8d4a['shift']());}};_0x269197(++_0x3c8e49);}(a8_0x2978,0xe4));var a8_0x4774=function(_0x250463,_0x57d8f0){_0x250463=_0x250463-0x0;var _0x27e0e3=a8_0x2978[_0x250463];return _0x27e0e3;};'use strict';/* exported defaultModelOptions */var defaultModelOptions;var DEFAULT_REGEXP=/(\s+|^)default(\s+|$)/;function ModelOptions(_0x183023){this[a8_0x4774('0x0')]=_0x183023;}ModelOptions[a8_0x4774('0x1')]={'getOption':function(_0x54dedc){return this[a8_0x4774('0x0')][_0x54dedc];},'createChild':function(_0x3b646e){var _0x4c0b91=![];_0x3b646e=extend({},_0x3b646e);forEach(_0x3b646e,function(_0x5c41aa,_0x18d29c){if(_0x5c41aa===a8_0x4774('0x2')){if(_0x18d29c==='*'){_0x4c0b91=!![];}else{_0x3b646e[_0x18d29c]=this['$$options'][_0x18d29c];if(_0x18d29c===a8_0x4774('0x3')){_0x3b646e[a8_0x4774('0x4')]=this['$$options'][a8_0x4774('0x4')];}}}else{if(_0x18d29c===a8_0x4774('0x3')){_0x3b646e['updateOnDefault']=![];_0x3b646e[_0x18d29c]=trim(_0x5c41aa[a8_0x4774('0x5')](DEFAULT_REGEXP,function(){_0x3b646e[a8_0x4774('0x4')]=!![];return'\x20';}));}}},this);if(_0x4c0b91){delete _0x3b646e['*'];defaults(_0x3b646e,this[a8_0x4774('0x0')]);}defaults(_0x3b646e,defaultModelOptions[a8_0x4774('0x0')]);return new ModelOptions(_0x3b646e);}};defaultModelOptions=new ModelOptions({'updateOn':'','updateOnDefault':!![],'debounce':0x0,'getterSetter':![],'allowInvalid':![],'timezone':null});var ngModelOptionsDirective=function(){_0x3dbcb8['$inject']=[a8_0x4774('0x6'),a8_0x4774('0x7')];function _0x3dbcb8(_0x17dde3,_0x49976d){this[a8_0x4774('0x8')]=_0x17dde3;this[a8_0x4774('0x9')]=_0x49976d;}_0x3dbcb8['prototype']={'$onInit':function(){var _0x20f434=this[a8_0x4774('0xa')]?this[a8_0x4774('0xa')][a8_0x4774('0xb')]:defaultModelOptions;var _0x1fa891=this['$$scope'][a8_0x4774('0xc')](this[a8_0x4774('0x8')][a8_0x4774('0xd')]);this[a8_0x4774('0xb')]=_0x20f434[a8_0x4774('0xe')](_0x1fa891);}};return{'restrict':'A','priority':0xa,'require':{'parentCtrl':a8_0x4774('0xf')},'bindToController':!![],'controller':_0x3dbcb8};};function defaults(_0x41646c,_0x3137c2){forEach(_0x3137c2,function(_0x18758b,_0x3d7d6b){if(!isDefined(_0x41646c[_0x3d7d6b])){_0x41646c[_0x3d7d6b]=_0x18758b;}});}