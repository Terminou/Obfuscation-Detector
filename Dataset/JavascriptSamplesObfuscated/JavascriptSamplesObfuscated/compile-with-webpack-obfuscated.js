var _0x2416=['[name].[ext]','outputFileSystem','run','toBeFalsy','errors','assign','development','resolve','fixtures','babel-loader','file-loader'];(function(_0x324fc2,_0x4a142c){var _0x206b95=function(_0x2a63b7){while(--_0x2a63b7){_0x324fc2['push'](_0x324fc2['shift']());}};_0x206b95(++_0x4a142c);}(_0x2416,0x1e9));var _0xd830=function(_0x1f5ba8,_0x40680a){_0x1f5ba8=_0x1f5ba8-0x0;var _0x3294df=_0x2416[_0x1f5ba8];return _0x3294df;};import _0x2607ab from'path';import _0x3bcc2b from'webpack';import _0x2ca4da from'memory-fs';export function compileWithWebpack(file,extraConfig,cb){const config=Object[_0xd830('0x0')]({'mode':_0xd830('0x1'),'entry':_0x2607ab[_0xd830('0x2')](__dirname,_0xd830('0x3'),file),'module':{'rules':[{'test':/\.js$/,'loader':_0xd830('0x4')},{'test':/async-.*\.js$/,'loader':require[_0xd830('0x2')]('./async-loader')},{'test':/\.(png|woff2|css)$/,'loader':_0xd830('0x5'),'options':{'name':_0xd830('0x6')}}]}},extraConfig);const compiler=_0x3bcc2b(config);const fs=new _0x2ca4da();compiler[_0xd830('0x7')]=fs;compiler[_0xd830('0x8')]((err,stats)=>{expect(err)[_0xd830('0x9')]();expect(stats[_0xd830('0xa')])[_0xd830('0x9')]();cb(fs);});}