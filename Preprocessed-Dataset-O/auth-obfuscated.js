var _0x580b=['toLowerCase','publicProfileUrl','function','test'];(function(_0x101b8f,_0xcd7c6f){var _0x27941a=function(_0x1e4a33){while(--_0x1e4a33){_0x101b8f['push'](_0x101b8f['shift']());}};_0x27941a(++_0xcd7c6f);}(_0x580b,0x19d));var _0x23dd=function(_0x50b579,_0x1a4950){_0x50b579=_0x50b579-0x0;var _0x2267d5=_0x580b[_0x50b579];return _0x2267d5;};const githubRegex=/github/i;const providerHash={'facebook':({id})=>id,'github':({username})=>username,'twitter':({username})=>username,'linkedin'({_json}){return _json&&_json[_0x23dd('0x0')]||null;},'google':({id})=>id};export function getUsernameFromProvider(_0x44bc3c,_0x51ee27){return typeof providerHash[_0x44bc3c]===_0x23dd('0x1')?providerHash[_0x44bc3c](_0x51ee27):null;}export function createUserUpdatesFromProfile(_0x1d7d0c,_0x4b5a98){if(githubRegex[_0x23dd('0x2')](_0x1d7d0c)){return createProfileAttributesFromGithub(_0x4b5a98);}return{[getSocialProvider(_0x1d7d0c)]:getUsernameFromProvider(getSocialProvider(_0x1d7d0c),_0x4b5a98)};}function createProfileAttributesFromGithub(_0x38e5e8){const {profileUrl:githubProfile,username,_json:{avatar_url:picture,blog:website,location,bio,name}={}}=_0x38e5e8;return{'name':name,'username':username[_0x23dd('0x3')](),'location':location,'bio':bio,'website':website,'picture':picture,'githubProfile':githubProfile};}export function getSocialProvider(_0x544947){return _0x544947['split']('-')[0x0];}