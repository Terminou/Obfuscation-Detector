var _0x26ca=['length','input','sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.subtract\x20nodes','subtract','subtraction','type','sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.multiply\x20nodes','multiply','multiplication','sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.divide\x20nodes','division','sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.modulo\x20nodes','modulo','modulus','extend','find','interpolation','sends\x20a\x20valid\x20graph\x20description\x20for\x20transform\x20nodes','transform','translateX','scale','sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.diffClamp\x20nodes','doesn\x27t\x20call\x20into\x20native\x20API\x20if\x20useNativeDriver\x20is\x20set\x20to\x20false','componentWillUnmount','fails\x20when\x20trying\x20to\x20run\x20non-native\x20animation\x20on\x20native\x20node','runAllTimers','works\x20for\x20any\x20`static`\x20props\x20and\x20styles','Animations','sends\x20a\x20valid\x20timing\x20animation\x20description','sends\x20a\x20valid\x20spring\x20animation\x20description','spring','sends\x20a\x20valid\x20decay\x20animation\x20description','decay','works\x20with\x20Animated.loop','loop','sends\x20stopAnimation\x20command\x20to\x20native','stop','prototype','isReactComponent','clearAllMocks','Text','setMock','Image','FlatList','SectionList','NativeModules','mock','NativeEventEmitter','ReactNative','NativeAnimatedHelper','UNSAFE_componentWillMount','componentDidMount','Native\x20Animated','NativeAnimatedModule','addAnimatedEventToView','connectAnimatedNodes','connectAnimatedNodeToView','createAnimatedNode','disconnectAnimatedNodeFromView','disconnectAnimatedNodes','dropAnimatedNode','extractAnimatedNodeOffset','flattenAnimatedNodeOffset','removeAnimatedEventFromView','setAnimatedNodeOffset','setAnimatedNodeValue','startAnimatingNode','startListeningToAnimatedNodeValue','stopAnimation','stopListeningToAnimatedNodeValue','Value','timing','start','View','refs','any','setNativeProps','toHaveBeenCalled','should\x20set\x20offset','setOffset','toBeCalledWith','value','should\x20flatten\x20offset','__makeNative','flattenOffset','extractOffset','Animated\x20Listeners','should\x20get\x20updates','addListener','toHaveBeenCalledWith','__getNativeTag','emit','toHaveBeenCalledTimes','__getValue','toBe','nativeEventEmitter','onAnimatedValueUpdate','removeListener','should\x20removeAll','forEach','removeAllListeners','Animated\x20Events','should\x20map\x20events','onTouchMove','foo','should\x20throw\x20on\x20invalid\x20event\x20path','event','toThrowError','not','toBeCalled','should\x20call\x20listeners','Animated\x20Graph','creates\x20and\x20detaches\x20nodes','frames','sends\x20a\x20valid\x20description\x20for\x20value,\x20style\x20and\x20props\x20nodes','style','props','add','addition','calls','filter'];(function(_0x215d59,_0x4d0e5f){var _0x47b6f2=function(_0x5de8ee){while(--_0x5de8ee){_0x215d59['push'](_0x215d59['shift']());}};_0x47b6f2(++_0x4d0e5f);}(_0x26ca,0x190));var _0x1c7c=function(_0x5f1a45,_0x1d3e7d){_0x5f1a45=_0x5f1a45-0x0;var _0x5f0e6e=_0x26ca[_0x5f1a45];return _0x5f0e6e;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';const ClassComponentMock=class{};ClassComponentMock[_0x1c7c('0x0')][_0x1c7c('0x1')]=!![];jest[_0x1c7c('0x2')]()['setMock'](_0x1c7c('0x3'),ClassComponentMock)['setMock']('View',ClassComponentMock)[_0x1c7c('0x4')](_0x1c7c('0x5'),ClassComponentMock)[_0x1c7c('0x4')]('ScrollView',ClassComponentMock)['setMock'](_0x1c7c('0x6'),ClassComponentMock)[_0x1c7c('0x4')](_0x1c7c('0x7'),ClassComponentMock)['setMock']('React',{'Component':class{}})['setMock'](_0x1c7c('0x8'),{'NativeAnimatedModule':{}})[_0x1c7c('0x9')](_0x1c7c('0xa'))[_0x1c7c('0x4')](_0x1c7c('0xb'),{'findNodeHandle':()=>0x1});const Animated=require('Animated');const NativeAnimatedHelper=require(_0x1c7c('0xc'));function createAndMountComponent(_0x1e59ab,_0x7e0aff){const _0x249477=new _0x1e59ab();_0x249477['props']=_0x7e0aff;_0x249477[_0x1c7c('0xd')]();_0x249477['_component']={};_0x249477[_0x1c7c('0xe')]();return _0x249477;}describe(_0x1c7c('0xf'),()=>{const _0x3fdad9=require('NativeModules')[_0x1c7c('0x10')];beforeEach(()=>{_0x3fdad9[_0x1c7c('0x11')]=jest['fn']();_0x3fdad9[_0x1c7c('0x12')]=jest['fn']();_0x3fdad9[_0x1c7c('0x13')]=jest['fn']();_0x3fdad9[_0x1c7c('0x14')]=jest['fn']();_0x3fdad9[_0x1c7c('0x15')]=jest['fn']();_0x3fdad9[_0x1c7c('0x16')]=jest['fn']();_0x3fdad9[_0x1c7c('0x17')]=jest['fn']();_0x3fdad9[_0x1c7c('0x18')]=jest['fn']();_0x3fdad9[_0x1c7c('0x19')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1a')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1b')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1c')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1d')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1e')]=jest['fn']();_0x3fdad9[_0x1c7c('0x1f')]=jest['fn']();_0x3fdad9[_0x1c7c('0x20')]=jest['fn']();});describe('Animated\x20Value',()=>{it('proxies\x20`setValue`\x20correctly',()=>{const _0x15eaa4=new Animated[(_0x1c7c('0x21'))](0x0);Animated[_0x1c7c('0x22')](_0x15eaa4,{'toValue':0xa,'duration':0x3e8,'useNativeDriver':!![]})[_0x1c7c('0x23')]();const _0x15980b=createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x15eaa4}});_0x15980b[_0x1c7c('0x25')]={'node':{'setNativeProps':jest['fn']()}};_0x15eaa4['setValue'](0.5);expect(_0x3fdad9[_0x1c7c('0x1c')])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),0.5);expect(_0x15980b[_0x1c7c('0x25')]['node'][_0x1c7c('0x27')])['not'][_0x1c7c('0x28')]();});it(_0x1c7c('0x29'),()=>{const _0x4c1624=new Animated[(_0x1c7c('0x21'))](0x0);_0x4c1624[_0x1c7c('0x2a')](0xa);_0x4c1624['__makeNative']();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x4c1624}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x2c'),'value':0x0,'offset':0xa});_0x4c1624['setOffset'](0x14);expect(_0x3fdad9[_0x1c7c('0x1b')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),0x14);});it(_0x1c7c('0x2d'),()=>{const _0x1154fb=new Animated[(_0x1c7c('0x21'))](0x0);_0x1154fb[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x1154fb}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect['any'](Number),{'type':_0x1c7c('0x2c'),'value':0x0,'offset':0x0});_0x1154fb[_0x1c7c('0x2f')]();expect(_0x3fdad9[_0x1c7c('0x19')])[_0x1c7c('0x2b')](expect['any'](Number));});it('should\x20extract\x20offset',()=>{const _0x12a33f=new Animated[(_0x1c7c('0x21'))](0x0);_0x12a33f['__makeNative']();createAndMountComponent(Animated['View'],{'style':{'opacity':_0x12a33f}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x2c'),'value':0x0,'offset':0x0});_0x12a33f[_0x1c7c('0x30')]();expect(_0x3fdad9[_0x1c7c('0x18')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number));});});describe(_0x1c7c('0x31'),()=>{it(_0x1c7c('0x32'),()=>{const _0x49c329=new Animated[(_0x1c7c('0x21'))](0x0);_0x49c329[_0x1c7c('0x2e')]();const _0x339b1a=jest['fn']();const _0x355e93=_0x49c329[_0x1c7c('0x33')](_0x339b1a);expect(_0x3fdad9['startListeningToAnimatedNodeValue'])[_0x1c7c('0x34')](_0x49c329[_0x1c7c('0x35')]());NativeAnimatedHelper['nativeEventEmitter'][_0x1c7c('0x36')]('onAnimatedValueUpdate',{'value':0x2a,'tag':_0x49c329[_0x1c7c('0x35')]()});expect(_0x339b1a)[_0x1c7c('0x37')](0x1);expect(_0x339b1a)[_0x1c7c('0x2b')]({'value':0x2a});expect(_0x49c329[_0x1c7c('0x38')]())[_0x1c7c('0x39')](0x2a);NativeAnimatedHelper[_0x1c7c('0x3a')][_0x1c7c('0x36')](_0x1c7c('0x3b'),{'value':0x7,'tag':_0x49c329[_0x1c7c('0x35')]()});expect(_0x339b1a)['toHaveBeenCalledTimes'](0x2);expect(_0x339b1a)[_0x1c7c('0x2b')]({'value':0x7});expect(_0x49c329[_0x1c7c('0x38')]())[_0x1c7c('0x39')](0x7);_0x49c329[_0x1c7c('0x3c')](_0x355e93);expect(_0x3fdad9[_0x1c7c('0x20')])[_0x1c7c('0x34')](_0x49c329[_0x1c7c('0x35')]());NativeAnimatedHelper[_0x1c7c('0x3a')][_0x1c7c('0x36')](_0x1c7c('0x3b'),{'value':0x5d4,'tag':_0x49c329[_0x1c7c('0x35')]()});expect(_0x339b1a)[_0x1c7c('0x37')](0x2);expect(_0x49c329[_0x1c7c('0x38')]())['toBe'](0x7);});it(_0x1c7c('0x3d'),()=>{const _0x1a684f=new Animated[(_0x1c7c('0x21'))](0x0);_0x1a684f['__makeNative']();const _0x2b110c=jest['fn']();[0x1,0x2,0x3,0x4][_0x1c7c('0x3e')](()=>_0x1a684f['addListener'](_0x2b110c));expect(_0x3fdad9['startListeningToAnimatedNodeValue'])[_0x1c7c('0x34')](_0x1a684f[_0x1c7c('0x35')]());NativeAnimatedHelper[_0x1c7c('0x3a')][_0x1c7c('0x36')](_0x1c7c('0x3b'),{'value':0x2a,'tag':_0x1a684f[_0x1c7c('0x35')]()});expect(_0x2b110c)['toHaveBeenCalledTimes'](0x4);expect(_0x2b110c)['toBeCalledWith']({'value':0x2a});_0x1a684f[_0x1c7c('0x3f')]();expect(_0x3fdad9[_0x1c7c('0x20')])[_0x1c7c('0x34')](_0x1a684f[_0x1c7c('0x35')]());NativeAnimatedHelper[_0x1c7c('0x3a')][_0x1c7c('0x36')]('onAnimatedValueUpdate',{'value':0x7,'tag':_0x1a684f['__getNativeTag']()});expect(_0x2b110c)[_0x1c7c('0x37')](0x4);});});describe(_0x1c7c('0x40'),()=>{it(_0x1c7c('0x41'),()=>{const _0x53fb54=new Animated[(_0x1c7c('0x21'))](0x0);_0x53fb54[_0x1c7c('0x2e')]();const _0x490ae3=Animated['event']([{'nativeEvent':{'state':{'foo':_0x53fb54}}}],{'useNativeDriver':!![]});const _0x5ba5f5=createAndMountComponent(Animated['View'],{'onTouchMove':_0x490ae3});expect(_0x3fdad9[_0x1c7c('0x11')])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),_0x1c7c('0x42'),{'nativeEventPath':['state',_0x1c7c('0x43')],'animatedValueTag':_0x53fb54[_0x1c7c('0x35')]()});_0x5ba5f5['componentWillUnmount']();expect(_0x3fdad9['removeAnimatedEventFromView'])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),'onTouchMove',_0x53fb54[_0x1c7c('0x35')]());});it(_0x1c7c('0x44'),()=>{const _0x16fb43=new Animated['Value'](0x0);_0x16fb43[_0x1c7c('0x2e')]();const _0x42f90d=Animated[_0x1c7c('0x45')]([{'notNativeEvent':{'foo':_0x16fb43}}],{'useNativeDriver':!![]});expect(()=>createAndMountComponent(Animated['View'],{'onTouchMove':_0x42f90d}))[_0x1c7c('0x46')](/nativeEvent/);expect(_0x3fdad9[_0x1c7c('0x11')])[_0x1c7c('0x47')][_0x1c7c('0x48')]();});it(_0x1c7c('0x49'),()=>{const _0x469ec5=new Animated[(_0x1c7c('0x21'))](0x0);_0x469ec5['__makeNative']();const _0x389807=jest['fn']();const _0x1295aa=Animated[_0x1c7c('0x45')]([{'nativeEvent':{'foo':_0x469ec5}}],{'useNativeDriver':!![],'listener':_0x389807});const _0xe40384=_0x1295aa['__getHandler']();_0xe40384({'foo':0x2a});expect(_0x389807)['toHaveBeenCalledTimes'](0x1);expect(_0x389807)[_0x1c7c('0x2b')]({'foo':0x2a});});});describe(_0x1c7c('0x4a'),()=>{it(_0x1c7c('0x4b'),()=>{const _0x42a659=new Animated[(_0x1c7c('0x21'))](0x0);const _0x275a88=createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x42a659}});Animated['timing'](_0x42a659,{'toValue':0xa,'duration':0x3e8,'useNativeDriver':!![]})[_0x1c7c('0x23')]();_0x275a88['componentWillUnmount']();expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x37')](0x3);expect(_0x3fdad9[_0x1c7c('0x12')])[_0x1c7c('0x37')](0x2);expect(_0x3fdad9[_0x1c7c('0x1d')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x4c'),'frames':expect['any'](Array),'toValue':expect[_0x1c7c('0x26')](Number),'iterations':0x1},expect[_0x1c7c('0x26')](Function));expect(_0x3fdad9[_0x1c7c('0x16')])[_0x1c7c('0x37')](0x2);expect(_0x3fdad9[_0x1c7c('0x17')])[_0x1c7c('0x37')](0x3);});it(_0x1c7c('0x4d'),()=>{const _0x12e698=new Animated['Value'](0x0);createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x12e698}});Animated['timing'](_0x12e698,{'toValue':0xa,'duration':0x3e8,'useNativeDriver':!![]})[_0x1c7c('0x23')]();expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect['any'](Number),{'type':'value','value':0x0,'offset':0x0});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x4e'),'style':{'opacity':expect[_0x1c7c('0x26')](Number)}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect['any'](Number),{'type':_0x1c7c('0x4f'),'props':{'style':expect[_0x1c7c('0x26')](Number)}});});it('sends\x20a\x20valid\x20graph\x20description\x20for\x20Animated.add\x20nodes',()=>{const _0x51f665=new Animated[(_0x1c7c('0x21'))](0x1);const _0x5b1aa6=new Animated[(_0x1c7c('0x21'))](0x2);_0x51f665['__makeNative']();_0x5b1aa6[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':Animated[_0x1c7c('0x50')](_0x51f665,_0x5b1aa6)}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x51'),'input':expect[_0x1c7c('0x26')](Array)});const _0x2caf5d=_0x3fdad9[_0x1c7c('0x14')][_0x1c7c('0x9')][_0x1c7c('0x52')][_0x1c7c('0x53')](_0x25e7ed=>_0x25e7ed[0x1]['type']===_0x1c7c('0x51'));expect(_0x2caf5d[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);const _0x1ca317=_0x2caf5d[0x0];const _0x313be0=_0x1ca317[0x0];const _0x420518=_0x3fdad9[_0x1c7c('0x12')]['mock'][_0x1c7c('0x52')][_0x1c7c('0x53')](_0x142581=>_0x142581[0x1]===_0x313be0);expect(_0x420518[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x2);expect(_0x3fdad9['createAnimatedNode'])[_0x1c7c('0x2b')](_0x1ca317[0x1][_0x1c7c('0x55')][0x0],{'type':_0x1c7c('0x2c'),'value':0x1,'offset':0x0});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x1ca317[0x1]['input'][0x1],{'type':_0x1c7c('0x2c'),'value':0x2,'offset':0x0});});it(_0x1c7c('0x56'),()=>{const _0x2d2a5a=new Animated[(_0x1c7c('0x21'))](0x2);const _0x57fc44=new Animated[(_0x1c7c('0x21'))](0x1);_0x2d2a5a[_0x1c7c('0x2e')]();_0x57fc44['__makeNative']();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':Animated[_0x1c7c('0x57')](_0x2d2a5a,_0x57fc44)}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x58'),'input':expect['any'](Array)});const _0x1b940c=_0x3fdad9[_0x1c7c('0x14')]['mock'][_0x1c7c('0x52')][_0x1c7c('0x53')](_0x3ac5e0=>_0x3ac5e0[0x1][_0x1c7c('0x59')]===_0x1c7c('0x58'));expect(_0x1b940c[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);const _0x9e04b2=_0x1b940c[0x0];const _0xe9634f=_0x9e04b2[0x0];const _0x120bb0=_0x3fdad9[_0x1c7c('0x12')][_0x1c7c('0x9')]['calls'][_0x1c7c('0x53')](_0x44a328=>_0x44a328[0x1]===_0xe9634f);expect(_0x120bb0[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x2);expect(_0x3fdad9[_0x1c7c('0x14')])['toBeCalledWith'](_0x9e04b2[0x1]['input'][0x0],{'type':_0x1c7c('0x2c'),'value':0x2,'offset':0x0});expect(_0x3fdad9['createAnimatedNode'])['toBeCalledWith'](_0x9e04b2[0x1][_0x1c7c('0x55')][0x1],{'type':_0x1c7c('0x2c'),'value':0x1,'offset':0x0});});it(_0x1c7c('0x5a'),()=>{const _0x1d6283=new Animated[(_0x1c7c('0x21'))](0x2);const _0x3041f5=new Animated['Value'](0x1);_0x1d6283['__makeNative']();_0x3041f5[_0x1c7c('0x2e')]();createAndMountComponent(Animated['View'],{'style':{'opacity':Animated[_0x1c7c('0x5b')](_0x1d6283,_0x3041f5)}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x5c'),'input':expect['any'](Array)});const _0x5e23cc=_0x3fdad9[_0x1c7c('0x14')][_0x1c7c('0x9')]['calls'][_0x1c7c('0x53')](_0x54bcef=>_0x54bcef[0x1][_0x1c7c('0x59')]===_0x1c7c('0x5c'));expect(_0x5e23cc[_0x1c7c('0x54')])['toBe'](0x1);const _0x4fb904=_0x5e23cc[0x0];const _0xb330d1=_0x4fb904[0x0];const _0x3ee891=_0x3fdad9[_0x1c7c('0x12')]['mock']['calls']['filter'](_0x24d149=>_0x24d149[0x1]===_0xb330d1);expect(_0x3ee891[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x2);expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x4fb904[0x1][_0x1c7c('0x55')][0x0],{'type':_0x1c7c('0x2c'),'value':0x2,'offset':0x0});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x4fb904[0x1]['input'][0x1],{'type':_0x1c7c('0x2c'),'value':0x1,'offset':0x0});});it(_0x1c7c('0x5d'),()=>{const _0x51a2b0=new Animated[(_0x1c7c('0x21'))](0x4);const _0x366c99=new Animated['Value'](0x2);_0x51a2b0[_0x1c7c('0x2e')]();_0x366c99[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':Animated['divide'](_0x51a2b0,_0x366c99)}});expect(_0x3fdad9[_0x1c7c('0x14')])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),{'type':'division','input':expect[_0x1c7c('0x26')](Array)});const _0x5aa4e9=_0x3fdad9[_0x1c7c('0x14')]['mock'][_0x1c7c('0x52')]['filter'](_0xacdd85=>_0xacdd85[0x1][_0x1c7c('0x59')]===_0x1c7c('0x5e'));expect(_0x5aa4e9[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);const _0x52a985=_0x5aa4e9[0x0];const _0x2d7339=_0x52a985[0x0];const _0x38593c=_0x3fdad9['connectAnimatedNodes']['mock'][_0x1c7c('0x52')]['filter'](_0x4a12fc=>_0x4a12fc[0x1]===_0x2d7339);expect(_0x38593c['length'])['toBe'](0x2);expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x52a985[0x1]['input'][0x0],{'type':_0x1c7c('0x2c'),'value':0x4,'offset':0x0});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x52a985[0x1][_0x1c7c('0x55')][0x1],{'type':_0x1c7c('0x2c'),'value':0x2,'offset':0x0});});it(_0x1c7c('0x5f'),()=>{const _0x4e2741=new Animated[(_0x1c7c('0x21'))](0x4);_0x4e2741['__makeNative']();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':Animated[_0x1c7c('0x60')](_0x4e2741,0x4)}});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x61'),'modulus':0x4,'input':expect[_0x1c7c('0x26')](Number)});const _0x114f43=_0x3fdad9[_0x1c7c('0x14')][_0x1c7c('0x9')][_0x1c7c('0x52')]['filter'](_0x3cd89a=>_0x3cd89a[0x1][_0x1c7c('0x59')]===_0x1c7c('0x61'));expect(_0x114f43[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);const _0x1a9b10=_0x114f43[0x0];const _0x20aebe=_0x1a9b10[0x0];const _0x209629=_0x3fdad9[_0x1c7c('0x12')]['mock'][_0x1c7c('0x52')]['filter'](_0x110c73=>_0x110c73[0x1]===_0x20aebe);expect(_0x209629[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](_0x1a9b10[0x1]['input'],{'type':_0x1c7c('0x2c'),'value':0x4,'offset':0x0});});it('sends\x20a\x20valid\x20graph\x20description\x20for\x20interpolate()\x20nodes',()=>{const _0x573977=new Animated['Value'](0xa);_0x573977[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x573977['interpolate']({'inputRange':[0xa,0x14],'outputRange':[0x0,0x1]})}});expect(_0x3fdad9['createAnimatedNode'])[_0x1c7c('0x2b')](expect['any'](Number),{'type':_0x1c7c('0x2c'),'value':0xa,'offset':0x0});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':'interpolation','inputRange':[0xa,0x14],'outputRange':[0x0,0x1],'extrapolateLeft':'extend','extrapolateRight':_0x1c7c('0x62')});const _0x3f272b=_0x3fdad9[_0x1c7c('0x14')][_0x1c7c('0x9')][_0x1c7c('0x52')][_0x1c7c('0x63')](_0x5d6cdb=>_0x5d6cdb[0x1]['type']===_0x1c7c('0x64'))[0x0];const _0x17f8db=_0x3fdad9[_0x1c7c('0x14')][_0x1c7c('0x9')][_0x1c7c('0x52')][_0x1c7c('0x63')](_0x5085c0=>_0x5085c0[0x1]['type']===_0x1c7c('0x2c'))[0x0];expect(_0x3fdad9[_0x1c7c('0x12')])[_0x1c7c('0x2b')](_0x17f8db,_0x3f272b);});it(_0x1c7c('0x65'),()=>{const _0x277832=new Animated['Value'](0x0);_0x277832[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'transform':[{'translateX':_0x277832},{'scale':0x2}]}});expect(_0x3fdad9[_0x1c7c('0x14')])['toBeCalledWith'](expect['any'](Number),{'type':_0x1c7c('0x66'),'transforms':[{'nodeTag':expect[_0x1c7c('0x26')](Number),'property':_0x1c7c('0x67'),'type':'animated'},{'value':0x2,'property':_0x1c7c('0x68'),'type':'static'}]});});it(_0x1c7c('0x69'),()=>{const _0x129e59=new Animated[(_0x1c7c('0x21'))](0x2);_0x129e59[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':Animated['diffClamp'](_0x129e59,0x0,0x14)}});expect(_0x3fdad9[_0x1c7c('0x14')])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),{'type':'diffclamp','input':expect[_0x1c7c('0x26')](Number),'max':0x14,'min':0x0});const _0x4cf6e5=_0x3fdad9[_0x1c7c('0x14')]['mock'][_0x1c7c('0x52')]['filter'](_0x13521b=>_0x13521b[0x1][_0x1c7c('0x59')]==='diffclamp');expect(_0x4cf6e5[_0x1c7c('0x54')])['toBe'](0x1);const _0x35f16b=_0x4cf6e5[0x0];const _0xe98805=_0x35f16b[0x0];const _0x5890b8=_0x3fdad9[_0x1c7c('0x12')]['mock'][_0x1c7c('0x52')][_0x1c7c('0x53')](_0x5e5c83=>_0x5e5c83[0x1]===_0xe98805);expect(_0x5890b8[_0x1c7c('0x54')])[_0x1c7c('0x39')](0x1);expect(_0x3fdad9['createAnimatedNode'])['toBeCalledWith'](_0x35f16b[0x1][_0x1c7c('0x55')],{'type':_0x1c7c('0x2c'),'value':0x2,'offset':0x0});});it(_0x1c7c('0x6a'),()=>{const _0x1ef40d=new Animated[(_0x1c7c('0x21'))](0x0);const _0x30dc5e=createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x1ef40d}});Animated[_0x1c7c('0x22')](_0x1ef40d,{'toValue':0xa,'duration':0x3e8,'useNativeDriver':![]})[_0x1c7c('0x23')]();_0x30dc5e[_0x1c7c('0x6b')]();expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x47')][_0x1c7c('0x48')]();});it(_0x1c7c('0x6c'),()=>{const _0x16d446=new Animated[(_0x1c7c('0x21'))](0x0);createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'opacity':_0x16d446}});Animated[_0x1c7c('0x22')](_0x16d446,{'toValue':0xa,'duration':0x32,'useNativeDriver':!![]})[_0x1c7c('0x23')]();jest['runAllTimers']();Animated[_0x1c7c('0x22')](_0x16d446,{'toValue':0x4,'duration':0x1f4,'useNativeDriver':![]})['start']();expect(jest[_0x1c7c('0x6d')])['toThrow']();});it('fails\x20for\x20unsupported\x20styles',()=>{const _0x113bdf=new Animated['Value'](0x0);createAndMountComponent(Animated['View'],{'style':{'left':_0x113bdf}});const _0x200578=Animated[_0x1c7c('0x22')](_0x113bdf,{'toValue':0xa,'duration':0x32,'useNativeDriver':!![]});expect(_0x200578[_0x1c7c('0x23')])[_0x1c7c('0x46')](/left/);});it(_0x1c7c('0x6e'),()=>{const _0x27d30a=new Animated[(_0x1c7c('0x21'))](0x0);_0x27d30a[_0x1c7c('0x2e')]();createAndMountComponent(Animated[_0x1c7c('0x24')],{'style':{'left':0xa,'top':0x14,'opacity':_0x27d30a},'removeClippedSubviews':!![]});expect(_0x3fdad9[_0x1c7c('0x14')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x4e'),'style':{'opacity':expect[_0x1c7c('0x26')](Number)}});expect(_0x3fdad9['createAnimatedNode'])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x4f'),'props':{'style':expect[_0x1c7c('0x26')](Number)}});});});describe(_0x1c7c('0x6f'),()=>{it(_0x1c7c('0x70'),()=>{const _0x5aee85=new Animated['Value'](0x0);Animated[_0x1c7c('0x22')](_0x5aee85,{'toValue':0xa,'duration':0x3e8,'useNativeDriver':!![]})['start']();expect(_0x3fdad9[_0x1c7c('0x1d')])[_0x1c7c('0x2b')](expect['any'](Number),expect['any'](Number),{'type':'frames','frames':expect['any'](Array),'toValue':expect[_0x1c7c('0x26')](Number),'iterations':0x1},expect[_0x1c7c('0x26')](Function));});it(_0x1c7c('0x71'),()=>{const _0x440cb5=new Animated[(_0x1c7c('0x21'))](0x0);Animated[_0x1c7c('0x72')](_0x440cb5,{'toValue':0xa,'friction':0x5,'tension':0xa4,'useNativeDriver':!![]})[_0x1c7c('0x23')]();expect(_0x3fdad9['startAnimatingNode'])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),expect['any'](Number),{'type':_0x1c7c('0x72'),'stiffness':679.08,'damping':0x10,'mass':0x1,'initialVelocity':0x0,'overshootClamping':![],'restDisplacementThreshold':0.001,'restSpeedThreshold':0.001,'toValue':0xa,'iterations':0x1},expect['any'](Function));Animated[_0x1c7c('0x72')](_0x440cb5,{'toValue':0xa,'stiffness':0x3e8,'damping':0x1f4,'mass':0x3,'useNativeDriver':!![]})[_0x1c7c('0x23')]();expect(_0x3fdad9[_0x1c7c('0x1d')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),expect[_0x1c7c('0x26')](Number),{'type':'spring','stiffness':0x3e8,'damping':0x1f4,'mass':0x3,'initialVelocity':0x0,'overshootClamping':![],'restDisplacementThreshold':0.001,'restSpeedThreshold':0.001,'toValue':0xa,'iterations':0x1},expect[_0x1c7c('0x26')](Function));Animated[_0x1c7c('0x72')](_0x440cb5,{'toValue':0xa,'bounciness':0x8,'speed':0xa,'useNativeDriver':!![]})[_0x1c7c('0x23')]();expect(_0x3fdad9[_0x1c7c('0x1d')])['toBeCalledWith'](expect[_0x1c7c('0x26')](Number),expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x72'),'damping':23.05223140901191,'initialVelocity':0x0,'overshootClamping':![],'restDisplacementThreshold':0.001,'restSpeedThreshold':0.001,'stiffness':299.61882352941177,'mass':0x1,'toValue':0xa,'iterations':0x1},expect[_0x1c7c('0x26')](Function));});it(_0x1c7c('0x73'),()=>{const _0x424906=new Animated['Value'](0x0);Animated[_0x1c7c('0x74')](_0x424906,{'velocity':0xa,'deceleration':0.1,'useNativeDriver':!![]})[_0x1c7c('0x23')]();expect(_0x3fdad9['startAnimatingNode'])['toBeCalledWith'](expect['any'](Number),expect[_0x1c7c('0x26')](Number),{'type':_0x1c7c('0x74'),'deceleration':0.1,'velocity':0xa,'iterations':0x1},expect[_0x1c7c('0x26')](Function));});it(_0x1c7c('0x75'),()=>{const _0x8262f7=new Animated[(_0x1c7c('0x21'))](0x0);Animated[_0x1c7c('0x76')](Animated['decay'](_0x8262f7,{'velocity':0xa,'deceleration':0.1,'useNativeDriver':!![]}),{'iterations':0xa})[_0x1c7c('0x23')]();expect(_0x3fdad9[_0x1c7c('0x1d')])[_0x1c7c('0x2b')](expect['any'](Number),expect['any'](Number),{'type':'decay','deceleration':0.1,'velocity':0xa,'iterations':0xa},expect[_0x1c7c('0x26')](Function));});it(_0x1c7c('0x77'),()=>{const _0x40b2e0=new Animated['Value'](0x0);const _0x26bd10=Animated[_0x1c7c('0x22')](_0x40b2e0,{'toValue':0xa,'duration':0x32,'useNativeDriver':!![]});_0x26bd10['start']();expect(_0x3fdad9[_0x1c7c('0x1d')])[_0x1c7c('0x2b')](expect[_0x1c7c('0x26')](Number),expect['any'](Number),{'type':_0x1c7c('0x4c'),'frames':expect[_0x1c7c('0x26')](Array),'toValue':expect[_0x1c7c('0x26')](Number),'iterations':0x1},expect[_0x1c7c('0x26')](Function));const _0xaa654c=_0x3fdad9[_0x1c7c('0x1d')]['mock'][_0x1c7c('0x52')][0x0][0x0];_0x26bd10[_0x1c7c('0x78')]();expect(_0x3fdad9[_0x1c7c('0x1f')])[_0x1c7c('0x2b')](_0xaa654c);});});});