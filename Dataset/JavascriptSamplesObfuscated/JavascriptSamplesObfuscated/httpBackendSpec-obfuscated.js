var _0x5cb4=['should\x20abort\x20request\x20on\x20canceler\x20promise\x20resolution','promise','should\x20cancel\x20timeout\x20on\x20completion','length','should\x20set\x20withCredentials','/some.url','withCredentials','should\x20call\x20$xhrFactory\x20with\x20method\x20and\x20url','mockXhrFactory','toHaveBeenCalledWith','should\x20set\x20up\x20event\x20listeners','$$events','progress','responseType','should\x20set\x20responseType\x20and\x20return\x20xhr.response','/whatever','blob','object','should\x20read\x20responseText\x20if\x20response\x20was\x20not\x20defined','{\x22some\x22:\x20\x22object\x22}','JSONP','http://example.org/path?cb=JSON_CALLBACK','shift','src','match','http://example.org/path','load','should\x20clean\x20up\x20the\x20callback\x20and\x20remove\x20the\x20script','removeCallback','toHaveBeenCalledOnceWith','removeChild','should\x20set\x20url\x20to\x20current\x20location\x20if\x20not\x20specified\x20or\x20empty\x20string','url','should\x20abort\x20request\x20on\x20timeout\x20and\x20remove\x20JSONP\x20callback','callThrough','responseText','should\x20convert\x200\x20to\x20200\x20if\x20content\x20and\x20file\x20protocol','file:///whatever/index.html','calls','args','should\x20convert\x200\x20to\x20200\x20if\x20content\x20for\x20protocols\x20other\x20than\x20file','someProtocol:///whatever/index.html','SOME\x20CONTENT','mostRecent','should\x20convert\x200\x20to\x20404\x20if\x20no\x20content\x20and\x20file\x20protocol','should\x20not\x20convert\x200\x20to\x20404\x20if\x20no\x20content\x20for\x20protocols\x20other\x20than\x20file','#/C:/','file:///C:/base#!/C:/foo','/C:/foo','file:','noop','should\x20return\x20original\x20backend\x20status\x20code\x20if\x20different\x20from\x200','http://rest_api/create_whatever','file://rest_api/create_whatever','$httpBackend','createSpy','createElement','callFake','document','body.appendChild','and','$$scripts','indexOf','data','called','defer','done','GET','/some-url','some-data','$$lastInstance','$$method','toBe','$$url','$$data','$$async','should\x20pass\x20null\x20to\x20send\x20if\x20no\x20body\x20is\x20set','should\x20pass\x20the\x20correct\x20falsy\x20value\x20to\x20send\x20if\x20falsy\x20body\x20is\x20set\x20(excluding\x20undefined,\x20NaN)','should\x20pass\x20NaN\x20to\x20send\x20if\x20NaN\x20body\x20is\x20set','toEqual','should\x20call\x20completion\x20function\x20with\x20xhr.statusText\x20if\x20present','statusText','onload','should\x20call\x20completion\x20function\x20with\x20empty\x20string\x20if\x20not\x20present','toHaveBeenCalledOnce','URL','should\x20set\x20only\x20the\x20requested\x20headers','POST','value2','value1','should\x20set\x20requested\x20headers\x20even\x20if\x20they\x20have\x20falsy\x20values','$$reqHeaders','/url','abort','flush','status','onabort','timeout','not','toHaveBeenCalled','ontimeout','should\x20complete\x20the\x20request\x20on\x20abort','onerror','should\x20complete\x20the\x20request\x20on\x20success','response','complete','deferredFns','time','should\x20abort\x20request\x20on\x20$timeout\x20promise\x20resolution'];(function(_0x34a5c8,_0x1064aa){var _0x1c3642=function(_0x55a76c){while(--_0x55a76c){_0x34a5c8['push'](_0x34a5c8['shift']());}};_0x1c3642(++_0x1064aa);}(_0x5cb4,0x17d));var _0x3e62=function(_0x3d19c9,_0x447ae5){_0x3d19c9=_0x3d19c9-0x0;var _0x53bdb8=_0x5cb4[_0x3d19c9];return _0x53bdb8;};/* global createHttpBackend: false, createMockXhr: false, MockXhr: false */
'use strict';describe(_0x3e62('0x0'),function(){var _0x36f4d9,_0x2f6a3a,_0x1b186d,_0x20a91c,_0x37b4f2,_0x268699;beforeEach(inject(function(_0x3d9ec6){_0x2f6a3a=_0x3d9ec6['get']('$browser');_0x37b4f2={'$$scripts':[],'createElement':jasmine[_0x3e62('0x1')](_0x3e62('0x2'))['and'][_0x3e62('0x3')](function(){return window[_0x3e62('0x4')][_0x3e62('0x2')](arguments[0x0]);}),'body':{'appendChild':jasmine[_0x3e62('0x1')](_0x3e62('0x5'))[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x3fcee7){_0x37b4f2[_0x3e62('0x7')]['push'](_0x3fcee7);}),'removeChild':jasmine[_0x3e62('0x1')]('body.removeChild')[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x846fc3){var _0x51f07f=_0x37b4f2[_0x3e62('0x7')][_0x3e62('0x8')](_0x846fc3);if(_0x51f07f!==-0x1){_0x37b4f2[_0x3e62('0x7')]['splice'](_0x51f07f,0x1);}})}};_0x1b186d={'createCallback':function(_0x3a9579){_0x1b186d[_0x3a9579]=function(_0x29e5bb){_0x1b186d[_0x3a9579]['called']=!![];_0x1b186d[_0x3a9579][_0x3e62('0x9')]=_0x29e5bb;};return _0x3a9579;},'wasCalled':function(_0x4dc874){return _0x1b186d[_0x4dc874][_0x3e62('0xa')];},'getResponse':function(_0x33692c){return _0x1b186d[_0x33692c][_0x3e62('0x9')];},'removeCallback':function(_0x2ecddb){delete _0x1b186d[_0x2ecddb];}};_0x36f4d9=createHttpBackend(_0x2f6a3a,createMockXhr,_0x2f6a3a[_0x3e62('0xb')],_0x1b186d,_0x37b4f2);_0x268699=jasmine[_0x3e62('0x1')](_0x3e62('0xc'));}));it('should\x20do\x20basics\x20-\x20open\x20async\x20xhr\x20and\x20send\x20data',function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),_0x3e62('0xf'),noop);_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x20a91c[_0x3e62('0x11')])[_0x3e62('0x12')](_0x3e62('0xd'));expect(_0x20a91c[_0x3e62('0x13')])[_0x3e62('0x12')](_0x3e62('0xe'));expect(_0x20a91c[_0x3e62('0x14')])[_0x3e62('0x12')](_0x3e62('0xf'));expect(_0x20a91c[_0x3e62('0x15')])[_0x3e62('0x12')](!![]);});it(_0x3e62('0x16'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),undefined,noop);_0x20a91c=MockXhr['$$lastInstance'];expect(_0x20a91c['$$data'])[_0x3e62('0x12')](null);});it(_0x3e62('0x17'),function(){var _0x3909a7=[![],0x0,'',null];angular['forEach'](_0x3909a7,function(_0x2b7cb9){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),_0x2b7cb9,noop);_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x20a91c[_0x3e62('0x14')])[_0x3e62('0x12')](_0x2b7cb9);});});it(_0x3e62('0x18'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),NaN,noop);_0x20a91c=MockXhr[_0x3e62('0x10')];expect(isNaN(_0x20a91c['$$data']))[_0x3e62('0x19')](!![]);});it(_0x3e62('0x1a'),function(){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x55deae,_0x481cb6,_0x4e3a7e,_0x50c9d5){expect(_0x50c9d5)[_0x3e62('0x12')]('OK');});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),null,_0x268699);_0x20a91c=MockXhr[_0x3e62('0x10')];_0x20a91c[_0x3e62('0x1b')]='OK';_0x20a91c[_0x3e62('0x1c')]();expect(_0x268699)['toHaveBeenCalledOnce']();});it(_0x3e62('0x1d'),function(){_0x268699['and'][_0x3e62('0x3')](function(_0x2ea8a0,_0x427e6b,_0x23e512,_0x13c735){expect(_0x13c735)[_0x3e62('0x12')]('');});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0xe'),null,_0x268699);_0x20a91c=MockXhr['$$lastInstance'];_0x20a91c[_0x3e62('0x1c')]();expect(_0x268699)[_0x3e62('0x1e')]();});it('should\x20normalize\x20IE\x27s\x201223\x20status\x20code\x20into\x20204',function(){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x7d1b79){expect(_0x7d1b79)[_0x3e62('0x12')](0xcc);});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x1f'),null,_0x268699);_0x20a91c=MockXhr[_0x3e62('0x10')];_0x20a91c['status']=0x4c7;_0x20a91c['onload']();expect(_0x268699)['toHaveBeenCalledOnce']();});it(_0x3e62('0x20'),function(){_0x36f4d9(_0x3e62('0x21'),_0x3e62('0x1f'),null,noop,{'X-header1':'value1','X-header2':_0x3e62('0x22')});_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x20a91c['$$reqHeaders'])[_0x3e62('0x19')]({'X-header1':_0x3e62('0x23'),'X-header2':_0x3e62('0x22')});});it(_0x3e62('0x24'),function(){_0x36f4d9(_0x3e62('0x21'),'URL',null,noop,{'X-header1':0x0,'X-header2':'','X-header3':![],'X-header4':undefined});_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x20a91c[_0x3e62('0x25')])[_0x3e62('0x19')]({'X-header1':0x0,'X-header2':'','X-header3':![]});});it('should\x20not\x20try\x20to\x20read\x20response\x20data\x20when\x20request\x20is\x20aborted',function(){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x3aba81,_0x496d79,_0x3b7426,_0x224617){expect(_0x3aba81)[_0x3e62('0x12')](-0x1);expect(_0x496d79)[_0x3e62('0x12')](null);expect(_0x3b7426)[_0x3e62('0x12')](null);expect(_0x224617)[_0x3e62('0x12')]('');});_0x36f4d9('GET',_0x3e62('0x26'),null,_0x268699,{},0x7d0);_0x20a91c=MockXhr[_0x3e62('0x10')];spyOn(_0x20a91c,_0x3e62('0x27'));_0x2f6a3a[_0x3e62('0xb')][_0x3e62('0x28')]();expect(_0x20a91c[_0x3e62('0x27')])[_0x3e62('0x1e')]();_0x20a91c[_0x3e62('0x29')]=0x0;_0x20a91c[_0x3e62('0x2a')]();expect(_0x268699)[_0x3e62('0x1e')]();});it('should\x20complete\x20the\x20request\x20on\x20timeout',function(){_0x268699[_0x3e62('0x6')]['callFake'](function(_0x7c0570,_0x131625,_0x6010c4,_0x589f55,_0x217069){expect(_0x7c0570)[_0x3e62('0x12')](-0x1);expect(_0x131625)['toBe'](null);expect(_0x6010c4)[_0x3e62('0x12')](null);expect(_0x589f55)['toBe']('');expect(_0x217069)[_0x3e62('0x12')](_0x3e62('0x2b'));});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{});_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x268699)[_0x3e62('0x2c')][_0x3e62('0x2d')]();_0x20a91c[_0x3e62('0x2e')]();expect(_0x268699)['toHaveBeenCalledOnce']();});it(_0x3e62('0x2f'),function(){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x210fd0,_0x5a3255,_0x3572e3,_0x41648e,_0x134fd4){expect(_0x210fd0)[_0x3e62('0x12')](-0x1);expect(_0x5a3255)[_0x3e62('0x12')](null);expect(_0x3572e3)[_0x3e62('0x12')](null);expect(_0x41648e)[_0x3e62('0x12')]('');expect(_0x134fd4)['toBe'](_0x3e62('0x27'));});_0x36f4d9(_0x3e62('0xd'),'/url',null,_0x268699,{});_0x20a91c=MockXhr['$$lastInstance'];expect(_0x268699)[_0x3e62('0x2c')][_0x3e62('0x2d')]();_0x20a91c['onabort']();expect(_0x268699)[_0x3e62('0x1e')]();});it('should\x20complete\x20the\x20request\x20on\x20error',function(){_0x268699['and'][_0x3e62('0x3')](function(_0x4394ae,_0x53ef6f,_0x487207,_0x4e81e5,_0x1213ae){expect(_0x4394ae)[_0x3e62('0x12')](-0x1);expect(_0x53ef6f)[_0x3e62('0x12')](null);expect(_0x487207)['toBe'](null);expect(_0x4e81e5)[_0x3e62('0x12')]('');expect(_0x1213ae)[_0x3e62('0x12')]('error');});_0x36f4d9(_0x3e62('0xd'),'/url',null,_0x268699,{});_0x20a91c=MockXhr['$$lastInstance'];expect(_0x268699)[_0x3e62('0x2c')][_0x3e62('0x2d')]();_0x20a91c[_0x3e62('0x30')]();expect(_0x268699)[_0x3e62('0x1e')]();});it(_0x3e62('0x31'),function(){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x45f10b,_0x448ec0,_0xb4f598,_0x494c12,_0x555b7a){expect(_0x45f10b)[_0x3e62('0x12')](0xc8);expect(_0x448ec0)['toBe'](_0x3e62('0x32'));expect(_0xb4f598)[_0x3e62('0x12')]('');expect(_0x494c12)[_0x3e62('0x12')]('');expect(_0x555b7a)[_0x3e62('0x12')](_0x3e62('0x33'));});_0x36f4d9('GET','/url',null,_0x268699,{});_0x20a91c=MockXhr[_0x3e62('0x10')];expect(_0x268699)[_0x3e62('0x2c')]['toHaveBeenCalled']();_0x20a91c[_0x3e62('0x1b')]='';_0x20a91c['response']=_0x3e62('0x32');_0x20a91c[_0x3e62('0x29')]=0xc8;_0x20a91c[_0x3e62('0x1c')]();expect(_0x268699)[_0x3e62('0x1e')]();});it('should\x20abort\x20request\x20on\x20numerical\x20timeout',function(){_0x268699['and'][_0x3e62('0x3')](function(_0x53a800,_0x160068){expect(_0x53a800)['toBe'](-0x1);});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},0x7d0);_0x20a91c=MockXhr[_0x3e62('0x10')];spyOn(_0x20a91c,_0x3e62('0x27'));expect(_0x2f6a3a[_0x3e62('0x34')][0x0][_0x3e62('0x35')])[_0x3e62('0x12')](0x7d0);_0x2f6a3a[_0x3e62('0xb')][_0x3e62('0x28')]();expect(_0x20a91c[_0x3e62('0x27')])[_0x3e62('0x1e')]();_0x20a91c['status']=0x0;_0x20a91c[_0x3e62('0x2a')]();expect(_0x268699)[_0x3e62('0x1e')]();});it(_0x3e62('0x36'),inject(function(_0x357f8b){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x2bdc9e,_0x1baa8c,_0xb4beb8,_0x4e120c,_0x35022a){expect(_0x2bdc9e)[_0x3e62('0x12')](-0x1);expect(_0x35022a)[_0x3e62('0x12')](_0x3e62('0x2b'));});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},_0x357f8b(noop,0x7d0));_0x20a91c=MockXhr[_0x3e62('0x10')];spyOn(_0x20a91c,_0x3e62('0x27'));_0x357f8b['flush']();expect(_0x20a91c['abort'])[_0x3e62('0x1e')]();_0x20a91c[_0x3e62('0x29')]=0x0;_0x20a91c[_0x3e62('0x2a')]();expect(_0x268699)[_0x3e62('0x1e')]();}));it('should\x20not\x20abort\x20resolved\x20request\x20on\x20timeout\x20promise\x20resolution',inject(function(_0x5da0aa){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x2c714c,_0x5a1cfe){expect(_0x2c714c)[_0x3e62('0x12')](0xc8);});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},_0x5da0aa(noop,0x7d0));_0x20a91c=MockXhr[_0x3e62('0x10')];spyOn(_0x20a91c,_0x3e62('0x27'));_0x20a91c['status']=0xc8;_0x20a91c['onload']();expect(_0x268699)['toHaveBeenCalledOnce']();_0x5da0aa[_0x3e62('0x28')]();expect(_0x20a91c[_0x3e62('0x27')])[_0x3e62('0x2c')][_0x3e62('0x2d')]();}));it(_0x3e62('0x37'),inject(function(_0x142462,_0x2f6a3a){var _0x2e77e8=_0x142462[_0x3e62('0xb')]();_0x268699['and']['callFake'](function(_0x46bbaa,_0x9405bf,_0x45c521,_0x1fba61,_0xdcb7e5){expect(_0x46bbaa)[_0x3e62('0x12')](-0x1);expect(_0xdcb7e5)[_0x3e62('0x12')](_0x3e62('0x27'));});_0x36f4d9('GET','/url',null,_0x268699,{},_0x2e77e8[_0x3e62('0x38')]);_0x20a91c=MockXhr[_0x3e62('0x10')];_0x2e77e8['resolve']();_0x2f6a3a[_0x3e62('0xb')][_0x3e62('0x28')]();expect(_0x268699)['toHaveBeenCalledOnce']();}));it(_0x3e62('0x39'),function(){_0x268699[_0x3e62('0x6')]['callFake'](function(_0x14cb79,_0x16cff8){expect(_0x14cb79)[_0x3e62('0x12')](0xc8);});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},0x7d0);_0x20a91c=MockXhr['$$lastInstance'];spyOn(_0x20a91c,'abort');expect(_0x2f6a3a[_0x3e62('0x34')][0x0][_0x3e62('0x35')])[_0x3e62('0x12')](0x7d0);_0x20a91c['status']=0xc8;_0x20a91c[_0x3e62('0x1c')]();expect(_0x268699)[_0x3e62('0x1e')]();expect(_0x2f6a3a[_0x3e62('0x34')][_0x3e62('0x3a')])[_0x3e62('0x12')](0x0);expect(_0x20a91c[_0x3e62('0x27')])[_0x3e62('0x2c')][_0x3e62('0x2d')]();});it('should\x20call\x20callback\x20with\x20xhrStatus\x20\x22abort\x22\x20on\x20explicit\x20xhr.abort()\x20when\x20$timeout\x20is\x20set',inject(function(_0x1929ef){_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x61c3c6,_0x51a8a5,_0x118a41,_0x6a122c,_0x284c59){expect(_0x61c3c6)[_0x3e62('0x12')](-0x1);expect(_0x284c59)[_0x3e62('0x12')](_0x3e62('0x27'));});_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},_0x1929ef(noop,0x7d0));_0x20a91c=MockXhr['$$lastInstance'];spyOn(_0x20a91c,_0x3e62('0x27'))[_0x3e62('0x6')]['callThrough']();_0x20a91c[_0x3e62('0x27')]();expect(_0x268699)[_0x3e62('0x1e')]();}));it(_0x3e62('0x3b'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x3c'),null,_0x268699,{},null,!![]);expect(MockXhr['$$lastInstance'][_0x3e62('0x3d')])[_0x3e62('0x12')](!![]);});it(_0x3e62('0x3e'),function(){var _0x3bf8fe=jasmine[_0x3e62('0x1')](_0x3e62('0x3f'))[_0x3e62('0x6')][_0x3e62('0x3')](createMockXhr);_0x36f4d9=createHttpBackend(_0x2f6a3a,_0x3bf8fe,_0x2f6a3a[_0x3e62('0xb')],_0x1b186d,_0x37b4f2);_0x36f4d9('GET',_0x3e62('0xe'),_0x3e62('0xf'),noop);expect(_0x3bf8fe)[_0x3e62('0x40')](_0x3e62('0xd'),_0x3e62('0xe'));});it(_0x3e62('0x41'),function(){var _0x3d5a95=function(){};var _0x5744ee=function(){};_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x26'),null,_0x268699,{},null,null,null,{'progress':_0x3d5a95},{'progress':_0x5744ee});_0x20a91c=MockXhr['$$lastInstance'];expect(_0x20a91c[_0x3e62('0x42')][_0x3e62('0x43')][0x0])[_0x3e62('0x12')](_0x3d5a95);expect(_0x20a91c['upload']['$$events'][_0x3e62('0x43')][0x0])['toBe'](_0x5744ee);});describe(_0x3e62('0x44'),function(){it(_0x3e62('0x45'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x46'),null,_0x268699,{},null,null,_0x3e62('0x47'));var _0x3dd691=MockXhr[_0x3e62('0x10')];expect(_0x3dd691[_0x3e62('0x44')])[_0x3e62('0x12')]('blob');_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x2ceebf,_0x8ed792){expect(_0x8ed792)[_0x3e62('0x12')](_0x3dd691[_0x3e62('0x32')]);});_0x3dd691['response']={'some':_0x3e62('0x48')};_0x3dd691[_0x3e62('0x1c')]();expect(_0x268699)[_0x3e62('0x1e')]();});it(_0x3e62('0x49'),function(){_0x36f4d9('GET','/whatever',null,_0x268699,{},null,null,_0x3e62('0x47'));var _0x2a9974=MockXhr[_0x3e62('0x10')];var _0x2eac96=_0x3e62('0x4a');expect(_0x2a9974['responseType'])[_0x3e62('0x12')]('blob');_0x268699[_0x3e62('0x6')][_0x3e62('0x3')](function(_0x5dbcc3,_0x92643b){expect(_0x92643b)['toBe'](_0x2eac96);});_0x2a9974['responseText']=_0x2eac96;_0x2a9974[_0x3e62('0x1c')]();expect(_0x268699)['toHaveBeenCalledOnce']();});});describe(_0x3e62('0x4b'),function(){var _0x92df7f=/([^?]*)\?cb=(.*)/;it('should\x20add\x20script\x20tag\x20for\x20JSONP\x20request',function(){_0x268699['and'][_0x3e62('0x3')](function(_0xc029a9,_0x1917b8){expect(_0xc029a9)[_0x3e62('0x12')](0xc8);expect(_0x1917b8)[_0x3e62('0x12')](_0x3e62('0xf'));});_0x36f4d9('JSONP',_0x3e62('0x4c'),null,_0x268699);expect(_0x37b4f2['$$scripts']['length'])[_0x3e62('0x12')](0x1);var _0x64185b=_0x37b4f2[_0x3e62('0x7')][_0x3e62('0x4d')](),_0x3c22fc=_0x64185b[_0x3e62('0x4e')][_0x3e62('0x4f')](_0x92df7f);expect(_0x3c22fc[0x1])[_0x3e62('0x12')](_0x3e62('0x50'));_0x1b186d[_0x3c22fc[0x2]](_0x3e62('0xf'));browserTrigger(_0x64185b,_0x3e62('0x51'));expect(_0x268699)[_0x3e62('0x1e')]();});it(_0x3e62('0x52'),function(){spyOn(_0x1b186d,'removeCallback')[_0x3e62('0x6')]['callThrough']();_0x36f4d9(_0x3e62('0x4b'),_0x3e62('0x4c'),null,_0x268699);expect(_0x37b4f2[_0x3e62('0x7')]['length'])[_0x3e62('0x12')](0x1);var _0xe26cbe=_0x37b4f2[_0x3e62('0x7')]['shift'](),_0x440eb2=_0xe26cbe['src']['match'](_0x92df7f)[0x2];_0x1b186d[_0x440eb2]('some-data');browserTrigger(_0xe26cbe,_0x3e62('0x51'));expect(_0x1b186d[_0x3e62('0x53')])[_0x3e62('0x54')](_0x440eb2);expect(_0x37b4f2['body'][_0x3e62('0x55')])[_0x3e62('0x54')](_0xe26cbe);});it(_0x3e62('0x56'),function(){_0x36f4d9(_0x3e62('0x4b'),undefined,null,_0x268699);expect(_0x37b4f2['$$scripts'][0x0][_0x3e62('0x4e')])[_0x3e62('0x12')](_0x2f6a3a[_0x3e62('0x57')]());_0x37b4f2[_0x3e62('0x7')][_0x3e62('0x4d')]();_0x36f4d9(_0x3e62('0x4b'),'',null,_0x268699);expect(_0x37b4f2[_0x3e62('0x7')][0x0][_0x3e62('0x4e')])['toBe'](_0x2f6a3a['url']());});it(_0x3e62('0x58'),function(){spyOn(_0x1b186d,_0x3e62('0x53'))[_0x3e62('0x6')][_0x3e62('0x59')]();_0x268699['and']['callFake'](function(_0x560feb,_0x111119){expect(_0x560feb)[_0x3e62('0x12')](-0x1);});_0x36f4d9(_0x3e62('0x4b'),_0x3e62('0x4c'),null,_0x268699,null,0x7d0);expect(_0x37b4f2['$$scripts'][_0x3e62('0x3a')])['toBe'](0x1);expect(_0x2f6a3a[_0x3e62('0x34')][0x0]['time'])[_0x3e62('0x12')](0x7d0);var _0x22d942=_0x37b4f2[_0x3e62('0x7')][_0x3e62('0x4d')](),_0x2484a3=_0x22d942['src'][_0x3e62('0x4f')](_0x92df7f)[0x2];_0x2f6a3a['defer']['flush']();expect(_0x37b4f2['$$scripts'][_0x3e62('0x3a')])[_0x3e62('0x12')](0x0);expect(_0x268699)[_0x3e62('0x1e')]();expect(_0x1b186d['removeCallback'])[_0x3e62('0x54')](_0x2484a3);});});describe('protocols\x20that\x20return\x200\x20status\x20code',function(){function _0x52f735(_0x3250d8,_0x3b39dc){_0x20a91c=MockXhr[_0x3e62('0x10')];_0x20a91c['status']=_0x3250d8;_0x20a91c[_0x3e62('0x5a')]=_0x3b39dc;_0x20a91c['onload']();}beforeEach(function(){_0x36f4d9=createHttpBackend(_0x2f6a3a,createMockXhr);});it(_0x3e62('0x5b'),function(){_0x36f4d9('GET',_0x3e62('0x5c'),null,_0x268699);_0x52f735(0x0,'SOME\x20CONTENT');expect(_0x268699)['toHaveBeenCalled']();expect(_0x268699[_0x3e62('0x5d')]['mostRecent']()[_0x3e62('0x5e')][0x0])[_0x3e62('0x12')](0xc8);});it(_0x3e62('0x5f'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x60'),null,_0x268699);_0x52f735(0x0,_0x3e62('0x61'));expect(_0x268699)[_0x3e62('0x2d')]();expect(_0x268699[_0x3e62('0x5d')][_0x3e62('0x62')]()[_0x3e62('0x5e')][0x0])[_0x3e62('0x12')](0xc8);});it(_0x3e62('0x63'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x5c'),null,_0x268699);_0x52f735(0x0,'');expect(_0x268699)[_0x3e62('0x2d')]();expect(_0x268699[_0x3e62('0x5d')]['mostRecent']()[_0x3e62('0x5e')][0x0])['toBe'](0x194);});it(_0x3e62('0x64'),function(){_0x36f4d9(_0x3e62('0xd'),_0x3e62('0x60'),null,_0x268699);_0x52f735(0x0,'');expect(_0x268699)['toHaveBeenCalled']();expect(_0x268699[_0x3e62('0x5d')][_0x3e62('0x62')]()[_0x3e62('0x5e')][0x0])[_0x3e62('0x12')](0x0);});it('should\x20convert\x200\x20to\x20404\x20if\x20no\x20content\x20-\x20relative\x20url',function(){var _0x5c0a42=urlParsingNode;urlParsingNode={'hash':_0x3e62('0x65'),'host':'','hostname':'','href':_0x3e62('0x66'),'pathname':_0x3e62('0x67'),'port':'','protocol':_0x3e62('0x68'),'search':'','setAttribute':angular[_0x3e62('0x69')]};try{_0x36f4d9(_0x3e62('0xd'),'/whatever/index.html',null,_0x268699);_0x52f735(0x0,'');expect(_0x268699)['toHaveBeenCalled']();expect(_0x268699['calls'][_0x3e62('0x62')]()['args'][0x0])['toBe'](0x194);}finally{urlParsingNode=_0x5c0a42;}});it(_0x3e62('0x6a'),function(){_0x36f4d9(_0x3e62('0x21'),_0x3e62('0x6b'),null,_0x268699);_0x52f735(0xc9,'');expect(_0x268699)[_0x3e62('0x2d')]();expect(_0x268699[_0x3e62('0x5d')][_0x3e62('0x62')]()['args'][0x0])['toBe'](0xc9);_0x36f4d9(_0x3e62('0x21'),'file://rest_api/create_whatever',null,_0x268699);_0x52f735(0xc9,'');expect(_0x268699)[_0x3e62('0x2d')]();expect(_0x268699[_0x3e62('0x5d')][_0x3e62('0x62')]()[_0x3e62('0x5e')][0x0])[_0x3e62('0x12')](0xc9);_0x36f4d9(_0x3e62('0x21'),_0x3e62('0x6c'),null,_0x268699);_0x52f735(0x1f7,'');expect(_0x268699)[_0x3e62('0x2d')]();expect(_0x268699[_0x3e62('0x5d')]['mostRecent']()['args'][0x0])[_0x3e62('0x12')](0x1f7);});});});