var _0x97ad=['split','toMatchSnapshot','eval\x202','anonymous@file:///C:/example.html\x20line\x207\x20>\x20Function:1:1\x0a@file:///C:/example.html:7:6','stack\x20with\x20eval','e@file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:25:9\x0a@file:///Users/joe/Documents/Development/OSS/stack-frame/index.html\x20line\x2017\x20>\x20eval:1:1\x0aa@file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:8:9\x0a@file:///Users/joe/Documents/Development/OSS/stack-frame/index.html:32:7','v14\x20to\x20v29','v30+','trace@file:///C:/example.html:9:17\x0ab@file:///C:/example.html:16:13\x0aa@file:///C:/example.html:19:13\x0a@file:///C:/example.html:21:9','eval\x201','test1@file:///C:/example.html\x20line\x207\x20>\x20eval\x20line\x201\x20>\x20eval:1:1\x0atest2@file:///C:/example.html\x20line\x207\x20>\x20eval:1:1\x0atest3@file:///C:/example.html:7:6'];(function(_0x4fb13f,_0xa1acad){var _0x47fc5a=function(_0x8c2465){while(--_0x8c2465){_0x4fb13f['push'](_0x4fb13f['shift']());}};_0x47fc5a(++_0xa1acad);}(_0x97ad,0x15e));var _0x2b3e=function(_0x433000,_0x25a2b6){_0x433000=_0x433000-0x0;var _0x4014fa=_0x97ad[_0x433000];return _0x4014fa;};import{parse}from'../../utils/parser';test(_0x2b3e('0x0'),()=>{expect(parse(_0x2b3e('0x1')[_0x2b3e('0x2')]('\x0a')))[_0x2b3e('0x3')]();});test(_0x2b3e('0x4'),()=>{expect(parse({'stack':_0x2b3e('0x5')}))[_0x2b3e('0x3')]();});test(_0x2b3e('0x6'),()=>{expect(parse(_0x2b3e('0x7')))[_0x2b3e('0x3')]();});test(_0x2b3e('0x8'),()=>{expect(parse('trace@file:///C:/example.html:9\x0ab@file:///C:/example.html:16\x0aa@file:///C:/example.html:19\x0a@file:///C:/example.html:21'))['toMatchSnapshot']();});test(_0x2b3e('0x9'),()=>{expect(parse(_0x2b3e('0xa')))[_0x2b3e('0x3')]();});