var _0x50ce=['ponyfoo','spy','args','declares\x20a\x20403\x20for\x20an\x20invalid\x20solution\x20in\x20the\x20body','https://not-a-url','calls\x20next\x20if\x20the\x20body\x20is\x20valid','https://www.freecodecamp.org','calls\x20next\x20if\x20only\x20the\x20id\x20is\x20provided','can\x20handle\x20an\x20\x22int\x22\x20challengeType','modernChallengeCompleted','redirectToCurrentChallenge','https://www.example.com','redircts\x20to\x20the\x20learn\x20base\x20url\x20for\x20non-users','redirect','calledWith','redirects\x20to\x20the\x20url\x20provided\x20by\x20the\x20challengeUrlResolver','redirects\x20to\x20the\x20first\x20challenge\x20for\x20users\x20without\x20a\x20currentChallengeId','https://example.com','https://example.com/learn','maps\x20to\x20the\x20correct\x20redirect\x20if\x20the\x20path\x20matches\x20a\x20challenge','/challenges/challenge-two','buildUserUpdate','123abc','toHaveProperty','updateData.$set.completedChallenges','preserves\x20file\x20contents\x20if\x20the\x20completed\x20challenge\x20is\x20a\x20JS\x20Project','aa2e6f85cab2ab736c9a9b24','now','UTC','updateData','$set','completedChallenges','toEqual','preserves\x20the\x20original\x20completed\x20date\x20of\x20a\x20challenge','aaa48de84e1ecc7c742e1124','completedDate','progressTimestamps','$push','toBe','provides\x20a\x20progressTimestamps\x20update\x20for\x20new\x20challenge\x20completion','assertions','removes\x20repeat\x20completions\x20from\x20the\x20completedChallenges\x20array','length','adds\x20newly\x20completed\x20challenges\x20to\x20the\x20completedChallenges\x20array','buildChallengeUrl','can\x20handle\x20non-url-complient\x20challenge\x20names','/learn/my-awesome/actual/challenge','challengeUrlResolver','resolves\x20to\x20the\x20first\x20challenge\x20url\x20by\x20default','then','returns\x20the\x20first\x20challenge\x20url\x20if\x20the\x20provided\x20id\x20does\x20not\x20relate\x20to\x20a\x20challenge','not-a-real-challenge','resolves\x20the\x20correct\x20url\x20for\x20the\x20requested\x20challenge','getFirstChallenge','no\x20challenge\x20found','returns\x20the\x20correct\x20challenge\x20url\x20from\x20the\x20model','returns\x20the\x20learn\x20base\x20if\x20no\x20challenges\x20found','/learn','5c716d1801013c3ce3aa23e6','declares\x20a\x20403\x20for\x20an\x20invalid\x20id\x20in\x20the\x20body','sendStatus','called','getCall','declares\x20a\x20403\x20for\x20an\x20invalid\x20challengeType\x20in\x20the\x20body'];(function(_0x5ba708,_0x1e4976){var _0x105f19=function(_0x16569d){while(--_0x16569d){_0x5ba708['push'](_0x5ba708['shift']());}};_0x105f19(++_0x1e4976);}(_0x50ce,0x1d5));var _0x43a5=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x50ce[_0x2d8f05];return _0x4d74cb;};import{isEqual,first,find}from'lodash';import _0x543021 from'sinon';import{mockReq,mockRes}from'sinon-express-mock';import{buildUserUpdate,buildChallengeUrl,createChallengeUrlResolver,createRedirectToCurrentChallenge,getFirstChallenge,isValidChallengeCompletion,createRedirectToLearn}from'../boot/challenge';import{firstChallengeUrl,requestedChallengeUrl,mockChallenge,mockFirstChallenge,mockUser,mockApp,mockGetFirstChallenge,firstChallengeQuery,mockCompletedChallenge,mockCompletedChallenges,mockPathMigrationMap}from'./fixtures';describe('boot/challenge',()=>{xdescribe('backendChallengeCompleted');describe(_0x43a5('0x0'),()=>{it('returns\x20an\x20Object\x20with\x20a\x20nested\x20\x22completedChallenges\x22\x20property',()=>{const result=buildUserUpdate(mockUser,_0x43a5('0x1'),mockCompletedChallenge,'UTC');expect(result)[_0x43a5('0x2')](_0x43a5('0x3'));});it(_0x43a5('0x4'),()=>{const jsChallengeId=_0x43a5('0x5');const completedChallenge={...mockCompletedChallenge,'completedDate':Date[_0x43a5('0x6')](),'id':jsChallengeId};const result=buildUserUpdate(mockUser,jsChallengeId,completedChallenge,_0x43a5('0x7'));const firstCompletedChallenge=first(result[_0x43a5('0x8')][_0x43a5('0x9')][_0x43a5('0xa')]);expect(firstCompletedChallenge)[_0x43a5('0xb')](completedChallenge);});it(_0x43a5('0xc'),()=>{const completedChallengeId=_0x43a5('0xd');const completedChallenge={...mockCompletedChallenge,'completedDate':Date[_0x43a5('0x6')](),'id':completedChallengeId};const originalCompletion=find(mockCompletedChallenges,x=>x['id']===completedChallengeId)[_0x43a5('0xe')];const result=buildUserUpdate(mockUser,completedChallengeId,completedChallenge,'UTC');const firstCompletedChallenge=first(result[_0x43a5('0x8')][_0x43a5('0x9')][_0x43a5('0xa')]);expect(firstCompletedChallenge[_0x43a5('0xe')])[_0x43a5('0xb')](originalCompletion);});it('does\x20not\x20attempt\x20to\x20update\x20progressTimestamps\x20for\x20a\x20previously\x20completed\x20challenge',()=>{const completedChallengeId=_0x43a5('0xd');const completedChallenge={...mockCompletedChallenge,'completedDate':Date[_0x43a5('0x6')](),'id':completedChallengeId};const {updateData}=buildUserUpdate(mockUser,completedChallengeId,completedChallenge,'UTC');const hasProgressTimestamps='$push'in updateData&&_0x43a5('0xf')in updateData[_0x43a5('0x10')];expect(hasProgressTimestamps)[_0x43a5('0x11')](![]);});it(_0x43a5('0x12'),()=>{expect[_0x43a5('0x13')](0x2);const {updateData}=buildUserUpdate(mockUser,_0x43a5('0x1'),mockCompletedChallenge,_0x43a5('0x7'));expect(updateData)[_0x43a5('0x2')](_0x43a5('0x10'));expect(updateData['$push'])[_0x43a5('0x2')]('progressTimestamps');});it(_0x43a5('0x14'),()=>{const completedChallengeId='aaa48de84e1ecc7c742e1124';const completedChallenge={...mockCompletedChallenge,'completedDate':Date[_0x43a5('0x6')](),'id':completedChallengeId};const {updateData:{$set:{completedChallenges}}}=buildUserUpdate(mockUser,completedChallengeId,completedChallenge,_0x43a5('0x7'));expect(completedChallenges[_0x43a5('0x15')])[_0x43a5('0xb')](mockCompletedChallenges['length']);});it(_0x43a5('0x16'),()=>{const {updateData:{$set:{completedChallenges}}}=buildUserUpdate(mockUser,'123abc',mockCompletedChallenge,'UTC');expect(completedChallenges[_0x43a5('0x15')])[_0x43a5('0xb')](mockCompletedChallenges['length']+0x1);});});describe(_0x43a5('0x17'),()=>{it('resolves\x20the\x20correct\x20Url\x20for\x20the\x20provided\x20challenge',()=>{const result=buildChallengeUrl(mockChallenge);expect(result)['toEqual'](requestedChallengeUrl);});it(_0x43a5('0x18'),()=>{const challenge={...mockChallenge,'superBlock':'my\x20awesome'};const expected=_0x43a5('0x19');const result=buildChallengeUrl(challenge);expect(result)[_0x43a5('0xb')](expected);});});describe(_0x43a5('0x1a'),()=>{it(_0x43a5('0x1b'),async()=>{const challengeUrlResolver=await createChallengeUrlResolver(mockApp,{'_getFirstChallenge':mockGetFirstChallenge});return challengeUrlResolver()[_0x43a5('0x1c')](url=>{expect(url)[_0x43a5('0xb')](firstChallengeUrl);});});it(_0x43a5('0x1d'),async()=>{const challengeUrlResolver=await createChallengeUrlResolver(mockApp,{'_getFirstChallenge':mockGetFirstChallenge});return challengeUrlResolver(_0x43a5('0x1e'))[_0x43a5('0x1c')](url=>{expect(url)['toEqual'](firstChallengeUrl);});});it(_0x43a5('0x1f'),async()=>{const challengeUrlResolver=await createChallengeUrlResolver(mockApp,{'_getFirstChallenge':mockGetFirstChallenge});return challengeUrlResolver(_0x43a5('0x1'))[_0x43a5('0x1c')](url=>{expect(url)[_0x43a5('0xb')](requestedChallengeUrl);});});});describe(_0x43a5('0x20'),()=>{const createMockChallengeModel=success=>success?{'findOne'(query,cb){return isEqual(query,firstChallengeQuery)?cb(null,mockFirstChallenge):cb(new Error(_0x43a5('0x21')));}}:{'findOne'(_,cb){return cb(new Error(_0x43a5('0x21')));}};it(_0x43a5('0x22'),async()=>{const result=await getFirstChallenge(createMockChallengeModel(!![]));expect(result)[_0x43a5('0xb')](firstChallengeUrl);});it(_0x43a5('0x23'),async()=>{const result=await getFirstChallenge(createMockChallengeModel(![]));expect(result)['toEqual'](_0x43a5('0x24'));});});describe('isValidChallengeCompletion',()=>{const validObjectId=_0x43a5('0x25');it(_0x43a5('0x26'),()=>{expect['assertions'](0x3);const req=mockReq({'body':{'id':'not-a-real-id'}});const res=mockRes();const next=_0x543021['spy']();isValidChallengeCompletion(req,res,next);expect(res[_0x43a5('0x27')][_0x43a5('0x28')])[_0x43a5('0x11')](!![]);expect(res[_0x43a5('0x27')][_0x43a5('0x29')](0x0)['args'][0x0])[_0x43a5('0x11')](0x193);expect(next['called'])[_0x43a5('0x11')](![]);});it(_0x43a5('0x2a'),()=>{expect[_0x43a5('0x13')](0x3);const req=mockReq({'body':{'id':validObjectId,'challengeType':_0x43a5('0x2b')}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();isValidChallengeCompletion(req,res,next);expect(res[_0x43a5('0x27')][_0x43a5('0x28')])[_0x43a5('0x11')](!![]);expect(res['sendStatus']['getCall'](0x0)[_0x43a5('0x2d')][0x0])[_0x43a5('0x11')](0x193);expect(next[_0x43a5('0x28')])[_0x43a5('0x11')](![]);});it(_0x43a5('0x2e'),()=>{expect['assertions'](0x3);const req=mockReq({'body':{'id':validObjectId,'challengeType':'1','solution':_0x43a5('0x2f')}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();isValidChallengeCompletion(req,res,next);expect(res[_0x43a5('0x27')]['called'])[_0x43a5('0x11')](!![]);expect(res[_0x43a5('0x27')]['getCall'](0x0)['args'][0x0])[_0x43a5('0x11')](0x193);expect(next['called'])['toBe'](![]);});it(_0x43a5('0x30'),()=>{const req=mockReq({'body':{'id':validObjectId,'challengeType':'1','solution':_0x43a5('0x31')}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();isValidChallengeCompletion(req,res,next);expect(next[_0x43a5('0x28')])[_0x43a5('0x11')](!![]);});it(_0x43a5('0x32'),()=>{const req=mockReq({'body':{'id':validObjectId}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();isValidChallengeCompletion(req,res,next);expect(next[_0x43a5('0x28')])['toBe'](!![]);});it(_0x43a5('0x33'),()=>{const req=mockReq({'body':{'id':validObjectId,'challengeType':0x1}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();isValidChallengeCompletion(req,res,next);expect(next[_0x43a5('0x28')])[_0x43a5('0x11')](!![]);});});xdescribe(_0x43a5('0x34'));xdescribe('projectCompleted');describe(_0x43a5('0x35'),()=>{const mockHomeLocation=_0x43a5('0x36');const mockLearnUrl=mockHomeLocation+_0x43a5('0x24');it(_0x43a5('0x37'),async done=>{const redirectToCurrentChallenge=createRedirectToCurrentChallenge(()=>{},{'_homeLocation':mockHomeLocation,'_learnUrl':mockLearnUrl});const req=mockReq();const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();await redirectToCurrentChallenge(req,res,next);expect(res[_0x43a5('0x38')][_0x43a5('0x39')](mockLearnUrl));done();});it(_0x43a5('0x3a'),async done=>{const challengeUrlResolver=await createChallengeUrlResolver(mockApp,{'_getFirstChallenge':mockGetFirstChallenge});const expectedUrl=''+mockHomeLocation+requestedChallengeUrl;const redirectToCurrentChallenge=createRedirectToCurrentChallenge(challengeUrlResolver,{'_homeLocation':mockHomeLocation,'_learnUrl':mockLearnUrl});const req=mockReq({'user':mockUser});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();await redirectToCurrentChallenge(req,res,next);expect(res[_0x43a5('0x38')][_0x43a5('0x39')](expectedUrl))[_0x43a5('0x11')](!![]);done();});it(_0x43a5('0x3b'),async done=>{const challengeUrlResolver=await createChallengeUrlResolver(mockApp,{'_getFirstChallenge':mockGetFirstChallenge});const redirectToCurrentChallenge=createRedirectToCurrentChallenge(challengeUrlResolver,{'_homeLocation':mockHomeLocation,'_learnUrl':mockLearnUrl});const req=mockReq({'user':{...mockUser,'currentChallengeId':''}});const res=mockRes();const next=_0x543021[_0x43a5('0x2c')]();await redirectToCurrentChallenge(req,res,next);const expectedUrl=''+mockHomeLocation+firstChallengeUrl;expect(res[_0x43a5('0x38')][_0x43a5('0x39')](expectedUrl))['toBe'](!![]);done();});});describe('redirectToLearn',()=>{const mockHome=_0x43a5('0x3c');const mockLearn=_0x43a5('0x3d');const redirectToLearn=createRedirectToLearn(mockPathMigrationMap,mockHome,mockLearn);it('redirects\x20to\x20learn\x20by\x20default',()=>{const req=mockReq({'path':'/challenges'});const res=mockRes();redirectToLearn(req,res);expect(res[_0x43a5('0x38')][_0x43a5('0x39')](mockLearn))['toBe'](!![]);});it(_0x43a5('0x3e'),()=>{const req=mockReq({'path':_0x43a5('0x3f')});const res=mockRes();const expectedRedirect='https://example.com/learn/superblock/block/challenge-two';redirectToLearn(req,res);expect(res[_0x43a5('0x38')][_0x43a5('0x39')](expectedRedirect))[_0x43a5('0x11')](!![]);});});});