var _0x32d7=['should\x20not\x20recognize\x20stack-traces\x20as\x20URLs','ftp://foo/bar?baz#qux:4:2','https://foo/bar?baz#qux:4:2','mailto:foo_bar@baz.qux:4:2','foo_bar@baz.qux:4:2','should\x20should\x20set\x20`[target]`\x20if\x20specified','_blank','<a\x20target=\x22','\x22\x20href=\x22','https://foooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo','https://foooooooooooooooooooooooooooooooooooooooooooooooo...','should\x20pass\x20the\x20final\x20string\x20through\x20`$sanitize`','calls','reset','start\x20https://foo/bar?baz#qux\x20end','toHaveBeenCalledTimes','toHaveBeenCalledWith','errorDisplay','decorator','errorLinkFilter','and','should\x20set\x20the\x20element\x27s\x20HTML','<span\x20error-display=\x22bar\x22>foo</span>','html','should\x20interpolate\x20the\x20contents\x20against\x20`$location.search()`','search','returnValue','foo','bar','<span\x20error-display=\x22foo\x20=\x20{0},\x20bar\x20=\x20{1}\x22></span>','foo\x20=\x20foo,\x20bar\x20=\x20bar','<span\x20error-display=\x22foo\x20=\x20{0}\x22></span>','should\x20encode\x20`<`\x20and\x20`>`','<span\x20error-display=\x22&lt;xyz&gt;\x22></span>','text','<xyz>','module','value','createSpy','callFake','identity','errors','should\x20return\x20empty\x20input\x20unchanged','length','forEach','toBe','ftp://foo/bar?baz#qux','https://foo/bar?baz#qux','mailto:foo_bar@baz.qux','foo_bar@baz.qux','<a\x20href=\x22','</a>','\x20end','start\x20'];(function(_0x5f011e,_0x3dd4e0){var _0x43c6d4=function(_0x5b8ed9){while(--_0x5b8ed9){_0x5f011e['push'](_0x5f011e['shift']());}};_0x43c6d4(++_0x3dd4e0);}(_0x32d7,0x132));var _0x2a62=function(_0x9c3efd,_0x50c75b){_0x9c3efd=_0x9c3efd-0x0;var _0xedb09d=_0x32d7[_0x9c3efd];return _0xedb09d;};'use strict';describe('errors',function(){angular[_0x2a62('0x0')]('ngSanitize',[])[_0x2a62('0x1')]('$sanitize',jasmine[_0x2a62('0x2')]('$sanitize')['and'][_0x2a62('0x3')](angular[_0x2a62('0x4')]));beforeEach(module(_0x2a62('0x5')));describe('errorDisplay',function(){var _0x10de84;var _0x494469;beforeEach(inject(function(_0x334850,_0x5a3df5){_0x10de84=_0x334850;_0x494469=_0x5a3df5;}));it(_0x2a62('0x6'),function(){var _0x42168d=[undefined,null,![],0x0,''];var _0x246714=_0x42168d[_0x2a62('0x7')];_0x42168d[_0x2a62('0x8')](function(_0x227e25){expect(_0x494469(_0x227e25))[_0x2a62('0x9')](_0x227e25);_0x246714--;});expect(_0x246714)['toBe'](0x0);});it('should\x20recognize\x20URLs\x20and\x20convert\x20them\x20to\x20`<a>`',function(){var _0x1de91b=[[_0x2a62('0xa')],['http://foo/bar?baz#qux'],[_0x2a62('0xb')],[_0x2a62('0xc'),null,'foo_bar@baz.qux'],[_0x2a62('0xd'),_0x2a62('0xc'),_0x2a62('0xd')]];var _0x458830=_0x1de91b[_0x2a62('0x7')];_0x1de91b[_0x2a62('0x8')](function(_0x261a4b){var _0x204f30=_0x261a4b[0x0];var _0x260b33=_0x261a4b[0x1]||_0x204f30;var _0x6a5aaa=_0x261a4b[0x2]||_0x260b33;var _0x42e466=_0x2a62('0xe')+_0x260b33+'\x22>'+_0x6a5aaa+_0x2a62('0xf');var _0x201e92='start\x20'+_0x204f30+_0x2a62('0x10');var _0x4d31b0=_0x2a62('0x11')+_0x42e466+_0x2a62('0x10');expect(_0x494469(_0x201e92))[_0x2a62('0x9')](_0x4d31b0);_0x458830--;});expect(_0x458830)['toBe'](0x0);});it(_0x2a62('0x12'),function(){var _0xcfedda=[_0x2a62('0x13'),'http://foo/bar?baz#qux:4:2',_0x2a62('0x14'),_0x2a62('0x15'),_0x2a62('0x16')];var _0x49ab57=_0xcfedda[_0x2a62('0x7')];_0xcfedda[_0x2a62('0x8')](function(_0x4125ab){var _0x519520=_0x2a62('0x11')+_0x4125ab+_0x2a62('0x10');expect(_0x494469(_0x519520))['toBe'](_0x519520);_0x49ab57--;});expect(_0x49ab57)[_0x2a62('0x9')](0x0);});it(_0x2a62('0x17'),function(){var _0x5d6c0e=_0x2a62('0xb');var _0x5d57f7=_0x2a62('0x18');var _0x333aa6='<a\x20href=\x22'+_0x5d6c0e+'\x22>'+_0x5d6c0e+_0x2a62('0xf');var _0x3226f2=_0x2a62('0x19')+_0x5d57f7+_0x2a62('0x1a')+_0x5d6c0e+'\x22>'+_0x5d6c0e+'</a>';expect(_0x494469(_0x5d6c0e))[_0x2a62('0x9')](_0x333aa6);expect(_0x494469(_0x5d6c0e,_0x5d57f7))[_0x2a62('0x9')](_0x3226f2);});it('should\x20truncate\x20the\x20contents\x20of\x20the\x20generated\x20`<a>`\x20to\x2060\x20characters',function(){var _0x1bc1dc=_0x2a62('0x1b');var _0x50191b=_0x2a62('0x1c');var _0x3a1016=_0x2a62('0xe')+_0x1bc1dc+'\x22>'+_0x50191b+_0x2a62('0xf');expect(_0x1bc1dc[_0x2a62('0x7')])['toBeGreaterThan'](0x3c);expect(_0x50191b[_0x2a62('0x7')])[_0x2a62('0x9')](0x3c);expect(_0x494469(_0x1bc1dc))[_0x2a62('0x9')](_0x3a1016);});it(_0x2a62('0x1d'),function(){_0x10de84[_0x2a62('0x1e')][_0x2a62('0x1f')]();var _0x1836fe=_0x2a62('0x20');var _0x1eaf41=_0x494469(_0x1836fe);expect(_0x10de84)[_0x2a62('0x21')](0x1);expect(_0x10de84)[_0x2a62('0x22')](_0x1eaf41);});});describe(_0x2a62('0x23'),function(){var _0x3dd5b8;var _0x330f95;var _0x1e566c;var _0x342954;beforeEach(module(function(_0x43ceb8){_0x43ceb8[_0x2a62('0x24')](_0x2a62('0x25'),function(){_0x342954=jasmine[_0x2a62('0x2')](_0x2a62('0x25'));_0x342954[_0x2a62('0x26')][_0x2a62('0x3')](angular[_0x2a62('0x4')]);return _0x342954;});}));beforeEach(inject(function(_0x5d3f49,_0x289339,_0x29d414){_0x3dd5b8=_0x5d3f49;_0x330f95=_0x289339;_0x1e566c=_0x29d414;}));it(_0x2a62('0x27'),function(){var _0x3c30f2=_0x3dd5b8(_0x2a62('0x28'))(_0x1e566c);expect(_0x3c30f2[_0x2a62('0x29')]())['toBe']('bar');});it(_0x2a62('0x2a'),function(){spyOn(_0x330f95,_0x2a62('0x2b'))[_0x2a62('0x26')][_0x2a62('0x2c')]({'p0':_0x2a62('0x2d'),'p1':_0x2a62('0x2e')});var _0x283644=_0x3dd5b8(_0x2a62('0x2f'))(_0x1e566c);expect(_0x283644['html']())['toBe'](_0x2a62('0x30'));});it('should\x20pass\x20the\x20interpolated\x20text\x20through\x20`errorLinkFilter`',function(){_0x330f95[_0x2a62('0x2b')]=jasmine[_0x2a62('0x2')]('search')['and'][_0x2a62('0x2c')]({'p0':_0x2a62('0x2d')});_0x3dd5b8(_0x2a62('0x31'))(_0x1e566c);expect(_0x342954)[_0x2a62('0x21')](0x1);expect(_0x342954)['toHaveBeenCalledWith']('foo\x20=\x20foo','_blank');});it(_0x2a62('0x32'),function(){var _0x2eb8a1=_0x3dd5b8(_0x2a62('0x33'))(_0x1e566c);expect(_0x2eb8a1[_0x2a62('0x34')]())[_0x2a62('0x9')](_0x2a62('0x35'));});});});