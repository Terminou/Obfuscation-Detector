var _0x158a=['className','as\x20','directives','parameter\x20section','should\x20show\x20the\x20directive\x20name\x20only\x20if\x20it\x20is\x20a\x20param\x20(attribute)\x20with\x20a\x20value','get','build/docs/index.html#!/api/ng/directive/ngInclude','getText','ngInclude\x20|\x20src','build/docs/index.html#!/api/ngRoute/directive/ngView','toContain','ngView','ng-include','isPresent','toBe','attribute','CSS\x20class','should\x20show\x20the\x20directive\x20name\x20if\x20it\x20is\x20a\x20void\x20param\x20(attribute)','element','ng-view','css','tr\x20td:nth-child(1)','tag','atn','atv'];(function(_0x21a861,_0x333bfe){var _0x14e5ab=function(_0x92ad44){while(--_0x92ad44){_0x21a861['push'](_0x21a861['shift']());}};_0x14e5ab(++_0x333bfe);}(_0x158a,0x1dd));var _0x2e3b=function(_0x4ee9b5,_0xb973ff){_0x4ee9b5=_0x4ee9b5-0x0;var _0x6313dc=_0x158a[_0x4ee9b5];return _0x6313dc;};'use strict';describe(_0x2e3b('0x0'),function(){describe(_0x2e3b('0x1'),function(){it(_0x2e3b('0x2'),function(){browser[_0x2e3b('0x3')](_0x2e3b('0x4'));expect(getParamNames()[_0x2e3b('0x5')]())['toContain'](_0x2e3b('0x6'));browser[_0x2e3b('0x3')](_0x2e3b('0x7'));expect(getParamNames()[_0x2e3b('0x5')]())['not'][_0x2e3b('0x8')](_0x2e3b('0x9'));});});describe('usage\x20section',function(){it('should\x20show\x20the\x20directive\x20name\x20if\x20it\x20is\x20a\x20param\x20(attribute)\x20with\x20a\x20value',function(){browser['get'](_0x2e3b('0x4'));expect(getUsageAs('element',_0x2e3b('0xa'))[_0x2e3b('0xb')]())[_0x2e3b('0xc')](!![]);expect(getUsageAs(_0x2e3b('0xd'),'ng-include')[_0x2e3b('0xb')]())[_0x2e3b('0xc')](!![]);expect(getUsageAs(_0x2e3b('0xe'),_0x2e3b('0xa'))['isPresent']())[_0x2e3b('0xc')](!![]);});it(_0x2e3b('0xf'),function(){browser[_0x2e3b('0x3')](_0x2e3b('0x7'));expect(getUsageAs(_0x2e3b('0x10'),_0x2e3b('0x11'))[_0x2e3b('0xb')]())[_0x2e3b('0xc')](!![]);expect(getUsageAs(_0x2e3b('0xd'),_0x2e3b('0x11'))['isPresent']())[_0x2e3b('0xc')](!![]);expect(getUsageAs(_0x2e3b('0xe'),_0x2e3b('0x11'))['isPresent']())[_0x2e3b('0xc')](!![]);});});});function getParamNames(){var _0x36ef40=element(by['className']('input-arguments'));var _0x143d38=_0x36ef40['all'](by[_0x2e3b('0x12')](_0x2e3b('0x13')));return _0x143d38;}var typeClassMap={'element':_0x2e3b('0x14'),'attribute':_0x2e3b('0x15'),'CSS class':_0x2e3b('0x16')};function getUsageAs(_0x275c98,_0x38bcbf){var _0x40efc0=element(by[_0x2e3b('0x17')]('usage'));var _0x77617a=_0x40efc0[_0x2e3b('0x10')](by['cssContainingText']('li',_0x2e3b('0x18')+_0x275c98));return _0x77617a[_0x2e3b('0x10')](by['cssContainingText']('span.'+typeClassMap[_0x275c98],_0x38bcbf));}