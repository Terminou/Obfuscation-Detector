var _0x233f=['This\x20is\x20the\x20description','description','should\x20read\x20options','\x20sinceVersion=\x22v1.3.4\x22\x20removeVersion=\x22v1.4.5\x22\x20what\x20is\x20left\x20is\x20description','toEqual','what\x20is\x20left\x20is\x20description','sinceVersion','v1.3.4','removeVersion','v1.4.5','should\x20cope\x20with\x20carriage\x20returns','should\x20error\x20if\x20there\x20is\x20an\x20invalid\x20option','\x20fromVersion=\x22v1.3.4\x22\x20toVersion=\x22v1.4.5\x22\x20what\x20is\x20left\x20is\x20description','toThrowError','Invalid\x20options:\x20\x22fromVersion\x22\x20and\x20\x22toVersion\x22.\x20Value\x20options\x20are:\x20\x22sinceVersion\x22\x20and\x20\x22removeVersion\x22','./deprecated','transforms'];(function(_0x19eebf,_0x4e1ee7){var _0x2974a9=function(_0x1bfcff){while(--_0x1bfcff){_0x19eebf['push'](_0x19eebf['shift']());}};_0x2974a9(++_0x4e1ee7);}(_0x233f,0x10e));var _0x2449=function(_0x2628fa,_0x12aa66){_0x2628fa=_0x2628fa-0x0;var _0x4af8b4=_0x233f[_0x2628fa];return _0x4af8b4;};'use strict';/* globals describe, it, expect */var tagDef=require(_0x2449('0x0'));describe('deprecated\x20tag',function(){describe(_0x2449('0x1'),function(){it('should\x20return\x20the\x20trimmed\x20value\x20if\x20no\x20options',function(){var _0x19c1a3=tagDef['transforms']({},{},_0x2449('0x2'));expect(_0x19c1a3[_0x2449('0x3')])['toEqual'](_0x2449('0x2'));});it(_0x2449('0x4'),function(){var _0x81b5c7=tagDef[_0x2449('0x1')]({},{},_0x2449('0x5'));expect(_0x81b5c7[_0x2449('0x3')])[_0x2449('0x6')](_0x2449('0x7'));expect(_0x81b5c7[_0x2449('0x8')])['toEqual'](_0x2449('0x9'));expect(_0x81b5c7[_0x2449('0xa')])['toEqual'](_0x2449('0xb'));});it(_0x2449('0xc'),function(){var _0x550dff=tagDef[_0x2449('0x1')]({},{},'\x0asinceVersion=\x22v1.3.4\x22\x0aremoveVersion=\x22v1.4.5\x22\x0awhat\x20is\x20left\x20is\x20description');expect(_0x550dff[_0x2449('0x3')])[_0x2449('0x6')](_0x2449('0x7'));expect(_0x550dff[_0x2449('0x8')])['toEqual'](_0x2449('0x9'));expect(_0x550dff['removeVersion'])['toEqual'](_0x2449('0xb'));});it(_0x2449('0xd'),function(){expect(function(){tagDef[_0x2449('0x1')]({},{},_0x2449('0xe'));})[_0x2449('0xf')](_0x2449('0x10'));});});});