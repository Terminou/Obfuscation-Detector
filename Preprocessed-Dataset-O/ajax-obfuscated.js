var _0xca08=['/api/challenges/get-id-to-name','/api/users/get-public-profile?username=','/api/users/exists?username=','/n/','/user/report-user','/account/delete','/update-my-username','/update-my-profileui','/update-privacy-terms','/update-my-email','/certificate/verify','/internal','get','post','put','/user/get-session-user'];(function(_0x34260a,_0x3b5ec6){var _0xfad4c2=function(_0x243dbf){while(--_0x243dbf){_0x34260a['push'](_0x34260a['shift']());}};_0xfad4c2(++_0x3b5ec6);}(_0xca08,0x9b));var _0x4577=function(_0x73d2d7,_0x55da8a){_0x73d2d7=_0x73d2d7-0x0;var _0x1fdc18=_0xca08[_0x73d2d7];return _0x1fdc18;};import _0x270de0 from'axios';const base=_0x4577('0x0');function get(_0x2801d6){return _0x270de0[_0x4577('0x1')](''+base+_0x2801d6);}export function post(_0x562fd0,_0x3ac0ad){return _0x270de0[_0x4577('0x2')](''+base+_0x562fd0,_0x3ac0ad);}function put(_0x37df46,_0x118f34){return _0x270de0[_0x4577('0x3')](''+base+_0x37df46,_0x118f34);}export function getSessionUser(){return get(_0x4577('0x4'));}export function getIdToNameMap(){return get(_0x4577('0x5'));}export function getUserProfile(_0x3cc487){return get(_0x4577('0x6')+_0x3cc487);}export function getShowCert(_0x11705d,_0x32103c){return get('/certificate/showCert/'+_0x11705d+'/'+_0x32103c);}export function getUsernameExists(_0x400726){return get(_0x4577('0x7')+_0x400726);}export function getArticleById(_0x1c2152){return get(_0x4577('0x8')+_0x1c2152);}export function postReportUser(_0x2535e0){return post(_0x4577('0x9'),_0x2535e0);}export function postDeleteAccount(_0xe85098){return post(_0x4577('0xa'),_0xe85098);}export function postResetProgress(_0x28bdd9){return post('/account/reset-progress',_0x28bdd9);}export function putUpdateMyAbout(_0x4b8404){return put('/update-my-about',{..._0x4b8404});}export function putUpdateMyUsername(_0x723c31){return put(_0x4577('0xb'),{'username':_0x723c31});}export function putUpdateMyProfileUI(_0x593b35){return put(_0x4577('0xc'),{'profileUI':_0x593b35});}export function putUpdateUserFlag(_0x46e2c1){return put('/update-user-flag',_0x46e2c1);}export function putUserAcceptsTerms(_0x14140f){return put(_0x4577('0xd'),{'quincyEmails':_0x14140f});}export function putUserUpdateEmail(_0x4e329f){return put(_0x4577('0xe'),{'email':_0x4e329f});}export function putVerifyCert(_0x105e43){return put(_0x4577('0xf'),{'superBlock':_0x105e43});}