var _0xd9c5=['beforeExit','_start','_allowNoInit','_logid','_logtype','function','onbefore','onafter','ondestroy','onpromiseResolve','_asyncHook','createHook','_init','bind','_before','_after','_destroy','_promiseResolve','enable','disable','_activities','values','includes','type','init','\x0aExpected\x20\x22init\x22\x20to\x20be\x20called\x20at\x20most\x20once','destroy','length','Activity\x20destroyed\x20twice\x0a','\x0aExpected\x20\x22destroy\x22\x20to\x20be\x20called\x20at\x20most\x20once','after','before','Activity\x20called\x20\x22after\x22\x20without\x20calling\x20\x22before\x22\x0a','\x0aExpected\x20no\x20\x22after\x22\x20call\x20without\x20a\x20\x22before\x22','some','Activity\x20had\x20an\x20instance\x20where\x20\x22after\x22\x20','was\x20invoked\x20before\x20\x22before\x22\x0a','\x0aExpected\x20\x22after\x22\x20to\x20be\x20called\x20after\x20\x22before\x22','Activity\x20had\x20an\x20instance\x20where\x20\x22destroy\x22\x20','\x0aExpected\x20\x22destroy\x22\x20to\x20be\x20called\x20after\x20\x22before\x22','was\x20invoked\x20before\x20\x22after\x22\x0a','No\x20resource\x20object\x0a','\x0aExpected\x20\x22init\x22\x20to\x20be\x20called\x20with\x20a\x20resource\x20object','error','join','fail','inspect','string','from','activitiesOfTypes','isArray','activities','filter','push','_getActivity','get','Unknown','set','isMainThread','Found\x20a\x20handle\x20whose\x20','\x20hook\x20was\x20invoked\x20but\x20not\x20its\x20init\x20hook','test','stack','_stamp','_maybeLog','oninit','promiseResolve','hrtime','../common','assert','async_hooks','util','once'];(function(_0x1890bb,_0x161ae0){var _0x10d221=function(_0x4cb16e){while(--_0x4cb16e){_0x1890bb['push'](_0x1890bb['shift']());}};_0x10d221(++_0x161ae0);}(_0xd9c5,0xd6));var _0x4fce=function(_0x1d2969,_0x3fc671){_0x1d2969=_0x1d2969-0x0;var _0x4a8787=_0xd9c5[_0x1d2969];return _0x4a8787;};'use strict';// Flags: --expose-gc
const common=require(_0x4fce('0x0'));const assert=require(_0x4fce('0x1'));const async_hooks=require(_0x4fce('0x2'));const util=require(_0x4fce('0x3'));const print=process['_rawDebug'];if(typeof global['gc']==='function'){(function exity(_0x49cb92){process[_0x4fce('0x4')](_0x4fce('0x5'),()=>{global['gc']();if(_0x49cb92<0x4)setImmediate(()=>exity(_0x49cb92+0x1));});}(0x0));}function noop(){}class ActivityCollector{constructor(_0x254aa3,{allowNoInit=![],oninit,onbefore,onafter,ondestroy,onpromiseResolve,logid=null,logtype=null}={}){this[_0x4fce('0x6')]=_0x254aa3;this[_0x4fce('0x7')]=allowNoInit;this['_activities']=new Map();this[_0x4fce('0x8')]=logid;this[_0x4fce('0x9')]=logtype;this['oninit']=typeof oninit===_0x4fce('0xa')?oninit:noop;this[_0x4fce('0xb')]=typeof onbefore===_0x4fce('0xa')?onbefore:noop;this[_0x4fce('0xc')]=typeof onafter===_0x4fce('0xa')?onafter:noop;this[_0x4fce('0xd')]=typeof ondestroy===_0x4fce('0xa')?ondestroy:noop;this[_0x4fce('0xe')]=typeof onpromiseResolve===_0x4fce('0xa')?onpromiseResolve:noop;this[_0x4fce('0xf')]=async_hooks[_0x4fce('0x10')]({'init':this[_0x4fce('0x11')][_0x4fce('0x12')](this),'before':this[_0x4fce('0x13')][_0x4fce('0x12')](this),'after':this[_0x4fce('0x14')][_0x4fce('0x12')](this),'destroy':this[_0x4fce('0x15')][_0x4fce('0x12')](this),'promiseResolve':this[_0x4fce('0x16')][_0x4fce('0x12')](this)});}[_0x4fce('0x17')](){this[_0x4fce('0xf')][_0x4fce('0x17')]();}[_0x4fce('0x18')](){this[_0x4fce('0xf')][_0x4fce('0x18')]();}['sanityCheck'](_0x38f3d9){if(_0x38f3d9!=null&&!Array['isArray'](_0x38f3d9))_0x38f3d9=[_0x38f3d9];function _0x2e8e58(_0x2c5623){return util['inspect'](_0x2c5623,![],0x5,!![]);}const _0xe5a8db=[];let _0x273be6;function _0x36fd6f(_0x54f3eb){_0xe5a8db['push'](_0x54f3eb);}for(const _0x50fe9b of this[_0x4fce('0x19')][_0x4fce('0x1a')]()){_0x273be6=_0x2e8e58(_0x50fe9b);if(_0x38f3d9!=null&&!_0x38f3d9[_0x4fce('0x1b')](_0x50fe9b[_0x4fce('0x1c')]))continue;if(_0x50fe9b[_0x4fce('0x1d')]&&_0x50fe9b['init']['length']>0x1){_0x36fd6f('Activity\x20inited\x20twice\x0a'+_0x273be6+_0x4fce('0x1e'));}if(_0x50fe9b[_0x4fce('0x1f')]&&_0x50fe9b[_0x4fce('0x1f')][_0x4fce('0x20')]>0x1){_0x36fd6f(_0x4fce('0x21')+_0x273be6+_0x4fce('0x22'));}if(_0x50fe9b['before']&&_0x50fe9b[_0x4fce('0x23')]){if(_0x50fe9b[_0x4fce('0x24')][_0x4fce('0x20')]<_0x50fe9b[_0x4fce('0x23')][_0x4fce('0x20')]){_0x36fd6f(_0x4fce('0x25')+(''+_0x273be6)+_0x4fce('0x26'));}if(_0x50fe9b[_0x4fce('0x24')][_0x4fce('0x27')]((_0x5d448b,_0x35bf95)=>_0x5d448b>_0x50fe9b['after'][_0x35bf95])){_0x36fd6f(_0x4fce('0x28')+_0x4fce('0x29')+(''+_0x273be6)+_0x4fce('0x2a'));}}if(_0x50fe9b[_0x4fce('0x24')]&&_0x50fe9b[_0x4fce('0x1f')]){if(_0x50fe9b[_0x4fce('0x24')]['some']((_0x401c8e,_0x2fe310)=>_0x401c8e>_0x50fe9b['destroy'][_0x2fe310])){_0x36fd6f(_0x4fce('0x2b')+_0x4fce('0x29')+(''+_0x273be6)+_0x4fce('0x2c'));}}if(_0x50fe9b[_0x4fce('0x23')]&&_0x50fe9b[_0x4fce('0x1f')]){if(_0x50fe9b[_0x4fce('0x23')][_0x4fce('0x27')]((_0x125a8a,_0x2881e9)=>_0x125a8a>_0x50fe9b[_0x4fce('0x1f')][_0x2881e9])){_0x36fd6f('Activity\x20had\x20an\x20instance\x20where\x20\x22destroy\x22\x20'+_0x4fce('0x2d')+(''+_0x273be6)+'\x0aExpected\x20\x22destroy\x22\x20to\x20be\x20called\x20after\x20\x22after\x22');}}if(!_0x50fe9b['handleIsObject']){_0x36fd6f(_0x4fce('0x2e')+_0x273be6+_0x4fce('0x2f'));}}if(_0xe5a8db['length']){console[_0x4fce('0x30')](_0xe5a8db[_0x4fce('0x31')]('\x0a\x0a')+'\x0a');assert[_0x4fce('0x32')](_0xe5a8db[_0x4fce('0x20')]+'\x20failed\x20sanity\x20checks');}}[_0x4fce('0x33')](_0x554d91={}){if(typeof _0x554d91===_0x4fce('0x34'))_0x554d91={'types':_0x554d91};const {types=null,depth=0x5,stage=null}=_0x554d91;const _0x1d503c=types==null?Array[_0x4fce('0x35')](this['_activities'][_0x4fce('0x1a')]()):this[_0x4fce('0x36')](types);if(stage!=null)console['log']('\x0a'+stage);console['log'](util[_0x4fce('0x33')](_0x1d503c,![],depth,!![]));}[_0x4fce('0x36')](_0x544dc3){if(!Array[_0x4fce('0x37')](_0x544dc3))_0x544dc3=[_0x544dc3];return this[_0x4fce('0x38')][_0x4fce('0x39')](_0x427065=>_0x544dc3[_0x4fce('0x1b')](_0x427065[_0x4fce('0x1c')]));}get[_0x4fce('0x38')](){return Array[_0x4fce('0x35')](this['_activities'][_0x4fce('0x1a')]());}['_stamp'](_0xd17851,_0x5a722e){if(_0xd17851==null)return;if(_0xd17851[_0x5a722e]==null)_0xd17851[_0x5a722e]=[];const _0x2b7133=process['hrtime'](this[_0x4fce('0x6')]);_0xd17851[_0x5a722e][_0x4fce('0x3a')](_0x2b7133[0x0]*0x3b9aca00+_0x2b7133[0x1]);}[_0x4fce('0x3b')](_0x336cf8,_0x410346){const _0x10545a=this['_activities'][_0x4fce('0x3c')](_0x336cf8);if(!_0x10545a){if(this[_0x4fce('0x7')]){const _0xe9df0a={'uid':_0x336cf8,'type':_0x4fce('0x3d'),'handleIsObject':!![]};this['_activities'][_0x4fce('0x3e')](_0x336cf8,_0xe9df0a);return _0xe9df0a;}else if(!common[_0x4fce('0x3f')]){return null;}else{const _0x565979=new Error(_0x4fce('0x40')+_0x410346+_0x4fce('0x41'));if(/process\._fatalException/[_0x4fce('0x42')](_0x565979[_0x4fce('0x43')]))return null;throw _0x565979;}}return _0x10545a;}[_0x4fce('0x11')](_0x119584,_0xe13993,_0x4a4e79,_0x138173){const _0x2f8198={'uid':_0x119584,'type':_0xe13993,'triggerAsyncId':_0x4a4e79,'handleIsObject':_0x138173 instanceof Object};this[_0x4fce('0x44')](_0x2f8198,_0x4fce('0x1d'));this[_0x4fce('0x19')][_0x4fce('0x3e')](_0x119584,_0x2f8198);this[_0x4fce('0x45')](_0x119584,_0xe13993,_0x4fce('0x1d'));this[_0x4fce('0x46')](_0x119584,_0xe13993,_0x4a4e79,_0x138173);}[_0x4fce('0x13')](_0x1df5ea){const _0x250d01=this[_0x4fce('0x3b')](_0x1df5ea,_0x4fce('0x24'));this[_0x4fce('0x44')](_0x250d01,_0x4fce('0x24'));this[_0x4fce('0x45')](_0x1df5ea,_0x250d01&&_0x250d01[_0x4fce('0x1c')],_0x4fce('0x24'));this[_0x4fce('0xb')](_0x1df5ea);}[_0x4fce('0x14')](_0x3e2514){const _0x538cc5=this[_0x4fce('0x3b')](_0x3e2514,_0x4fce('0x23'));this['_stamp'](_0x538cc5,_0x4fce('0x23'));this[_0x4fce('0x45')](_0x3e2514,_0x538cc5&&_0x538cc5[_0x4fce('0x1c')],_0x4fce('0x23'));this[_0x4fce('0xc')](_0x3e2514);}['_destroy'](_0x21c275){const _0x578e06=this[_0x4fce('0x3b')](_0x21c275,_0x4fce('0x1f'));this['_stamp'](_0x578e06,_0x4fce('0x1f'));this[_0x4fce('0x45')](_0x21c275,_0x578e06&&_0x578e06['type'],_0x4fce('0x1f'));this[_0x4fce('0xd')](_0x21c275);}[_0x4fce('0x16')](_0x1c6356){const _0x40eaf0=this[_0x4fce('0x3b')](_0x1c6356,_0x4fce('0x47'));this['_stamp'](_0x40eaf0,'promiseResolve');this[_0x4fce('0x45')](_0x1c6356,_0x40eaf0&&_0x40eaf0['type'],'promiseResolve');this[_0x4fce('0xe')](_0x1c6356);}[_0x4fce('0x45')](_0x3e95fb,_0x1a227a,_0x487d1c){if(this[_0x4fce('0x8')]&&(_0x1a227a==null||this[_0x4fce('0x9')]==null||this[_0x4fce('0x9')]===_0x1a227a)){print(this[_0x4fce('0x8')]+'.'+_0x487d1c+'.uid-'+_0x3e95fb);}}}exports=module['exports']=function initHooks({oninit,onbefore,onafter,ondestroy,onpromiseResolve,allowNoInit,logid,logtype}={}){return new ActivityCollector(process[_0x4fce('0x48')](),{'oninit':oninit,'onbefore':onbefore,'onafter':onafter,'ondestroy':ondestroy,'onpromiseResolve':onpromiseResolve,'allowNoInit':allowNoInit,'logid':logid,'logtype':logtype});};