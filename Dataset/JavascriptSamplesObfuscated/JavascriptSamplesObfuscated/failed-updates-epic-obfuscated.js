var _0x21cd=['catch','unable\x20to\x20process\x20progress\x20updates','pipe','updateFailed','endpoint','payload','get','set','fetchUserComplete','updateComplete','value','map','message','status','info','\x20succeeded','filter','toPromise','then','progress\x20updates\x20processed\x20where\x20possible'];(function(_0x203a4f,_0x312619){var _0x761ca7=function(_0x17ea20){while(--_0x17ea20){_0x203a4f['push'](_0x203a4f['shift']());}};_0x761ca7(++_0x312619);}(_0x21cd,0x12e));var _0x1f1b=function(_0x5a87dc,_0x388e17){_0x5a87dc=_0x5a87dc-0x0;var _0x1b02c7=_0x21cd[_0x5a87dc];return _0x1b02c7;};import{merge,empty}from'rxjs';import{tap,filter,map,ignoreElements,switchMap,catchError}from'rxjs/operators';import{ofType}from'redux-observable';import _0x10514c from'store';import _0x53225e from'uuid/v4';import{types,onlineStatusChange,isOnlineSelector,isSignedInSelector}from'./';import _0x3754d3 from'../templates/Challenges/utils/postUpdate$';import{isGoodXHRStatus}from'../templates/Challenges/utils';const key='fcc-failed-updates';function delay(time=0x0,fn){return setTimeout(fn,time);}function failedUpdateEpic(action$,state$){const storeUpdates=action$[_0x1f1b('0x0')](ofType(types[_0x1f1b('0x1')]),tap(({payload={}})=>{if(_0x1f1b('0x2')in payload&&_0x1f1b('0x3')in payload){const failures=_0x10514c[_0x1f1b('0x4')](key)||[];payload['id']=_0x53225e();_0x10514c[_0x1f1b('0x5')](key,[...failures,payload]);}}),map(()=>onlineStatusChange(![])));const flushUpdates=action$[_0x1f1b('0x0')](ofType(types[_0x1f1b('0x6')],types[_0x1f1b('0x7')]),filter(()=>isSignedInSelector(state$[_0x1f1b('0x8')])),filter(()=>_0x10514c[_0x1f1b('0x4')](key)),filter(()=>isOnlineSelector(state$[_0x1f1b('0x8')])),tap(()=>{const failures=_0x10514c['get'](key)||[];let delayTime=0x64;const batch=failures[_0x1f1b('0x9')]((update,i)=>{delayTime+=0x64*i;return delay(delayTime,()=>_0x3754d3(update)[_0x1f1b('0x0')](switchMap(response=>{if(response&&(response[_0x1f1b('0xa')]||isGoodXHRStatus(response[_0x1f1b('0xb')]))){console[_0x1f1b('0xc')](update['id']+_0x1f1b('0xd'));const failures=_0x10514c[_0x1f1b('0x4')](key)||[];const newFailures=failures[_0x1f1b('0xe')](x=>x['id']!==update['id']);_0x10514c[_0x1f1b('0x5')](key,newFailures);}return empty();}),catchError(()=>empty()))[_0x1f1b('0xf')]());});Promise['all'](batch)[_0x1f1b('0x10')](()=>console[_0x1f1b('0xc')](_0x1f1b('0x11')))[_0x1f1b('0x12')](err=>console['warn'](_0x1f1b('0x13'),err[_0x1f1b('0xa')]));}),ignoreElements());return merge(storeUpdates,flushUpdates);}export default failedUpdateEpic;