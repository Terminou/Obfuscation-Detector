var _0x5ac4=['class','temp-class-name','toMatch','should\x20perform\x20the\x20DOM\x20operation\x20at\x20the\x20end\x20of\x20the\x20animation\x20if\x20the\x20driver\x20doesn\x27t\x20run\x20it\x20already','should\x20still\x20apply\x20the\x20`from`\x20and\x20`to`\x20styling\x20even\x20if\x20no\x20driver\x20was\x20detected','css','toContain','dumbDriver','four','100px','height','font-size','50px','should\x20still\x20resolve\x20the\x20`addClass`\x20and\x20`removeClass`\x20classes\x20even\x20if\x20no\x20driver\x20was\x20detected','one\x20two\x20three','one','three','should\x20still\x20resolve\x20the\x20`addClass`\x20and\x20`removeClass`\x20classes\x20even\x20if\x20the\x20driver\x20does\x20not\x20do\x20the\x20job','two','$$animation','ngAnimate','ngAnimateMock','length','should\x20not\x20run\x20an\x20animation\x20if\x20there\x20are\x20no\x20drivers','<div></div>','someEvent','then','flush','$digest','should\x20not\x20run\x20an\x20animation\x20if\x20no\x20drivers\x20return\x20an\x20animation\x20step\x20function','drivers','push','matiasDriver','value','append','toBe','should\x20use\x20the\x20first\x20driver\x20that\x20returns\x20a\x20step\x20function','enter','stepper','foo','bar','megaEvent','element','event','options','should\x20obtain\x20the\x20classes\x20string\x20which\x20is\x20a\x20combination\x20of\x20className,\x20addClass\x20and\x20removeClass','addClass','blue\x20red','green','orange','pink','classes','blue\x20red\x20green\x20orange\x20pink','first','second','toEqual','should\x20$prop\x20the\x20animation\x20call\x20if\x20the\x20driver\x20$proped\x20the\x20returned\x20promise','reject','resolvingAnimation','factory','resolve','cancel','should\x20$prop\x20the\x20driver\x20animation\x20when\x20runner.$prop()\x20is\x20called','actualDriver','end','start','when','interceptorDriver','blue','red','should\x20return\x20a\x20runner\x20that\x20object\x20that\x20contains\x20a\x20$prop()\x20function','should\x20close\x20the\x20animation\x20if\x20runner.$prop()\x20is\x20called\x20before\x20the\x20$postDigest\x20phase\x20kicks\x20in','should\x20update\x20the\x20runner\x20methods\x20to\x20the\x20ones\x20provided\x20by\x20the\x20driver\x20when\x20the\x20animation\x20starts','animalDriver','otherEvent','toHaveBeenCalled','should\x20not\x20start\x20the\x20animation\x20if\x20the\x20element\x20is\x20removed\x20from\x20the\x20DOM\x20before\x20the\x20postDigest\x20kicks\x20in','toBeFalsy','remove','toBeTruthy','should\x20not\x20end\x20the\x20animation\x20when\x20the\x20leave\x20animation\x20removes\x20the\x20element\x20from\x20the\x20DOM','leave','should\x20remove\x20the\x20$destroy\x20event\x20listener\x20when\x20the\x20animation\x20is\x20closed','and','off','callThrough','calls','mostRecent','$destroy','args','should\x20always\x20sort\x20parent-element\x20animations\x20to\x20run\x20in\x20order\x20of\x20parent-to-child\x20DOM\x20structure','should\x20only\x20apply\x20the\x20ng-$prop-prepare\x20class\x20if\x20there\x20are\x20a\x20child\x20animations','move','ng-','-prepare','not','toHaveClass','should\x20remove\x20the\x20preparation\x20class\x20before\x20the\x20$prop-animation\x20starts','grouped','<div>1</div>','<div>2</div>','<div>3</div>','<div>a</div>','<div>c</div>','should\x20group\x20animations\x20together\x20when\x20they\x20have\x20shared\x20anchors\x20and\x20a\x20shared\x20CSS\x20class','shared-class','ng-animate-ref','attr','out','should\x20group\x20animations\x20together\x20and\x20properly\x20match\x20up\x20multiple\x20anchors\x20based\x20on\x20their\x20references','anchors','should\x20group\x20animations\x20together\x20on\x20the\x20from\x20and\x20to\x20elements\x20if\x20their\x20both\x20contain\x20matching\x20anchors','should\x20not\x20group\x20animations\x20into\x20an\x20anchored\x20animation\x20if\x20enter/leave\x20events\x20are\x20NOT\x20used','removeClass','should\x20not\x20group\x20animations\x20together\x20if\x20a\x20matching\x20pair\x20of\x20anchors\x20is\x20not\x20detected','should\x20not\x20group\x20animations\x20together\x20if\x20a\x20matching\x20CSS\x20class\x20is\x20not\x20detected','even-class','odd-class','should\x20expose\x20the\x20shared\x20CSS\x20class\x20in\x20the\x20options\x20provided\x20to\x20the\x20driver','fresh-class','should\x20update\x20the\x20runner\x20methods\x20to\x20the\x20grouped\x20runner\x20methods\x20handled\x20by\x20the\x20driver','group-1','abc','should\x20end\x20the\x20animation\x20if\x20the\x20$prop\x20element\x20is\x20prematurely\x20removed\x20from\x20the\x20DOM\x20during\x20the\x20animation','from','should\x20not\x20end\x20the\x20animation\x20when\x20the\x20`from`\x20animation\x20calls\x20its\x20own\x20leave\x20dom\x20operation','should\x20not\x20end\x20the\x20animation\x20if\x20any\x20of\x20the\x20anchor\x20elements\x20are\x20removed\x20from\x20the\x20DOM\x20during\x20the\x20animation','should\x20prepare\x20a\x20parent-element\x20animation\x20to\x20run\x20first\x20before\x20the\x20anchored\x20animation','[options]','mockedTestDriver','body','should\x20temporarily\x20assign\x20the\x20provided\x20CSS\x20class\x20for\x20the\x20duration\x20of\x20the\x20animation','temporary\x20fudge','temporary','should\x20add\x20and\x20remove\x20the\x20ng-animate\x20CSS\x20class\x20when\x20the\x20animation\x20is\x20active','ng-animate'];(function(_0x1e94a5,_0x2b68bc){var _0xc9e2bc=function(_0x26f4d7){while(--_0x26f4d7){_0x1e94a5['push'](_0x1e94a5['shift']());}};_0xc9e2bc(++_0x2b68bc);}(_0x5ac4,0x123));var _0x676e=function(_0x49970a,_0x8211a8){_0x49970a=_0x49970a-0x0;var _0x2b5aa5=_0x5ac4[_0x49970a];return _0x2b5aa5;};'use strict';describe(_0x676e('0x0'),function(){beforeEach(module(_0x676e('0x1')));beforeEach(module(_0x676e('0x2')));var _0x13be4f;afterEach(function(){dealoc(_0x13be4f);});beforeEach(module(function(_0x346fa8){_0x346fa8['drivers'][_0x676e('0x3')]=0x0;}));it(_0x676e('0x4'),inject(function(_0x5c37b8,_0x2dfa32,_0x4a3ea6){_0x13be4f=jqLite(_0x676e('0x5'));var _0x38edc8=![];_0x5c37b8(_0x13be4f,_0x676e('0x6'))[_0x676e('0x7')](function(){_0x38edc8=!![];});_0x2dfa32[_0x676e('0x8')]();_0x4a3ea6[_0x676e('0x9')]();expect(_0x38edc8)['toBe'](!![]);}));it(_0x676e('0xa'),function(){module(function(_0xea4214,_0x29f761){_0xea4214[_0x676e('0xb')][_0x676e('0xc')](_0x676e('0xd'));_0x29f761[_0x676e('0xe')](_0x676e('0xd'),function(){return![];});});inject(function(_0x4c55d9,_0x7d9e07,_0x334415){_0x13be4f=jqLite(_0x676e('0x5'));var _0x4f8aa9=jqLite(_0x676e('0x5'));_0x4f8aa9[_0x676e('0xf')](_0x13be4f);var _0x5003c9=![];_0x4c55d9(_0x13be4f,_0x676e('0x6'))[_0x676e('0x7')](function(){_0x5003c9=!![];});_0x334415['$digest']();_0x7d9e07['flush']();_0x334415[_0x676e('0x9')]();expect(_0x5003c9)[_0x676e('0x10')](!![]);});});describe('drivers',function(){it(_0x676e('0x11'),function(){var _0xf3ceb1=0x0;var _0x98ed8b;module(function(_0x43b895,_0x3fa4cb){_0x43b895[_0x676e('0xb')][_0x676e('0xc')]('1');_0x43b895['drivers']['push']('2');_0x43b895['drivers'][_0x676e('0xc')]('3');var _0x2addb6;_0x3fa4cb[_0x676e('0xe')]('1',function(){_0xf3ceb1++;});_0x3fa4cb[_0x676e('0xe')]('2',function(){_0xf3ceb1++;return{'start':function(){_0x98ed8b='2';return _0x2addb6;}};});_0x3fa4cb[_0x676e('0xe')]('3',function(){_0xf3ceb1++;});return function(_0x5b67fc){_0x2addb6=new _0x5b67fc();};});inject(function(_0x38cbc1,_0x4d74de,_0x5add7a){_0x13be4f=jqLite(_0x676e('0x5'));_0x5add7a[_0x676e('0xf')](_0x13be4f);_0x38cbc1(_0x13be4f,_0x676e('0x12'));_0x4d74de[_0x676e('0x9')]();expect(_0xf3ceb1)['toBe'](0x2);expect(_0x98ed8b)[_0x676e('0x10')]('2');});});describe('step\x20function',function(){var _0xdd71f1;beforeEach(module(function(_0x1d94b5,_0x323d92){_0x13be4f=jqLite(_0x676e('0x5'));_0x1d94b5[_0x676e('0xb')][_0x676e('0xc')]('stepper');_0x323d92['factory'](_0x676e('0x13'),function(_0x117097){return function(){_0xdd71f1=arguments;return{'start':function(){return new _0x117097();}};};});}));it('should\x20obtain\x20the\x20element,\x20event,\x20the\x20provided\x20options\x20and\x20the\x20domOperation',inject(function(_0x3c9692,_0x3f43f6,_0x31aef7){_0x31aef7[_0x676e('0xf')](_0x13be4f);var _0x5eb10e={};_0x5eb10e[_0x676e('0x14')]=_0x676e('0x15');_0x5eb10e['domOperation']=function(){_0x1a0516=!![];};var _0x1a0516=![];_0x3c9692(_0x13be4f,_0x676e('0x16'),_0x5eb10e);_0x3f43f6[_0x676e('0x9')]();var _0x53cd8e=_0xdd71f1[0x0];expect(_0x53cd8e[_0x676e('0x17')])[_0x676e('0x10')](_0x13be4f);expect(_0x53cd8e[_0x676e('0x18')])[_0x676e('0x10')](_0x676e('0x16'));expect(_0x53cd8e[_0x676e('0x19')][_0x676e('0x14')])[_0x676e('0x10')](_0x5eb10e[_0x676e('0x14')]);expect(_0x1a0516)[_0x676e('0x10')](![]);_0x53cd8e['options']['domOperation']();expect(_0x1a0516)[_0x676e('0x10')](!![]);}));it(_0x676e('0x1a'),inject(function(_0x1f9506,_0x56a895,_0x4c52f6){_0x13be4f[_0x676e('0x1b')](_0x676e('0x1c'));_0x4c52f6['append'](_0x13be4f);_0x1f9506(_0x13be4f,_0x676e('0x12'),{'addClass':_0x676e('0x1d'),'removeClass':_0x676e('0x1e'),'tempClasses':_0x676e('0x1f')});_0x56a895[_0x676e('0x9')]();var _0x580430=_0xdd71f1[0x0][_0x676e('0x20')];expect(_0x580430)[_0x676e('0x10')](_0x676e('0x21'));}));});it('should\x20traverse\x20the\x20drivers\x20in\x20reverse\x20order',function(){var _0x5a83e9=[];module(function(_0x3a21d2,_0x5caf17){_0x3a21d2[_0x676e('0xb')][_0x676e('0xc')](_0x676e('0x22'));_0x3a21d2[_0x676e('0xb')][_0x676e('0xc')](_0x676e('0x23'));_0x5caf17[_0x676e('0xe')]('first',function(){_0x5a83e9[_0x676e('0xc')](_0x676e('0x22'));return![];});_0x5caf17['value'](_0x676e('0x23'),function(){_0x5a83e9[_0x676e('0xc')](_0x676e('0x23'));return![];});});inject(function(_0x29d86,_0x517eb3,_0x4056c1){_0x13be4f=jqLite(_0x676e('0x5'));_0x4056c1[_0x676e('0xf')](_0x13be4f);_0x29d86(_0x13be4f,'enter');_0x517eb3[_0x676e('0x9')]();expect(_0x5a83e9)[_0x676e('0x24')]([_0x676e('0x23'),'first']);});});they(_0x676e('0x25'),['resolve',_0x676e('0x26')],function(_0x1d64a5){module(function(_0x5e4edd,_0x67bf9d){_0x5e4edd['drivers'][_0x676e('0xc')](_0x676e('0x27'));_0x67bf9d[_0x676e('0x28')](_0x676e('0x27'),function(_0xe1b00){return function(){return{'start':function(){return new _0xe1b00();}};};});});inject(function(_0x248da8,_0x3b142d,_0x3e93bf){var _0x9989bb;var _0x13be4f=jqLite(_0x676e('0x5'));var _0x664227=jqLite(_0x676e('0x5'));_0x664227[_0x676e('0xf')](_0x13be4f);var _0xa78002=_0x248da8(_0x13be4f,_0x676e('0x12'));_0xa78002[_0x676e('0x7')](function(){_0x9989bb=_0x676e('0x29');},function(){_0x9989bb=_0x676e('0x26');});_0x3b142d['$digest']();if(_0x1d64a5===_0x676e('0x29')){_0xa78002['end']();}else{_0xa78002[_0x676e('0x2a')]();}_0x3e93bf[_0x676e('0x8')]();_0x3b142d[_0x676e('0x9')]();expect(_0x9989bb)['toBe'](_0x1d64a5);});});they(_0x676e('0x2b'),[_0x676e('0x2a'),'end'],function(_0x4da682){var _0x175338=[];module(function(_0x40424e,_0x1af97d){_0x40424e[_0x676e('0xb')]['push'](_0x676e('0x2c'));_0x1af97d[_0x676e('0x28')]('actualDriver',function(_0x2328ff){return function(){return{'start':function(){_0x175338[_0x676e('0xc')]('start');return new _0x2328ff({'end':function(){_0x175338[_0x676e('0xc')](_0x676e('0x2d'));},'cancel':function(){_0x175338[_0x676e('0xc')](_0x676e('0x2a'));}});}};};});});inject(function(_0x53ca6c,_0x38f0db,_0x26516e){_0x13be4f=jqLite('<div></div>');_0x26516e[_0x676e('0xf')](_0x13be4f);var _0x540a80=_0x53ca6c(_0x13be4f,'enter');_0x38f0db[_0x676e('0x9')]();_0x540a80[_0x4da682]();expect(_0x175338)[_0x676e('0x24')]([_0x676e('0x2e'),_0x4da682]);});});});describe(_0x676e('0x2f'),function(){var _0x51988c;var _0x4281b8;var _0x48e0cf;beforeEach(module(function(_0x21c479,_0x6a98f8){_0x51988c=[];_0x4281b8=[];_0x48e0cf=null;_0x21c479[_0x676e('0xb')]['push']('interceptorDriver');_0x6a98f8['factory'](_0x676e('0x30'),function(_0x115d02){return function(_0x5b3910){_0x51988c[_0x676e('0xc')](_0x48e0cf=_0x5b3910);return{'start':function(){return new _0x115d02({'end':_0x51c645(_0x676e('0x2d')),'cancel':_0x51c645(_0x676e('0x2a'))});}};};});function _0x51c645(_0x6e000d){return function(){_0x4281b8['push'](_0x6e000d);};}}));describe('singular',function(){beforeEach(module(function(_0x117439){_0x13be4f=jqLite(_0x676e('0x5'));return function(_0x504e1b){_0x504e1b['append'](_0x13be4f);};}));it('should\x20space\x20out\x20multiple\x20ancestorial\x20class-based\x20animations\x20with\x20a\x20RAF\x20in\x20between',inject(function(_0x59447f,_0x42f952,_0x5f202e){var _0x335272=_0x13be4f;_0x13be4f=jqLite('<div></div>');_0x335272[_0x676e('0xf')](_0x13be4f);var _0x1630ab=jqLite(_0x676e('0x5'));_0x13be4f['append'](_0x1630ab);_0x42f952(_0x335272,_0x676e('0x1b'),{'addClass':_0x676e('0x31')});_0x42f952(_0x13be4f,'addClass',{'addClass':_0x676e('0x32')});_0x42f952(_0x1630ab,'addClass',{'addClass':_0x676e('0x1d')});_0x59447f[_0x676e('0x9')]();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x1);expect(_0x48e0cf[_0x676e('0x19')][_0x676e('0x1b')])[_0x676e('0x10')](_0x676e('0x31'));_0x5f202e['flush']();expect(_0x51988c[_0x676e('0x3')])['toBe'](0x2);expect(_0x48e0cf[_0x676e('0x19')][_0x676e('0x1b')])[_0x676e('0x10')](_0x676e('0x32'));_0x5f202e['flush']();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x3);expect(_0x48e0cf[_0x676e('0x19')]['addClass'])[_0x676e('0x10')](_0x676e('0x1d'));}));it('should\x20properly\x20cancel\x20out\x20pending\x20animations\x20that\x20are\x20spaced\x20with\x20a\x20RAF\x20request\x20before\x20the\x20digest\x20completes',inject(function(_0x3a33b6,_0x4f05c0,_0x2fa49c){var _0x113367=_0x13be4f;_0x13be4f=jqLite(_0x676e('0x5'));_0x113367[_0x676e('0xf')](_0x13be4f);var _0x3aa0f0=jqLite(_0x676e('0x5'));_0x13be4f[_0x676e('0xf')](_0x3aa0f0);var _0x330f5f=_0x4f05c0(_0x113367,'addClass',{'addClass':_0x676e('0x31')});var _0x11f76a=_0x4f05c0(_0x13be4f,_0x676e('0x1b'),{'addClass':'red'});var _0x36ae58=_0x4f05c0(_0x3aa0f0,_0x676e('0x1b'),{'addClass':'green'});_0x11f76a[_0x676e('0x2d')]();_0x3a33b6[_0x676e('0x9')]();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x1);expect(_0x48e0cf[_0x676e('0x19')][_0x676e('0x1b')])[_0x676e('0x10')](_0x676e('0x31'));_0x2fa49c[_0x676e('0x8')]();expect(_0x51988c[_0x676e('0x3')])['toBe'](0x2);expect(_0x48e0cf[_0x676e('0x19')][_0x676e('0x1b')])[_0x676e('0x10')](_0x676e('0x1d'));}));it('should\x20properly\x20cancel\x20out\x20pending\x20animations\x20that\x20are\x20spaced\x20with\x20a\x20RAF\x20request\x20after\x20the\x20digest\x20completes',inject(function(_0x2677c7,_0x50846f,_0x21e6ac){var _0x17602b=_0x13be4f;_0x13be4f=jqLite(_0x676e('0x5'));_0x17602b['append'](_0x13be4f);var _0x44d634=jqLite(_0x676e('0x5'));_0x13be4f[_0x676e('0xf')](_0x44d634);var _0x33c0d5=_0x50846f(_0x17602b,_0x676e('0x1b'),{'addClass':_0x676e('0x31')});var _0x284f41=_0x50846f(_0x13be4f,'addClass',{'addClass':_0x676e('0x32')});var _0x25906e=_0x50846f(_0x44d634,_0x676e('0x1b'),{'addClass':_0x676e('0x1d')});_0x2677c7[_0x676e('0x9')]();_0x284f41['end']();expect(_0x51988c['length'])[_0x676e('0x10')](0x1);expect(_0x48e0cf[_0x676e('0x19')]['addClass'])[_0x676e('0x10')]('blue');_0x21e6ac[_0x676e('0x8')]();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x1);_0x21e6ac[_0x676e('0x8')]();expect(_0x51988c[_0x676e('0x3')])['toBe'](0x2);expect(_0x48e0cf['options'][_0x676e('0x1b')])[_0x676e('0x10')]('green');}));they(_0x676e('0x33'),[_0x676e('0x2d'),_0x676e('0x2a'),_0x676e('0x7')],function(_0x393226){inject(function(_0xa89f45){var _0x3f7d1b=_0xa89f45(_0x13be4f,_0x676e('0x6'));expect(isFunction(_0x3f7d1b[_0x393226]))[_0x676e('0x10')](!![]);});});they(_0x676e('0x34'),[_0x676e('0x2d'),_0x676e('0x2a')],function(_0x40a7e9){inject(function(_0x108917,_0x304df6,_0x2ddfa3){var _0x1e6b01;var _0x487592=_0x108917(_0x13be4f,_0x676e('0x6'));_0x487592[_0x676e('0x7')](function(){_0x1e6b01=_0x676e('0x2d');},function(){_0x1e6b01=_0x676e('0x2a');});_0x487592[_0x40a7e9]();_0x304df6[_0x676e('0x9')]();expect(_0x4281b8)[_0x676e('0x24')]([]);_0x2ddfa3[_0x676e('0x8')]();expect(_0x1e6b01)['toBe'](_0x40a7e9);});});they(_0x676e('0x35'),[_0x676e('0x2d'),_0x676e('0x2a')],function(_0x8458ec){var _0x506adf=jasmine['createSpy']();module(function(_0x1c7cd0,_0xac09a6){_0x1c7cd0[_0x676e('0xb')][_0x676e('0xc')]('animalDriver');_0xac09a6['factory'](_0x676e('0x36'),function(_0x41dd3e){return function(){return{'start':function(){var _0x47d218={};_0x47d218[_0x8458ec]=_0x506adf;return new _0x41dd3e(_0x47d218);}};};});});inject(function(_0x3c1edc,_0x33652a,_0x16a4e8){var _0x138db1=_0x3c1edc(_0x13be4f,'someEvent');_0x138db1[_0x8458ec]();expect(_0x506adf)['not']['toHaveBeenCalled']();_0x33652a[_0x676e('0x9')]();var _0x2a780f=_0x3c1edc(_0x13be4f,_0x676e('0x37'));_0x33652a['$digest']();_0x2a780f[_0x8458ec]();expect(_0x506adf)[_0x676e('0x38')]();});});it(_0x676e('0x39'),inject(function(_0xe347f2){var _0x5b5fde=_0xe347f2(_0x13be4f,_0x676e('0x6'));expect(_0x48e0cf)[_0x676e('0x3a')]();_0x13be4f[_0x676e('0x3b')]();expect(_0x48e0cf)['toBeFalsy']();}));it('should\x20immediately\x20end\x20the\x20animation\x20if\x20the\x20element\x20is\x20removed\x20from\x20the\x20DOM\x20during\x20the\x20animation',inject(function(_0x7534bb,_0x38d84a,_0xfa8adf){var _0x37ed3a=_0x7534bb(_0x13be4f,_0x676e('0x6'));_0xfa8adf[_0x676e('0x9')]();expect(_0x48e0cf)[_0x676e('0x3c')]();expect(_0x4281b8)[_0x676e('0x24')]([]);_0x13be4f['remove']();expect(_0x4281b8)[_0x676e('0x24')]([_0x676e('0x2d')]);}));it(_0x676e('0x3d'),inject(function(_0xb63238,_0x161eaa,_0x2d275e){var _0x534b11=_0xb63238(_0x13be4f,_0x676e('0x3e'),{},function(){_0x13be4f[_0x676e('0x3b')]();});_0x2d275e[_0x676e('0x9')]();expect(_0x4281b8)['toEqual']([]);_0x48e0cf[_0x676e('0x19')]['domOperation']();_0x13be4f['remove']();expect(_0x4281b8)[_0x676e('0x24')]([]);}));it(_0x676e('0x3f'),inject(function(_0x50df72,_0x3369b8){var _0x45c03f=spyOn(_0x13be4f,'on')[_0x676e('0x40')]['callThrough']();var _0x65d593=spyOn(_0x13be4f,_0x676e('0x41'))[_0x676e('0x40')][_0x676e('0x42')]();var _0x2d4f98=_0x50df72(_0x13be4f,'someEvent');var _0x3b664f=_0x45c03f[_0x676e('0x43')][_0x676e('0x44')]()['args'][0x0];expect(_0x3b664f)[_0x676e('0x10')](_0x676e('0x45'));_0x2d4f98[_0x676e('0x2d')]();_0x3b664f=_0x65d593[_0x676e('0x43')][_0x676e('0x44')]()[_0x676e('0x46')][0x0];expect(_0x3b664f)[_0x676e('0x10')]('$destroy');}));it(_0x676e('0x47'),inject(function(_0x90908a,_0x17ec91,_0x89bb9d){var _0x21ac2d=jqLite(_0x676e('0x5'));var _0x864e6e=jqLite(_0x676e('0x5'));_0x13be4f[_0x676e('0xf')](_0x21ac2d);_0x21ac2d[_0x676e('0xf')](_0x864e6e);_0x90908a(_0x864e6e,_0x676e('0x12'));_0x90908a(_0x21ac2d,_0x676e('0x12'));_0x90908a(_0x13be4f,_0x676e('0x12'));expect(_0x51988c[_0x676e('0x3')])['toBe'](0x0);_0x17ec91[_0x676e('0x9')]();_0x89bb9d[_0x676e('0x8')]();expect(_0x51988c[0x0][_0x676e('0x17')])[_0x676e('0x10')](_0x13be4f);expect(_0x51988c[0x1][_0x676e('0x17')])[_0x676e('0x10')](_0x21ac2d);expect(_0x51988c[0x2][_0x676e('0x17')])[_0x676e('0x10')](_0x864e6e);}));they(_0x676e('0x48'),['enter',_0x676e('0x3e'),_0x676e('0x49')],function(_0x6972f4){inject(function(_0x467869,_0x46580c,_0x53a08b){var _0x1710af=_0x676e('0x4a')+_0x6972f4+_0x676e('0x4b');_0x467869(_0x13be4f,_0x6972f4);_0x46580c[_0x676e('0x9')]();expect(_0x13be4f)[_0x676e('0x4c')][_0x676e('0x4d')](_0x1710af);var _0x190335=jqLite(_0x676e('0x5'));_0x13be4f[_0x676e('0xf')](_0x190335);_0x467869(_0x13be4f,_0x6972f4);_0x467869(_0x190335,_0x6972f4);_0x46580c[_0x676e('0x9')]();expect(_0x13be4f)['not'][_0x676e('0x4d')](_0x1710af);expect(_0x190335)[_0x676e('0x4d')](_0x1710af);});});they(_0x676e('0x4e'),[_0x676e('0x12'),_0x676e('0x3e'),_0x676e('0x49')],function(_0x3a66ec){inject(function(_0x5864ec,_0x16ac41,_0x517ff3){var _0x12d075=_0x676e('0x4a')+_0x3a66ec+_0x676e('0x4b');var _0x3fe74b=jqLite('<div></div>');_0x13be4f['append'](_0x3fe74b);_0x5864ec(_0x13be4f,_0x3a66ec);_0x5864ec(_0x3fe74b,_0x3a66ec);_0x16ac41[_0x676e('0x9')]();expect(_0x13be4f)['not'][_0x676e('0x4d')](_0x12d075);expect(_0x3fe74b)[_0x676e('0x4d')](_0x12d075);_0x517ff3[_0x676e('0x8')]();expect(_0x13be4f)[_0x676e('0x4c')]['toHaveClass'](_0x12d075);expect(_0x3fe74b)[_0x676e('0x4c')][_0x676e('0x4d')](_0x12d075);});});});describe(_0x676e('0x4f'),function(){var _0x155a67;var _0x4b2f0f;var _0x968198;var _0x1ba820;beforeEach(module(function(_0x4bc798){_0x155a67=jqLite(_0x676e('0x5'));_0x4b2f0f=jqLite('<div></div>');_0x968198=[jqLite(_0x676e('0x50')),jqLite(_0x676e('0x51')),jqLite(_0x676e('0x52'))];_0x1ba820=[jqLite(_0x676e('0x53')),jqLite('<div>b</div>'),jqLite(_0x676e('0x54'))];return function(_0x4a8cb6){_0x4a8cb6['append'](_0x155a67);_0x4a8cb6[_0x676e('0xf')](_0x4b2f0f);forEach(_0x968198,function(_0x972593){_0x155a67[_0x676e('0xf')](_0x972593);});forEach(_0x1ba820,function(_0x36fa90){_0x4b2f0f[_0x676e('0xf')](_0x36fa90);});};}));it(_0x676e('0x55'),inject(function(_0x1f652a,_0x38f82d){_0x155a67[_0x676e('0x1b')](_0x676e('0x56'));_0x1f652a(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')]('shared-class');_0x1f652a(_0x4b2f0f,_0x676e('0x12'));_0x968198[0x0]['attr'](_0x676e('0x57'),'1');_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),'1');_0x38f82d[_0x676e('0x9')]();expect(_0x51988c['length'])[_0x676e('0x10')](0x1);var _0x3794a0=_0x48e0cf['from'];expect(_0x3794a0[_0x676e('0x17')])[_0x676e('0x24')](_0x155a67);expect(_0x3794a0[_0x676e('0x18')])[_0x676e('0x10')](_0x676e('0x3e'));var _0x26cc61=_0x48e0cf['to'];expect(_0x26cc61[_0x676e('0x17')])['toBe'](_0x4b2f0f);expect(_0x26cc61[_0x676e('0x18')])[_0x676e('0x10')](_0x676e('0x12'));var _0x201dd8=_0x968198[0x0];var _0x2e73ab=_0x1ba820[0x0];var _0x4c9fd0=_0x48e0cf['anchors'][0x0];assertCompareNodes(_0x201dd8,_0x4c9fd0[_0x676e('0x59')]);assertCompareNodes(_0x2e73ab,_0x4c9fd0['in']);}));it(_0x676e('0x5a'),inject(function(_0x8b454b,_0xe6e610){var _0x391203='ng-animate-ref';_0x968198[0x0][_0x676e('0x58')](_0x391203,'1');_0x968198[0x1][_0x676e('0x58')](_0x391203,'2');_0x968198[0x2]['attr'](_0x391203,'3');_0x1ba820[0x0][_0x676e('0x58')](_0x391203,'1');_0x1ba820[0x1][_0x676e('0x58')](_0x391203,'3');_0x1ba820[0x2][_0x676e('0x58')](_0x391203,'2');_0x155a67[_0x676e('0x1b')](_0x676e('0x56'));_0x8b454b(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x56'));_0x8b454b(_0x4b2f0f,_0x676e('0x12'));_0xe6e610[_0x676e('0x9')]();var _0x4fe9da=_0x48e0cf[_0x676e('0x5b')];assertCompareNodes(_0x968198[0x0],_0x4fe9da[0x0]['out']);assertCompareNodes(_0x1ba820[0x0],_0x4fe9da[0x0]['in']);assertCompareNodes(_0x968198[0x1],_0x4fe9da[0x1][_0x676e('0x59')]);assertCompareNodes(_0x1ba820[0x2],_0x4fe9da[0x1]['in']);assertCompareNodes(_0x968198[0x2],_0x4fe9da[0x2][_0x676e('0x59')]);assertCompareNodes(_0x1ba820[0x1],_0x4fe9da[0x2]['in']);}));it(_0x676e('0x5c'),inject(function(_0x5cd27a,_0x13c158){_0x155a67[_0x676e('0x1b')](_0x676e('0x56'));_0x155a67[_0x676e('0x58')](_0x676e('0x57'),'1');_0x5cd27a(_0x155a67,'leave');_0x4b2f0f[_0x676e('0x1b')]('shared-class');_0x4b2f0f['attr'](_0x676e('0x57'),'1');_0x5cd27a(_0x4b2f0f,_0x676e('0x12'));_0x13c158[_0x676e('0x9')]();var _0x410470=_0x48e0cf[_0x676e('0x5b')][0x0];assertCompareNodes(_0x155a67,_0x410470[_0x676e('0x59')]);assertCompareNodes(_0x4b2f0f,_0x410470['in']);}));it(_0x676e('0x5d'),inject(function(_0x12b8bf,_0x5164fc,_0x24bcdd){_0x155a67[_0x676e('0x1b')](_0x676e('0x56'));_0x155a67[_0x676e('0x58')](_0x676e('0x57'),'1');_0x12b8bf(_0x155a67,'addClass',{'addClass':_0x676e('0x32')});_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x56'));_0x4b2f0f[_0x676e('0x58')](_0x676e('0x57'),'1');_0x12b8bf(_0x4b2f0f,_0x676e('0x5e'),{'removeClass':'blue'});_0x5164fc[_0x676e('0x9')]();_0x24bcdd[_0x676e('0x8')]();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x2);}));it(_0x676e('0x5f'),inject(function(_0x10a3ac,_0xe2d6d){_0x155a67[_0x676e('0x1b')]('shared-class');_0x10a3ac(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x56'));_0x10a3ac(_0x4b2f0f,_0x676e('0x12'));_0x968198[0x0][_0x676e('0x58')](_0x676e('0x57'),'6');_0x1ba820[0x0]['attr'](_0x676e('0x57'),'3');_0xe2d6d['$digest']();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x2);}));it(_0x676e('0x60'),inject(function(_0x32a268,_0x1026cf){_0x155a67[_0x676e('0x1b')](_0x676e('0x61'));_0x32a268(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x62'));_0x32a268(_0x4b2f0f,'enter');_0x968198[0x0][_0x676e('0x58')](_0x676e('0x57'),'9');_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),'9');_0x1026cf[_0x676e('0x9')]();expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x2);}));it(_0x676e('0x63'),inject(function(_0x25f121,_0x16a843){_0x155a67['addClass'](_0x676e('0x64'));_0x25f121(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x64'));_0x25f121(_0x4b2f0f,'enter');_0x968198[0x0][_0x676e('0x58')]('ng-animate-ref','9');_0x1ba820[0x0]['attr']('ng-animate-ref','9');_0x16a843[_0x676e('0x9')]();expect(_0x48e0cf[_0x676e('0x20')])[_0x676e('0x10')](_0x676e('0x64'));}));it(_0x676e('0x65'),inject(function(_0x36372e,_0x6c18b0){_0x155a67[_0x676e('0x1b')](_0x676e('0x66'));var _0x5db9e5=_0x36372e(_0x155a67,_0x676e('0x3e'));_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x66'));var _0x55175a=_0x36372e(_0x4b2f0f,_0x676e('0x12'));expect(_0x5db9e5)[_0x676e('0x4c')][_0x676e('0x10')](_0x55175a);_0x968198[0x0][_0x676e('0x58')](_0x676e('0x57'),_0x676e('0x67'));_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),_0x676e('0x67'));_0x6c18b0[_0x676e('0x9')]();expect(_0x5db9e5)[_0x676e('0x4c')]['toBe'](_0x55175a);expect(_0x5db9e5['end'])['toBe'](_0x55175a[_0x676e('0x2d')]);expect(_0x5db9e5['cancel'])[_0x676e('0x10')](_0x55175a[_0x676e('0x2a')]);}));they(_0x676e('0x68'),[_0x676e('0x69'),'to'],function(_0x3f2b21){inject(function(_0x527d32,_0x51b991){_0x155a67[_0x676e('0x1b')](_0x676e('0x66'));_0x527d32(_0x155a67,_0x676e('0x3e'));_0x4b2f0f['addClass'](_0x676e('0x66'));_0x527d32(_0x4b2f0f,_0x676e('0x12'));_0x968198[0x0][_0x676e('0x58')](_0x676e('0x57'),'abc');_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),_0x676e('0x67'));_0x51b991[_0x676e('0x9')]();expect(_0x4281b8)['toEqual']([]);(_0x3f2b21==='from'?_0x155a67:_0x4b2f0f)['remove']();expect(_0x4281b8)['toEqual'](['end']);});});it(_0x676e('0x6a'),inject(function(_0x10198f,_0x146ccc){_0x155a67[_0x676e('0x1b')](_0x676e('0x66'));var _0x1f8473=![];_0x10198f(_0x155a67,'leave',{'domOperation':function(){_0x1f8473=!![];_0x155a67['remove']();}});_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x66'));_0x10198f(_0x4b2f0f,_0x676e('0x12'));_0x968198[0x0]['attr'](_0x676e('0x57'),'abc');_0x1ba820[0x0]['attr']('ng-animate-ref',_0x676e('0x67'));_0x146ccc[_0x676e('0x9')]();var _0x55b603=_0x48e0cf['from'];expect(_0x55b603[_0x676e('0x18')])[_0x676e('0x10')](_0x676e('0x3e'));_0x55b603[_0x676e('0x19')]['domOperation']();expect(_0x1f8473)[_0x676e('0x10')](!![]);expect(_0x4281b8)[_0x676e('0x24')]([]);}));it(_0x676e('0x6b'),inject(function(_0x17f384,_0x378876){_0x155a67['addClass'](_0x676e('0x66'));var _0x43f886=![];_0x17f384(_0x155a67,_0x676e('0x3e'),{},function(){_0x43f886=!![];_0x155a67['remove']();});_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x66'));_0x17f384(_0x4b2f0f,_0x676e('0x12'));_0x968198[0x0][_0x676e('0x58')](_0x676e('0x57'),_0x676e('0x67'));_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),_0x676e('0x67'));_0x378876[_0x676e('0x9')]();_0x968198[0x0][_0x676e('0x3b')]();_0x1ba820[0x0][_0x676e('0x3b')]();expect(_0x4281b8)[_0x676e('0x24')]([]);}));it(_0x676e('0x6c'),inject(function(_0x2601f0,_0x2e8063,_0x1d1b97,_0x566276){_0x968198[0x0][_0x676e('0x58')]('ng-animate-ref','shared');_0x1ba820[0x0][_0x676e('0x58')](_0x676e('0x57'),'shared');var _0x559187=jqLite(_0x676e('0x5'));_0x559187[_0x676e('0xf')](_0x155a67);_0x559187[_0x676e('0xf')](_0x4b2f0f);_0x1d1b97[_0x676e('0xf')](_0x559187);_0x155a67[_0x676e('0x1b')]('group-1');_0x4b2f0f[_0x676e('0x1b')](_0x676e('0x66'));_0x2601f0(_0x4b2f0f,_0x676e('0x12'));_0x2601f0(_0x155a67,'leave');_0x2601f0(_0x559187,_0x676e('0x1b'),{'addClass':'red'});expect(_0x51988c[_0x676e('0x3')])[_0x676e('0x10')](0x0);_0x2e8063[_0x676e('0x9')]();_0x566276[_0x676e('0x8')]();expect(_0x51988c[0x0]['element'])[_0x676e('0x10')](_0x559187);expect(_0x51988c[0x1]['from'][_0x676e('0x17')])[_0x676e('0x10')](_0x155a67);expect(_0x51988c[0x1]['to'][_0x676e('0x17')])[_0x676e('0x10')](_0x4b2f0f);}));});});describe(_0x676e('0x6d'),function(){var _0x3a23b9;var _0x58184c;var _0x40c643;var _0x31f119;var _0x4d925c;beforeEach(module(function(_0x517d6c,_0x11734b){_0x517d6c['drivers'][_0x676e('0xc')](_0x676e('0x6e'));_0x11734b['factory'](_0x676e('0x6e'),function(){return _0x31f119;});_0x13be4f=jqLite(_0x676e('0x5'));_0x40c643=jqLite(_0x676e('0x5'));return function(_0x1619b3,_0x334a99,_0x4b1a39){jqLite(_0x4b1a39[0x0][_0x676e('0x6f')])[_0x676e('0xf')](_0x334a99);_0x334a99[_0x676e('0xf')](_0x40c643);_0x31f119=function(_0x13be4f,_0x5d896a,_0x19d027,_0x2d57f5){return{'start':function(){_0x3a23b9=new _0x1619b3();return _0x3a23b9;}};};};}));it(_0x676e('0x70'),inject(function(_0x596ca2,_0x397847){_0x40c643[_0x676e('0xf')](_0x13be4f);_0x397847(_0x13be4f,_0x676e('0x12'),{'tempClasses':_0x676e('0x71')});_0x596ca2[_0x676e('0x9')]();expect(_0x13be4f)[_0x676e('0x4d')](_0x676e('0x72'));expect(_0x13be4f)[_0x676e('0x4d')]('fudge');_0x3a23b9['end']();_0x596ca2[_0x676e('0x9')]();expect(_0x13be4f)['not'][_0x676e('0x4d')](_0x676e('0x72'));expect(_0x13be4f)['not'][_0x676e('0x4d')]('fudge');}));it(_0x676e('0x73'),inject(function(_0x4fa61c,_0x369c49){_0x40c643[_0x676e('0xf')](_0x13be4f);_0x4fa61c(_0x13be4f,_0x676e('0x12'));_0x369c49[_0x676e('0x9')]();expect(_0x13be4f)[_0x676e('0x4d')](_0x676e('0x74'));_0x3a23b9[_0x676e('0x2d')]();_0x369c49[_0x676e('0x9')]();expect(_0x13be4f)['not'][_0x676e('0x4d')](_0x676e('0x74'));}));it('should\x20apply\x20the\x20`ng-animate`\x20and\x20temporary\x20CSS\x20classes\x20before\x20the\x20driver\x20is\x20invoked',function(){var _0x56f04c;_0x40c643[_0x676e('0xf')](_0x13be4f);module(function(_0x21f433){_0x21f433[_0x676e('0x28')](_0x676e('0x6e'),function(){return function(_0x1c4c98){_0x56f04c=_0x1c4c98[_0x676e('0x17')][_0x676e('0x58')](_0x676e('0x75'));};});});inject(function(_0x5d947c,_0x2bd137){_0x40c643[_0x676e('0xf')](_0x13be4f);_0x5d947c(_0x13be4f,_0x676e('0x12'),{'tempClasses':_0x676e('0x76')});_0x2bd137[_0x676e('0x9')]();expect(_0x56f04c)[_0x676e('0x77')](/\bng-animate\b/);expect(_0x56f04c)['toMatch'](/\btemp-class-name\b/);});});it(_0x676e('0x78'),inject(function(_0x470e82,_0x1afd65){_0x40c643[_0x676e('0xf')](_0x13be4f);var _0x49ae9a=![];_0x470e82(_0x13be4f,_0x676e('0x12'),{'domOperation':function(){_0x49ae9a=!![];}});_0x1afd65['$digest']();expect(_0x49ae9a)[_0x676e('0x3a')]();_0x3a23b9[_0x676e('0x2d')]();_0x1afd65[_0x676e('0x9')]();expect(_0x49ae9a)[_0x676e('0x3c')]();}));it(_0x676e('0x79'),function(){module(function(_0x55b6e0){_0x55b6e0[_0x676e('0xb')][_0x676e('0x3')]=0x0;});inject(function(_0x2263ba,_0x4aac2b){_0x2263ba(_0x13be4f,'event',{'from':{'background':'red'},'to':{'background':_0x676e('0x31')}});expect(_0x13be4f[_0x676e('0x7a')]('background'))[_0x676e('0x7b')](_0x676e('0x31'));});});it('should\x20still\x20apply\x20the\x20`from`\x20and\x20`to`\x20styling\x20even\x20if\x20the\x20driver\x20does\x20not\x20do\x20the\x20job',function(){module(function(_0x262260,_0x246de1){_0x262260[_0x676e('0xb')][0x0]=_0x676e('0x7c');_0x246de1[_0x676e('0x28')](_0x676e('0x7c'),function(_0x3e7306){return function stepFn(){return _0x3e7306[_0x676e('0x29')](!![]);};});});inject(function(_0x41abb2,_0x14f5cf,_0x949ac0){_0x13be4f['addClass'](_0x676e('0x7d'));_0x40c643[_0x676e('0xf')](_0x13be4f);var _0x5326b5=![];_0x41abb2(_0x13be4f,_0x676e('0x18'),{'from':{'height':_0x676e('0x7e')},'to':{'height':'200px','font-size':'50px'}})['then'](function(){_0x5326b5=!![];});_0x14f5cf[_0x676e('0x9')]();_0x14f5cf[_0x676e('0x9')]();_0x949ac0[_0x676e('0x8')]();_0x14f5cf[_0x676e('0x9')]();expect(_0x5326b5)[_0x676e('0x10')](!![]);expect(_0x13be4f[_0x676e('0x7a')](_0x676e('0x7f')))[_0x676e('0x7b')]('200px');expect(_0x13be4f['css'](_0x676e('0x80')))[_0x676e('0x10')](_0x676e('0x81'));});});it(_0x676e('0x82'),function(){module(function(_0x39f961){_0x39f961[_0x676e('0xb')][_0x676e('0x3')]=0x0;});inject(function(_0xd31605,_0xb1af5a){_0x13be4f['addClass'](_0x676e('0x7d'));_0xd31605(_0x13be4f,_0x676e('0x18'),{'addClass':_0x676e('0x83'),'removeClass':_0x676e('0x7d')});expect(_0x13be4f)['toHaveClass'](_0x676e('0x84'));expect(_0x13be4f)[_0x676e('0x4d')]('two');expect(_0x13be4f)[_0x676e('0x4d')](_0x676e('0x85'));expect(_0x13be4f)[_0x676e('0x4c')][_0x676e('0x4d')](_0x676e('0x7d'));});});it(_0x676e('0x86'),function(){module(function(_0x2e429c,_0xcc8f09){_0x2e429c[_0x676e('0xb')][0x0]=_0x676e('0x7c');_0xcc8f09[_0x676e('0x28')](_0x676e('0x7c'),function(_0x5f27e1){return function initFn(){return function stepFn(){return new _0x5f27e1();};};});});inject(function(_0x347d35,_0x27651a,_0x35add4){_0x40c643[_0x676e('0xf')](_0x13be4f);_0x13be4f['addClass']('four');var _0x156523=![];var _0x3a23b9=_0x347d35(_0x13be4f,'event',{'addClass':'one\x20two\x20three','removeClass':'four'});_0x3a23b9['then'](function(){_0x156523=!![];});_0x27651a['$digest']();_0x27651a[_0x676e('0x9')]();_0x3a23b9[_0x676e('0x2d')]();_0x35add4[_0x676e('0x8')]();_0x27651a[_0x676e('0x9')]();expect(_0x156523)[_0x676e('0x10')](!![]);expect(_0x13be4f)[_0x676e('0x4d')](_0x676e('0x84'));expect(_0x13be4f)['toHaveClass'](_0x676e('0x87'));expect(_0x13be4f)[_0x676e('0x4d')](_0x676e('0x85'));expect(_0x13be4f)['not'][_0x676e('0x4d')](_0x676e('0x7d'));});});});});