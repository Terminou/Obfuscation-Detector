var _0x396a=['toThrowMinErr','syntax','Syntax\x20Error:\x20Token\x20\x27{\x27\x20invalid\x20key\x20at\x20column\x202\x20of\x20the\x20expression\x20[{{myHtml}}]\x20starting\x20at\x20[{myHtml}}]','SCE\x20disabled','enabled','should\x20set\x20html','<div\x20ng-bind-html=\x22html\x22></div>','<div\x20onclick=\x22\x22>hello</div>','should\x20update\x20html','html','goodbye','<div\x20ng-bind-html=\x22::html\x22></div>','SCE\x20enabled','should\x20NOT\x20set\x20html\x20for\x20untrusted\x20values','toThrow','should\x20NOT\x20set\x20html\x20for\x20wrongly\x20typed\x20values','trustAsHtml','<div\x20ng-bind-html=\x22getHtml()\x22></div>','should\x20handle\x20custom\x20$sce\x20objects','val','decorator','$sce','getTrustedHtml','valueOf','when\x20$sanitize\x20is\x20available','ngSanitize','should\x20sanitize\x20untrusted\x20html','<div>hello</div>','ngBind*','ngBind','<div\x20ng-bind=\x22a\x22></div>','text','toEqual','misko','hasClass','ng-binding','should\x20set\x20text\x20to\x20blank\x20if\x20undefined','$digest','<div><span\x20ng-bind=\x22null\x22></span>','<span\x20ng-bind=\x22undefined\x22></span>','<span\x20ng-bind=\x22\x27\x27\x22></span>-','<span\x20ng-bind=\x220\x22></span>','<span\x20ng-bind=\x22false\x22></span>','</div>','-0false','should\x20jsonify\x20$prop','true','should\x20use\x20custom\x20toString\x20when\x20present','value','foo','<div\x20ng-bind=\x22value\x22></div>','should\x20NOT\x20use\x20toString\x20on\x20array\x20objects','should\x20NOT\x20use\x20toString\x20on\x20Date\x20objects','toBe','stringify','not','toString','should\x20one-time\x20bind\x20if\x20the\x20expression\x20starts\x20with\x20two\x20colons','lucas','$$watchers','length','should\x20be\x20possible\x20to\x20bind\x20to\x20a\x20new\x20value\x20within\x20the\x20same\x20$digest','<div\x20ng-bind=\x22::a\x22></div>','$watch','bar','should\x20remove\x20the\x20binding\x20if\x20the\x20value\x20is\x20defined\x20at\x20the\x20end\x20of\x20a\x20$digest\x20loop','should\x20ngBindTemplate','<div\x20ng-bind-template=\x22Hello\x20{{name}}!\x22></div>','name','Misko','Hello\x20Misko!','should\x20one-time\x20bind\x20the\x20expressions\x20that\x20start\x20with\x20::','hello','Hello','Lucas','should\x20render\x20object\x20as\x20JSON\x20ignore\x20$$','<pre>{{\x20{key:\x22value\x22,\x20$$key:\x22hide\x22}\x20\x20}}</pre>','ngBindHtml','should\x20complain\x20about\x20accidental\x20use\x20of\x20interpolation'];(function(_0x512259,_0x1f3c97){var _0x5436e0=function(_0x32c7a4){while(--_0x32c7a4){_0x512259['push'](_0x512259['shift']());}};_0x5436e0(++_0x1f3c97);}(_0x396a,0xba));var _0x8d5b=function(_0xcfaf94,_0x5c99be){_0xcfaf94=_0xcfaf94-0x0;var _0x1f7124=_0x396a[_0xcfaf94];return _0x1f7124;};'use strict';describe(_0x8d5b('0x0'),function(){var _0x5f4509;afterEach(function(){dealoc(_0x5f4509);});describe(_0x8d5b('0x1'),function(){it('should\x20set\x20text',inject(function(_0x411fe3,_0x337d7a){_0x5f4509=_0x337d7a(_0x8d5b('0x2'))(_0x411fe3);expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')]('');_0x411fe3['a']=_0x8d5b('0x5');_0x411fe3['$digest']();expect(_0x5f4509[_0x8d5b('0x6')](_0x8d5b('0x7')))[_0x8d5b('0x4')](!![]);expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x5'));}));it(_0x8d5b('0x8'),inject(function(_0x4496ac,_0x2c7e07){_0x5f4509=_0x2c7e07(_0x8d5b('0x2'))(_0x4496ac);_0x4496ac['a']='misko';_0x4496ac[_0x8d5b('0x9')]();expect(_0x5f4509['text']())['toEqual'](_0x8d5b('0x5'));_0x4496ac['a']=undefined;_0x4496ac[_0x8d5b('0x9')]();expect(_0x5f4509['text']())['toEqual']('');_0x4496ac['a']=null;_0x4496ac[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())['toEqual']('');}));it('should\x20suppress\x20rendering\x20of\x20falsy\x20values',inject(function(_0xdc2ffc,_0x1a6b61){_0x5f4509=_0x1a6b61(_0x8d5b('0xa')+_0x8d5b('0xb')+_0x8d5b('0xc')+_0x8d5b('0xd')+_0x8d5b('0xe')+_0x8d5b('0xf'))(_0xdc2ffc);_0xdc2ffc['$digest']();expect(_0x5f4509['text']())['toEqual'](_0x8d5b('0x10'));}));they(_0x8d5b('0x11'),[[{'a':0x1},'{\x22a\x22:1}'],[!![],_0x8d5b('0x12')],[![],'false']],function(_0x5898c1){inject(function(_0x2abca6,_0x46dd4a){_0x2abca6['value']=_0x5898c1[0x0];_0x5f4509=_0x46dd4a('<div\x20ng-bind=\x22value\x22></div>')(_0x2abca6);_0x2abca6['$digest']();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x5898c1[0x1]);});});it(_0x8d5b('0x13'),inject(function(_0x25d417,_0x31c909){_0x25d417[_0x8d5b('0x14')]={'toString':function(){return _0x8d5b('0x15');}};_0x5f4509=_0x31c909(_0x8d5b('0x16'))(_0x25d417);_0x25d417['$digest']();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x15'));}));it(_0x8d5b('0x17'),inject(function(_0x4ffd4b,_0x41f540){_0x4ffd4b[_0x8d5b('0x14')]=[];_0x5f4509=_0x41f540('<div\x20ng-bind=\x22value\x22></div>')(_0x4ffd4b);_0x4ffd4b[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')]('[]');}));it(_0x8d5b('0x18'),inject(function(_0x112793,_0x5bfc35){_0x112793['value']=new Date(0x7de,0xa,0xa,0x0,0x0,0x0);_0x5f4509=_0x5bfc35(_0x8d5b('0x16'))(_0x112793);_0x112793[_0x8d5b('0x9')]();expect(_0x5f4509['text']())[_0x8d5b('0x19')](JSON[_0x8d5b('0x1a')](_0x112793[_0x8d5b('0x14')]));expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x1b')]['toEqual'](_0x112793[_0x8d5b('0x14')][_0x8d5b('0x1c')]());}));it(_0x8d5b('0x1d'),inject(function(_0x3a456f,_0x481f4b){_0x5f4509=_0x481f4b('<div\x20ng-bind=\x22::a\x22></div>')(_0x3a456f);_0x3a456f['a']=_0x8d5b('0x1e');expect(_0x3a456f['$$watchers']['length'])['toEqual'](0x1);_0x3a456f[_0x8d5b('0x9')]();expect(_0x5f4509['text']())[_0x8d5b('0x4')](_0x8d5b('0x1e'));expect(_0x3a456f[_0x8d5b('0x1f')][_0x8d5b('0x20')])[_0x8d5b('0x4')](0x0);_0x3a456f['a']=undefined;_0x3a456f['$digest']();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x1e'));}));it(_0x8d5b('0x21'),inject(function(_0x371e8a,_0x2e8e65){_0x5f4509=_0x2e8e65(_0x8d5b('0x22'))(_0x371e8a);_0x371e8a[_0x8d5b('0x23')]('a',function(_0x25a1fe){if(_0x25a1fe===_0x8d5b('0x15')){_0x371e8a['a']=_0x8d5b('0x24');}});_0x371e8a['a']=_0x8d5b('0x15');_0x371e8a['$digest']();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x24'));_0x371e8a['a']=undefined;_0x371e8a[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())['toEqual'](_0x8d5b('0x24'));}));it(_0x8d5b('0x25'),inject(function(_0x9ac56,_0x103585){_0x5f4509=_0x103585('<div\x20ng-bind=\x22::a\x22></div>')(_0x9ac56);_0x9ac56['$watch']('a',function(_0x58f45f){if(_0x58f45f===_0x8d5b('0x15')){_0x9ac56['a']=undefined;}});_0x9ac56['a']='foo';_0x9ac56[_0x8d5b('0x9')]();expect(_0x5f4509['text']())[_0x8d5b('0x4')]('');_0x9ac56['a']=_0x8d5b('0x24');_0x9ac56[_0x8d5b('0x9')]();expect(_0x5f4509['text']())[_0x8d5b('0x4')]('bar');_0x9ac56['a']='man';_0x9ac56[_0x8d5b('0x9')]();expect(_0x5f4509['text']())[_0x8d5b('0x4')]('bar');}));});describe('ngBindTemplate',function(){it(_0x8d5b('0x26'),inject(function(_0x353b26,_0x3ddee4){_0x5f4509=_0x3ddee4(_0x8d5b('0x27'))(_0x353b26);_0x353b26[_0x8d5b('0x28')]=_0x8d5b('0x29');_0x353b26['$digest']();expect(_0x5f4509[_0x8d5b('0x6')](_0x8d5b('0x7')))[_0x8d5b('0x4')](!![]);expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x2a'));}));it(_0x8d5b('0x2b'),inject(function(_0x2587af,_0xde82a0){_0x5f4509=_0xde82a0('<div\x20ng-bind-template=\x22{{::hello}}\x20{{::name}}!\x22></div>')(_0x2587af);_0x2587af['name']=_0x8d5b('0x29');expect(_0x2587af[_0x8d5b('0x1f')][_0x8d5b('0x20')])[_0x8d5b('0x4')](0x2);_0x2587af[_0x8d5b('0x9')]();expect(_0x5f4509['hasClass']('ng-binding'))[_0x8d5b('0x4')](!![]);expect(_0x5f4509['text']())[_0x8d5b('0x4')]('\x20Misko!');expect(_0x2587af[_0x8d5b('0x1f')]['length'])['toEqual'](0x1);_0x2587af[_0x8d5b('0x2c')]=_0x8d5b('0x2d');_0x2587af[_0x8d5b('0x28')]=_0x8d5b('0x2e');_0x2587af[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')]('Hello\x20Misko!');expect(_0x2587af['$$watchers'][_0x8d5b('0x20')])[_0x8d5b('0x4')](0x0);}));it(_0x8d5b('0x2f'),inject(function(_0x3509e4,_0x39fbca){_0x5f4509=_0x39fbca(_0x8d5b('0x30'))(_0x3509e4);_0x3509e4[_0x8d5b('0x9')]();expect(fromJson(_0x5f4509['text']()))['toEqual']({'key':_0x8d5b('0x14')});}));});describe(_0x8d5b('0x31'),function(){it(_0x8d5b('0x32'),inject(function(_0x72a81c){expect(function(){_0x72a81c('<div\x20ng-bind-html=\x22{{myHtml}}\x22></div>');})[_0x8d5b('0x33')]('$parse',_0x8d5b('0x34'),_0x8d5b('0x35'));}));describe(_0x8d5b('0x36'),function(){beforeEach(function(){module(function(_0x264f3a){_0x264f3a[_0x8d5b('0x37')](![]);});});it(_0x8d5b('0x38'),inject(function(_0x282152,_0x452ded){_0x5f4509=_0x452ded(_0x8d5b('0x39'))(_0x282152);_0x282152['html']=_0x8d5b('0x3a');_0x282152[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509['html']()))[_0x8d5b('0x4')]('<div\x20onclick=\x22\x22>hello</div>');}));it(_0x8d5b('0x3b'),inject(function(_0x63565,_0x122beb,_0x3a8415){_0x5f4509=_0x122beb(_0x8d5b('0x39'))(_0x63565);_0x63565['html']=_0x8d5b('0x2c');_0x63565[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')](_0x8d5b('0x2c'));_0x63565['html']=_0x8d5b('0x3d');_0x63565[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')](_0x8d5b('0x3d'));}));it(_0x8d5b('0x1d'),inject(function(_0x1895b6,_0x176508){_0x5f4509=_0x176508(_0x8d5b('0x3e'))(_0x1895b6);_0x1895b6[_0x8d5b('0x3c')]='<div\x20onclick=\x22\x22>hello</div>';expect(_0x1895b6[_0x8d5b('0x1f')]['length'])['toEqual'](0x1);_0x1895b6[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())['toEqual'](_0x8d5b('0x2c'));expect(_0x1895b6[_0x8d5b('0x1f')]['length'])['toEqual'](0x0);_0x1895b6['html']=_0x8d5b('0x3a');_0x1895b6[_0x8d5b('0x9')]();expect(_0x5f4509[_0x8d5b('0x3')]())[_0x8d5b('0x4')](_0x8d5b('0x2c'));}));});describe(_0x8d5b('0x3f'),function(){it(_0x8d5b('0x40'),inject(function(_0x2cae2e,_0x402765){_0x5f4509=_0x402765(_0x8d5b('0x39'))(_0x2cae2e);_0x2cae2e['html']=_0x8d5b('0x3a');expect(function(){_0x2cae2e['$digest']();})[_0x8d5b('0x41')]();}));it(_0x8d5b('0x42'),inject(function(_0x5d564d,_0x457886,_0x493d23){_0x5f4509=_0x457886(_0x8d5b('0x39'))(_0x5d564d);_0x5d564d['html']=_0x493d23['trustAsCss'](_0x8d5b('0x3a'));expect(function(){_0x5d564d[_0x8d5b('0x9')]();})['toThrow']();}));it('should\x20set\x20html\x20for\x20trusted\x20values',inject(function(_0x49bb3f,_0x3e574e,_0x53eb38){_0x5f4509=_0x3e574e('<div\x20ng-bind-html=\x22html\x22></div>')(_0x49bb3f);_0x49bb3f[_0x8d5b('0x3c')]=_0x53eb38[_0x8d5b('0x43')](_0x8d5b('0x3a'));_0x49bb3f[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509['html']()))[_0x8d5b('0x4')]('<div\x20onclick=\x22\x22>hello</div>');}));it(_0x8d5b('0x3b'),inject(function(_0x7f2d89,_0x82f990,_0x6b4277){_0x5f4509=_0x82f990(_0x8d5b('0x39'))(_0x7f2d89);_0x7f2d89[_0x8d5b('0x3c')]=_0x6b4277['trustAsHtml'](_0x8d5b('0x2c'));_0x7f2d89[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))['toEqual'](_0x8d5b('0x2c'));_0x7f2d89[_0x8d5b('0x3c')]=_0x6b4277['trustAsHtml'](_0x8d5b('0x3d'));_0x7f2d89['$digest']();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')]('goodbye');}));it('should\x20not\x20cause\x20infinite\x20recursion\x20for\x20trustAsHtml\x20object\x20watches',inject(function(_0x21a54f,_0x2a6c5b,_0x560f54){_0x5f4509=_0x2a6c5b(_0x8d5b('0x44'))(_0x21a54f);_0x21a54f['getHtml']=function(){return _0x560f54[_0x8d5b('0x43')]('<div\x20onclick=\x22\x22>hello</div>');};_0x21a54f['$digest']();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')](_0x8d5b('0x3a'));}));it(_0x8d5b('0x45'),function(){function _0xac859d(_0x2e0122){this[_0x8d5b('0x46')]=_0x2e0122;}module(function(_0x8cf13a){_0x8cf13a[_0x8d5b('0x47')](_0x8d5b('0x48'),function(_0x414ac7){_0x414ac7[_0x8d5b('0x43')]=function(_0x4b9970){return new _0xac859d(_0x4b9970);};_0x414ac7[_0x8d5b('0x49')]=function(_0x2d6234){return _0x2d6234['val'];};_0x414ac7[_0x8d5b('0x4a')]=function(_0x1a0f36){return _0x1a0f36 instanceof _0xac859d?_0x1a0f36[_0x8d5b('0x46')]:_0x1a0f36;};return _0x414ac7;});});inject(function(_0x1cb9f2,_0x85c7b8,_0x4f742c){_0x5f4509=_0x85c7b8(_0x8d5b('0x44'))(_0x1cb9f2);var _0x30f825=_0x8d5b('0x2c');_0x1cb9f2['getHtml']=function(){return _0x4f742c[_0x8d5b('0x43')](_0x30f825);};_0x1cb9f2[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')](_0x8d5b('0x2c'));_0x30f825=_0x8d5b('0x3d');_0x1cb9f2[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')]('goodbye');});});describe(_0x8d5b('0x4b'),function(){beforeEach(function(){module(_0x8d5b('0x4c'));});it(_0x8d5b('0x4d'),inject(function(_0x16141d,_0x3054fc){_0x5f4509=_0x3054fc(_0x8d5b('0x39'))(_0x16141d);_0x16141d[_0x8d5b('0x3c')]=_0x8d5b('0x3a');_0x16141d[_0x8d5b('0x9')]();expect(lowercase(_0x5f4509[_0x8d5b('0x3c')]()))[_0x8d5b('0x4')](_0x8d5b('0x4e'));}));});});});});