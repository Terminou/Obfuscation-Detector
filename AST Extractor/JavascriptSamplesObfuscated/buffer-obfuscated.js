var _0x33f8=['buffer','offset','length','\x20and\x20<=\x20','readUInt32LE','readUInt16LE','readUInt8','byteLength','number','readUInt32BE','readUInt16BE','readInt32LE','readInt16LE','readInt8','readInt32BE','floor','value','readUIntLE','readUIntBE','readIntLE','readIntBE','readInt16BE','writeUIntLE','writeUInt32LE','writeUInt8','writeUIntBE','writeUInt16BE','writeIntLE','writeInt32LE','writeInt8','writeIntBE','writeInt16BE','readFloatLE','readDoubleBE','writeFloatLE','writeFloatBE','writeDoubleLE','asciiSlice','base64Slice','latin1Slice','hexSlice','utf8Slice','asciiWrite','latin1Write','hexWrite','ucs2Write','utf8Write','exports','internal/errors','codes'];(function(_0x2d264d,_0x1dc982){var _0x134f29=function(_0x31202b){while(--_0x31202b){_0x2d264d['push'](_0x2d264d['shift']());}};_0x134f29(++_0x1dc982);}(_0x33f8,0x15c));var _0x2817=function(_0x11a600,_0x164553){_0x11a600=_0x11a600-0x0;var _0x477592=_0x33f8[_0x11a600];return _0x477592;};'use strict';const {ERR_BUFFER_OUT_OF_BOUNDS,ERR_INVALID_ARG_TYPE,ERR_OUT_OF_RANGE}=require(_0x2817('0x0'))[_0x2817('0x1')];const {validateNumber}=require('internal/validators');const {asciiSlice,base64Slice,latin1Slice,hexSlice,ucs2Slice,utf8Slice,asciiWrite,base64Write,latin1Write,hexWrite,ucs2Write,utf8Write}=internalBinding(_0x2817('0x2'));const float32Array=new Float32Array(0x1);const uInt8Float32Array=new Uint8Array(float32Array[_0x2817('0x2')]);const float64Array=new Float64Array(0x1);const uInt8Float64Array=new Uint8Array(float64Array['buffer']);float32Array[0x0]=-0x1;const bigEndian=uInt8Float32Array[0x3]===0x0;function checkBounds(_0x449bb7,_0x1330fd,_0x5d8991){validateNumber(_0x1330fd,_0x2817('0x3'));if(_0x449bb7[_0x1330fd]===undefined||_0x449bb7[_0x1330fd+_0x5d8991]===undefined)boundsError(_0x1330fd,_0x449bb7[_0x2817('0x4')]-(_0x5d8991+0x1));}function checkInt(_0x3b36f3,_0x241d3f,_0x17c76d,_0xa79ae8,_0x5d8073,_0x1c56dd){if(_0x3b36f3>_0x17c76d||_0x3b36f3<_0x241d3f){throw new ERR_OUT_OF_RANGE('value','>=\x20'+_0x241d3f+_0x2817('0x5')+_0x17c76d,_0x3b36f3);}checkBounds(_0xa79ae8,_0x5d8073,_0x1c56dd);}function boundsError(_0x578808,_0xe77b43,_0x5ed363){if(Math['floor'](_0x578808)!==_0x578808){validateNumber(_0x578808,_0x5ed363);throw new ERR_OUT_OF_RANGE(_0x5ed363||_0x2817('0x3'),'an\x20integer',_0x578808);}if(_0xe77b43<0x0)throw new ERR_BUFFER_OUT_OF_BOUNDS();throw new ERR_OUT_OF_RANGE(_0x5ed363||_0x2817('0x3'),'>=\x20'+(_0x5ed363?0x1:0x0)+_0x2817('0x5')+_0xe77b43,_0x578808);}function readUIntLE(_0x19e8fd,_0x224edc){if(_0x19e8fd===undefined)throw new ERR_INVALID_ARG_TYPE(_0x2817('0x3'),'number',_0x19e8fd);if(_0x224edc===0x6)return readUInt48LE(this,_0x19e8fd);if(_0x224edc===0x5)return readUInt40LE(this,_0x19e8fd);if(_0x224edc===0x3)return readUInt24LE(this,_0x19e8fd);if(_0x224edc===0x4)return this[_0x2817('0x6')](_0x19e8fd);if(_0x224edc===0x2)return this[_0x2817('0x7')](_0x19e8fd);if(_0x224edc===0x1)return this[_0x2817('0x8')](_0x19e8fd);boundsError(_0x224edc,0x6,_0x2817('0x9'));}function readUInt48LE(_0x3da1ee,_0x259217=0x0){validateNumber(_0x259217,_0x2817('0x3'));const _0x57ce41=_0x3da1ee[_0x259217];const _0x25e114=_0x3da1ee[_0x259217+0x5];if(_0x57ce41===undefined||_0x25e114===undefined)boundsError(_0x259217,_0x3da1ee[_0x2817('0x4')]-0x6);return _0x57ce41+_0x3da1ee[++_0x259217]*0x2**0x8+_0x3da1ee[++_0x259217]*0x2**0x10+_0x3da1ee[++_0x259217]*0x2**0x18+(_0x3da1ee[++_0x259217]+_0x25e114*0x2**0x8)*0x2**0x20;}function readUInt40LE(_0x4270dc,_0x1ac8b5=0x0){validateNumber(_0x1ac8b5,_0x2817('0x3'));const _0x14bac9=_0x4270dc[_0x1ac8b5];const _0x2f5106=_0x4270dc[_0x1ac8b5+0x4];if(_0x14bac9===undefined||_0x2f5106===undefined)boundsError(_0x1ac8b5,_0x4270dc[_0x2817('0x4')]-0x5);return _0x14bac9+_0x4270dc[++_0x1ac8b5]*0x2**0x8+_0x4270dc[++_0x1ac8b5]*0x2**0x10+_0x4270dc[++_0x1ac8b5]*0x2**0x18+_0x2f5106*0x2**0x20;}function readUInt32LE(_0x36dc9e=0x0){validateNumber(_0x36dc9e,_0x2817('0x3'));const _0x514d1c=this[_0x36dc9e];const _0x1bf1fc=this[_0x36dc9e+0x3];if(_0x514d1c===undefined||_0x1bf1fc===undefined)boundsError(_0x36dc9e,this['length']-0x4);return _0x514d1c+this[++_0x36dc9e]*0x2**0x8+this[++_0x36dc9e]*0x2**0x10+_0x1bf1fc*0x2**0x18;}function readUInt24LE(_0x5025ec,_0x139ce4=0x0){validateNumber(_0x139ce4,_0x2817('0x3'));const _0x2393ab=_0x5025ec[_0x139ce4];const _0x2c6809=_0x5025ec[_0x139ce4+0x2];if(_0x2393ab===undefined||_0x2c6809===undefined)boundsError(_0x139ce4,_0x5025ec[_0x2817('0x4')]-0x3);return _0x2393ab+_0x5025ec[++_0x139ce4]*0x2**0x8+_0x2c6809*0x2**0x10;}function readUInt16LE(_0x593058=0x0){validateNumber(_0x593058,_0x2817('0x3'));const _0x38c59c=this[_0x593058];const _0x43fd50=this[_0x593058+0x1];if(_0x38c59c===undefined||_0x43fd50===undefined)boundsError(_0x593058,this[_0x2817('0x4')]-0x2);return _0x38c59c+_0x43fd50*0x2**0x8;}function readUInt8(_0x7a3f1f=0x0){validateNumber(_0x7a3f1f,_0x2817('0x3'));const _0x1b3e95=this[_0x7a3f1f];if(_0x1b3e95===undefined)boundsError(_0x7a3f1f,this[_0x2817('0x4')]-0x1);return _0x1b3e95;}function readUIntBE(_0x5524ef,_0x461971){if(_0x5524ef===undefined)throw new ERR_INVALID_ARG_TYPE(_0x2817('0x3'),_0x2817('0xa'),_0x5524ef);if(_0x461971===0x6)return readUInt48BE(this,_0x5524ef);if(_0x461971===0x5)return readUInt40BE(this,_0x5524ef);if(_0x461971===0x3)return readUInt24BE(this,_0x5524ef);if(_0x461971===0x4)return this[_0x2817('0xb')](_0x5524ef);if(_0x461971===0x2)return this[_0x2817('0xc')](_0x5524ef);if(_0x461971===0x1)return this[_0x2817('0x8')](_0x5524ef);boundsError(_0x461971,0x6,_0x2817('0x9'));}function readUInt48BE(_0x5345d1,_0x4de4da=0x0){validateNumber(_0x4de4da,_0x2817('0x3'));const _0x3072eb=_0x5345d1[_0x4de4da];const _0x455d81=_0x5345d1[_0x4de4da+0x5];if(_0x3072eb===undefined||_0x455d81===undefined)boundsError(_0x4de4da,_0x5345d1[_0x2817('0x4')]-0x6);return(_0x3072eb*0x2**0x8+_0x5345d1[++_0x4de4da])*0x2**0x20+_0x5345d1[++_0x4de4da]*0x2**0x18+_0x5345d1[++_0x4de4da]*0x2**0x10+_0x5345d1[++_0x4de4da]*0x2**0x8+_0x455d81;}function readUInt40BE(_0x599045,_0x128106=0x0){validateNumber(_0x128106,'offset');const _0x38f41a=_0x599045[_0x128106];const _0x5948e1=_0x599045[_0x128106+0x4];if(_0x38f41a===undefined||_0x5948e1===undefined)boundsError(_0x128106,_0x599045[_0x2817('0x4')]-0x5);return _0x38f41a*0x2**0x20+_0x599045[++_0x128106]*0x2**0x18+_0x599045[++_0x128106]*0x2**0x10+_0x599045[++_0x128106]*0x2**0x8+_0x5948e1;}function readUInt32BE(_0x1c2b5b=0x0){validateNumber(_0x1c2b5b,_0x2817('0x3'));const _0xeb0d36=this[_0x1c2b5b];const _0x5c6430=this[_0x1c2b5b+0x3];if(_0xeb0d36===undefined||_0x5c6430===undefined)boundsError(_0x1c2b5b,this['length']-0x4);return _0xeb0d36*0x2**0x18+this[++_0x1c2b5b]*0x2**0x10+this[++_0x1c2b5b]*0x2**0x8+_0x5c6430;}function readUInt24BE(_0x37bcda,_0x2c8696=0x0){validateNumber(_0x2c8696,'offset');const _0x516505=_0x37bcda[_0x2c8696];const _0x301223=_0x37bcda[_0x2c8696+0x2];if(_0x516505===undefined||_0x301223===undefined)boundsError(_0x2c8696,_0x37bcda[_0x2817('0x4')]-0x3);return _0x516505*0x2**0x10+_0x37bcda[++_0x2c8696]*0x2**0x8+_0x301223;}function readUInt16BE(_0x154c24=0x0){validateNumber(_0x154c24,_0x2817('0x3'));const _0x115d05=this[_0x154c24];const _0x54df23=this[_0x154c24+0x1];if(_0x115d05===undefined||_0x54df23===undefined)boundsError(_0x154c24,this['length']-0x2);return _0x115d05*0x2**0x8+_0x54df23;}function readIntLE(_0x83638,_0x3a6237){if(_0x83638===undefined)throw new ERR_INVALID_ARG_TYPE(_0x2817('0x3'),_0x2817('0xa'),_0x83638);if(_0x3a6237===0x6)return readInt48LE(this,_0x83638);if(_0x3a6237===0x5)return readInt40LE(this,_0x83638);if(_0x3a6237===0x3)return readInt24LE(this,_0x83638);if(_0x3a6237===0x4)return this[_0x2817('0xd')](_0x83638);if(_0x3a6237===0x2)return this[_0x2817('0xe')](_0x83638);if(_0x3a6237===0x1)return this[_0x2817('0xf')](_0x83638);boundsError(_0x3a6237,0x6,_0x2817('0x9'));}function readInt48LE(_0x4a1301,_0x418e19=0x0){validateNumber(_0x418e19,_0x2817('0x3'));const _0x3ebd66=_0x4a1301[_0x418e19];const _0x4b814d=_0x4a1301[_0x418e19+0x5];if(_0x3ebd66===undefined||_0x4b814d===undefined)boundsError(_0x418e19,_0x4a1301[_0x2817('0x4')]-0x6);const _0x8e1f66=_0x4a1301[_0x418e19+0x4]+_0x4b814d*0x2**0x8;return(_0x8e1f66|(_0x8e1f66&0x2**0xf)*0x1fffe)*0x2**0x20+_0x3ebd66+_0x4a1301[++_0x418e19]*0x2**0x8+_0x4a1301[++_0x418e19]*0x2**0x10+_0x4a1301[++_0x418e19]*0x2**0x18;}function readInt40LE(_0x100298,_0x183804=0x0){validateNumber(_0x183804,_0x2817('0x3'));const _0x7f9b6=_0x100298[_0x183804];const _0x59a0f5=_0x100298[_0x183804+0x4];if(_0x7f9b6===undefined||_0x59a0f5===undefined)boundsError(_0x183804,_0x100298[_0x2817('0x4')]-0x5);return(_0x59a0f5|(_0x59a0f5&0x2**0x7)*0x1fffffe)*0x2**0x20+_0x7f9b6+_0x100298[++_0x183804]*0x2**0x8+_0x100298[++_0x183804]*0x2**0x10+_0x100298[++_0x183804]*0x2**0x18;}function readInt32LE(_0x4dda3a=0x0){validateNumber(_0x4dda3a,_0x2817('0x3'));const _0x1e0ea0=this[_0x4dda3a];const _0x116fbb=this[_0x4dda3a+0x3];if(_0x1e0ea0===undefined||_0x116fbb===undefined)boundsError(_0x4dda3a,this[_0x2817('0x4')]-0x4);return _0x1e0ea0+this[++_0x4dda3a]*0x2**0x8+this[++_0x4dda3a]*0x2**0x10+(_0x116fbb<<0x18);}function readInt24LE(_0x3fd946,_0xb4f56e=0x0){validateNumber(_0xb4f56e,_0x2817('0x3'));const _0x200eed=_0x3fd946[_0xb4f56e];const _0x491466=_0x3fd946[_0xb4f56e+0x2];if(_0x200eed===undefined||_0x491466===undefined)boundsError(_0xb4f56e,_0x3fd946['length']-0x3);const _0x294a41=_0x200eed+_0x3fd946[++_0xb4f56e]*0x2**0x8+_0x491466*0x2**0x10;return _0x294a41|(_0x294a41&0x2**0x17)*0x1fe;}function readInt16LE(_0x4fc0a0=0x0){validateNumber(_0x4fc0a0,'offset');const _0x1cb99f=this[_0x4fc0a0];const _0x24c156=this[_0x4fc0a0+0x1];if(_0x1cb99f===undefined||_0x24c156===undefined)boundsError(_0x4fc0a0,this[_0x2817('0x4')]-0x2);const _0x4edc50=_0x1cb99f+_0x24c156*0x2**0x8;return _0x4edc50|(_0x4edc50&0x2**0xf)*0x1fffe;}function readInt8(_0x2bb6d1=0x0){validateNumber(_0x2bb6d1,_0x2817('0x3'));const _0x27566a=this[_0x2bb6d1];if(_0x27566a===undefined)boundsError(_0x2bb6d1,this[_0x2817('0x4')]-0x1);return _0x27566a|(_0x27566a&0x2**0x7)*0x1fffffe;}function readIntBE(_0x164554,_0x3a34c6){if(_0x164554===undefined)throw new ERR_INVALID_ARG_TYPE(_0x2817('0x3'),_0x2817('0xa'),_0x164554);if(_0x3a34c6===0x6)return readInt48BE(this,_0x164554);if(_0x3a34c6===0x5)return readInt40BE(this,_0x164554);if(_0x3a34c6===0x3)return readInt24BE(this,_0x164554);if(_0x3a34c6===0x4)return this[_0x2817('0x10')](_0x164554);if(_0x3a34c6===0x2)return this['readInt16BE'](_0x164554);if(_0x3a34c6===0x1)return this[_0x2817('0xf')](_0x164554);boundsError(_0x3a34c6,0x6,_0x2817('0x9'));}function readInt48BE(_0x2cf966,_0x5b8c8d=0x0){validateNumber(_0x5b8c8d,_0x2817('0x3'));const _0x4cfc17=_0x2cf966[_0x5b8c8d];const _0x4a5ad1=_0x2cf966[_0x5b8c8d+0x5];if(_0x4cfc17===undefined||_0x4a5ad1===undefined)boundsError(_0x5b8c8d,_0x2cf966[_0x2817('0x4')]-0x6);const _0x44d739=_0x2cf966[++_0x5b8c8d]+_0x4cfc17*0x2**0x8;return(_0x44d739|(_0x44d739&0x2**0xf)*0x1fffe)*0x2**0x20+_0x2cf966[++_0x5b8c8d]*0x2**0x18+_0x2cf966[++_0x5b8c8d]*0x2**0x10+_0x2cf966[++_0x5b8c8d]*0x2**0x8+_0x4a5ad1;}function readInt40BE(_0x472863,_0x59446f=0x0){validateNumber(_0x59446f,_0x2817('0x3'));const _0x81f855=_0x472863[_0x59446f];const _0x39d77b=_0x472863[_0x59446f+0x4];if(_0x81f855===undefined||_0x39d77b===undefined)boundsError(_0x59446f,_0x472863['length']-0x5);return(_0x81f855|(_0x81f855&0x2**0x7)*0x1fffffe)*0x2**0x20+_0x472863[++_0x59446f]*0x2**0x18+_0x472863[++_0x59446f]*0x2**0x10+_0x472863[++_0x59446f]*0x2**0x8+_0x39d77b;}function readInt32BE(_0x255f0f=0x0){validateNumber(_0x255f0f,_0x2817('0x3'));const _0x2a8276=this[_0x255f0f];const _0x381351=this[_0x255f0f+0x3];if(_0x2a8276===undefined||_0x381351===undefined)boundsError(_0x255f0f,this[_0x2817('0x4')]-0x4);return(_0x2a8276<<0x18)+this[++_0x255f0f]*0x2**0x10+this[++_0x255f0f]*0x2**0x8+_0x381351;}function readInt24BE(_0x2b58d1,_0x2a47d3=0x0){validateNumber(_0x2a47d3,_0x2817('0x3'));const _0x5af911=_0x2b58d1[_0x2a47d3];const _0x2d6a32=_0x2b58d1[_0x2a47d3+0x2];if(_0x5af911===undefined||_0x2d6a32===undefined)boundsError(_0x2a47d3,_0x2b58d1[_0x2817('0x4')]-0x3);const _0x1a7de8=_0x5af911*0x2**0x10+_0x2b58d1[++_0x2a47d3]*0x2**0x8+_0x2d6a32;return _0x1a7de8|(_0x1a7de8&0x2**0x17)*0x1fe;}function readInt16BE(_0x1f2ec2=0x0){validateNumber(_0x1f2ec2,_0x2817('0x3'));const _0x25dc5d=this[_0x1f2ec2];const _0x29181f=this[_0x1f2ec2+0x1];if(_0x25dc5d===undefined||_0x29181f===undefined)boundsError(_0x1f2ec2,this[_0x2817('0x4')]-0x2);const _0x47423a=_0x25dc5d*0x2**0x8+_0x29181f;return _0x47423a|(_0x47423a&0x2**0xf)*0x1fffe;}function readFloatBackwards(_0xdc375e=0x0){validateNumber(_0xdc375e,_0x2817('0x3'));const _0x1898d3=this[_0xdc375e];const _0x167440=this[_0xdc375e+0x3];if(_0x1898d3===undefined||_0x167440===undefined)boundsError(_0xdc375e,this[_0x2817('0x4')]-0x4);uInt8Float32Array[0x3]=_0x1898d3;uInt8Float32Array[0x2]=this[++_0xdc375e];uInt8Float32Array[0x1]=this[++_0xdc375e];uInt8Float32Array[0x0]=_0x167440;return float32Array[0x0];}function readFloatForwards(_0x5b2b4e=0x0){validateNumber(_0x5b2b4e,_0x2817('0x3'));const _0x3ddb90=this[_0x5b2b4e];const _0x5c85ed=this[_0x5b2b4e+0x3];if(_0x3ddb90===undefined||_0x5c85ed===undefined)boundsError(_0x5b2b4e,this[_0x2817('0x4')]-0x4);uInt8Float32Array[0x0]=_0x3ddb90;uInt8Float32Array[0x1]=this[++_0x5b2b4e];uInt8Float32Array[0x2]=this[++_0x5b2b4e];uInt8Float32Array[0x3]=_0x5c85ed;return float32Array[0x0];}function readDoubleBackwards(_0x147654=0x0){validateNumber(_0x147654,_0x2817('0x3'));const _0x32ccae=this[_0x147654];const _0x58ecf5=this[_0x147654+0x7];if(_0x32ccae===undefined||_0x58ecf5===undefined)boundsError(_0x147654,this[_0x2817('0x4')]-0x8);uInt8Float64Array[0x7]=_0x32ccae;uInt8Float64Array[0x6]=this[++_0x147654];uInt8Float64Array[0x5]=this[++_0x147654];uInt8Float64Array[0x4]=this[++_0x147654];uInt8Float64Array[0x3]=this[++_0x147654];uInt8Float64Array[0x2]=this[++_0x147654];uInt8Float64Array[0x1]=this[++_0x147654];uInt8Float64Array[0x0]=_0x58ecf5;return float64Array[0x0];}function readDoubleForwards(_0x138f51=0x0){validateNumber(_0x138f51,_0x2817('0x3'));const _0x24aebe=this[_0x138f51];const _0x25292d=this[_0x138f51+0x7];if(_0x24aebe===undefined||_0x25292d===undefined)boundsError(_0x138f51,this[_0x2817('0x4')]-0x8);uInt8Float64Array[0x0]=_0x24aebe;uInt8Float64Array[0x1]=this[++_0x138f51];uInt8Float64Array[0x2]=this[++_0x138f51];uInt8Float64Array[0x3]=this[++_0x138f51];uInt8Float64Array[0x4]=this[++_0x138f51];uInt8Float64Array[0x5]=this[++_0x138f51];uInt8Float64Array[0x6]=this[++_0x138f51];uInt8Float64Array[0x7]=_0x25292d;return float64Array[0x0];}function writeUIntLE(_0x44b368,_0x1d42d4,_0x5b64cc){if(_0x5b64cc===0x6)return writeU_Int48LE(this,_0x44b368,_0x1d42d4,0x0,0xffffffffffff);if(_0x5b64cc===0x5)return writeU_Int40LE(this,_0x44b368,_0x1d42d4,0x0,0xffffffffff);if(_0x5b64cc===0x3)return writeU_Int24LE(this,_0x44b368,_0x1d42d4,0x0,0xffffff);if(_0x5b64cc===0x4)return writeU_Int32LE(this,_0x44b368,_0x1d42d4,0x0,0xffffffff);if(_0x5b64cc===0x2)return writeU_Int16LE(this,_0x44b368,_0x1d42d4,0x0,0xffff);if(_0x5b64cc===0x1)return writeU_Int8(this,_0x44b368,_0x1d42d4,0x0,0xff);boundsError(_0x5b64cc,0x6,_0x2817('0x9'));}function writeU_Int48LE(_0x1ad20e,_0xf9e86a,_0x38a3dc,_0x175546,_0x222984){_0xf9e86a=+_0xf9e86a;checkInt(_0xf9e86a,_0x175546,_0x222984,_0x1ad20e,_0x38a3dc,0x5);const _0x49fe30=Math[_0x2817('0x11')](_0xf9e86a*0x2**-0x20);_0x1ad20e[_0x38a3dc++]=_0xf9e86a;_0xf9e86a=_0xf9e86a>>>0x8;_0x1ad20e[_0x38a3dc++]=_0xf9e86a;_0xf9e86a=_0xf9e86a>>>0x8;_0x1ad20e[_0x38a3dc++]=_0xf9e86a;_0xf9e86a=_0xf9e86a>>>0x8;_0x1ad20e[_0x38a3dc++]=_0xf9e86a;_0x1ad20e[_0x38a3dc++]=_0x49fe30;_0x1ad20e[_0x38a3dc++]=_0x49fe30>>>0x8;return _0x38a3dc;}function writeU_Int40LE(_0x6020ed,_0x413b58,_0x20ca9c,_0x1df662,_0x157706){_0x413b58=+_0x413b58;checkInt(_0x413b58,_0x1df662,_0x157706,_0x6020ed,_0x20ca9c,0x4);const _0x45f00d=_0x413b58;_0x6020ed[_0x20ca9c++]=_0x413b58;_0x413b58=_0x413b58>>>0x8;_0x6020ed[_0x20ca9c++]=_0x413b58;_0x413b58=_0x413b58>>>0x8;_0x6020ed[_0x20ca9c++]=_0x413b58;_0x413b58=_0x413b58>>>0x8;_0x6020ed[_0x20ca9c++]=_0x413b58;_0x6020ed[_0x20ca9c++]=Math['floor'](_0x45f00d*0x2**-0x20);return _0x20ca9c;}function writeU_Int32LE(_0x5a44f5,_0x3bb0df,_0xa1745d,_0x4dca79,_0x1c415b){_0x3bb0df=+_0x3bb0df;checkInt(_0x3bb0df,_0x4dca79,_0x1c415b,_0x5a44f5,_0xa1745d,0x3);_0x5a44f5[_0xa1745d++]=_0x3bb0df;_0x3bb0df=_0x3bb0df>>>0x8;_0x5a44f5[_0xa1745d++]=_0x3bb0df;_0x3bb0df=_0x3bb0df>>>0x8;_0x5a44f5[_0xa1745d++]=_0x3bb0df;_0x3bb0df=_0x3bb0df>>>0x8;_0x5a44f5[_0xa1745d++]=_0x3bb0df;return _0xa1745d;}function writeUInt32LE(_0x801110,_0x262896=0x0){return writeU_Int32LE(this,_0x801110,_0x262896,0x0,0xffffffff);}function writeU_Int24LE(_0x39101a,_0x3f4a00,_0x9cff3f,_0x768050,_0x185bc6){_0x3f4a00=+_0x3f4a00;checkInt(_0x3f4a00,_0x768050,_0x185bc6,_0x39101a,_0x9cff3f,0x2);_0x39101a[_0x9cff3f++]=_0x3f4a00;_0x3f4a00=_0x3f4a00>>>0x8;_0x39101a[_0x9cff3f++]=_0x3f4a00;_0x3f4a00=_0x3f4a00>>>0x8;_0x39101a[_0x9cff3f++]=_0x3f4a00;return _0x9cff3f;}function writeU_Int16LE(_0x3ca390,_0x5907fb,_0x16d951,_0x70754a,_0x40088b){_0x5907fb=+_0x5907fb;checkInt(_0x5907fb,_0x70754a,_0x40088b,_0x3ca390,_0x16d951,0x1);_0x3ca390[_0x16d951++]=_0x5907fb;_0x3ca390[_0x16d951++]=_0x5907fb>>>0x8;return _0x16d951;}function writeUInt16LE(_0x9f8fdc,_0x557c52=0x0){return writeU_Int16LE(this,_0x9f8fdc,_0x557c52,0x0,0xffff);}function writeU_Int8(_0x541065,_0x26752d,_0x63d2c1,_0x50cf0d,_0x17e594){_0x26752d=+_0x26752d;validateNumber(_0x63d2c1,_0x2817('0x3'));if(_0x26752d>_0x17e594||_0x26752d<_0x50cf0d){throw new ERR_OUT_OF_RANGE(_0x2817('0x12'),'>=\x20'+_0x50cf0d+_0x2817('0x5')+_0x17e594,_0x26752d);}if(_0x541065[_0x63d2c1]===undefined)boundsError(_0x63d2c1,_0x541065[_0x2817('0x4')]-0x1);_0x541065[_0x63d2c1]=_0x26752d;return _0x63d2c1+0x1;}function writeUInt8(_0x5d5069,_0x1a60f2=0x0){return writeU_Int8(this,_0x5d5069,_0x1a60f2,0x0,0xff);}function writeUIntBE(_0x37a2ba,_0x2930e2,_0x158bf7){if(_0x158bf7===0x6)return writeU_Int48BE(this,_0x37a2ba,_0x2930e2,0x0,0x100000000000000);if(_0x158bf7===0x5)return writeU_Int40BE(this,_0x37a2ba,_0x2930e2,0x0,0xffffffffff);if(_0x158bf7===0x3)return writeU_Int24BE(this,_0x37a2ba,_0x2930e2,0x0,0xffffff);if(_0x158bf7===0x4)return writeU_Int32BE(this,_0x37a2ba,_0x2930e2,0x0,0xffffffff);if(_0x158bf7===0x2)return writeU_Int16BE(this,_0x37a2ba,_0x2930e2,0x0,0xffff);if(_0x158bf7===0x1)return writeU_Int8(this,_0x37a2ba,_0x2930e2,0x0,0xff);boundsError(_0x158bf7,0x6,'byteLength');}function writeU_Int48BE(_0x44cb52,_0x2488dd,_0x4c7259,_0x2511fb,_0x1b05f4){_0x2488dd=+_0x2488dd;checkInt(_0x2488dd,_0x2511fb,_0x1b05f4,_0x44cb52,_0x4c7259,0x5);const _0x672659=Math[_0x2817('0x11')](_0x2488dd*0x2**-0x20);_0x44cb52[_0x4c7259++]=_0x672659>>>0x8;_0x44cb52[_0x4c7259++]=_0x672659;_0x44cb52[_0x4c7259+0x3]=_0x2488dd;_0x2488dd=_0x2488dd>>>0x8;_0x44cb52[_0x4c7259+0x2]=_0x2488dd;_0x2488dd=_0x2488dd>>>0x8;_0x44cb52[_0x4c7259+0x1]=_0x2488dd;_0x2488dd=_0x2488dd>>>0x8;_0x44cb52[_0x4c7259]=_0x2488dd;return _0x4c7259+0x4;}function writeU_Int40BE(_0x5b5aa9,_0x282f41,_0x47b163,_0x23118f,_0x169474){_0x282f41=+_0x282f41;checkInt(_0x282f41,_0x23118f,_0x169474,_0x5b5aa9,_0x47b163,0x4);_0x5b5aa9[_0x47b163++]=Math[_0x2817('0x11')](_0x282f41*0x2**-0x20);_0x5b5aa9[_0x47b163+0x3]=_0x282f41;_0x282f41=_0x282f41>>>0x8;_0x5b5aa9[_0x47b163+0x2]=_0x282f41;_0x282f41=_0x282f41>>>0x8;_0x5b5aa9[_0x47b163+0x1]=_0x282f41;_0x282f41=_0x282f41>>>0x8;_0x5b5aa9[_0x47b163]=_0x282f41;return _0x47b163+0x4;}function writeU_Int32BE(_0x1ec737,_0x12576d,_0x184ebf,_0x19f5ec,_0x17bd86){_0x12576d=+_0x12576d;checkInt(_0x12576d,_0x19f5ec,_0x17bd86,_0x1ec737,_0x184ebf,0x3);_0x1ec737[_0x184ebf+0x3]=_0x12576d;_0x12576d=_0x12576d>>>0x8;_0x1ec737[_0x184ebf+0x2]=_0x12576d;_0x12576d=_0x12576d>>>0x8;_0x1ec737[_0x184ebf+0x1]=_0x12576d;_0x12576d=_0x12576d>>>0x8;_0x1ec737[_0x184ebf]=_0x12576d;return _0x184ebf+0x4;}function writeUInt32BE(_0x5ecc0c,_0x5e85fe=0x0){return writeU_Int32BE(this,_0x5ecc0c,_0x5e85fe,0x0,0xffffffff);}function writeU_Int24BE(_0x593f2f,_0x200fe0,_0x22a9a4,_0x3666c5,_0x41bfb9){_0x200fe0=+_0x200fe0;checkInt(_0x200fe0,_0x3666c5,_0x41bfb9,_0x593f2f,_0x22a9a4,0x2);_0x593f2f[_0x22a9a4+0x2]=_0x200fe0;_0x200fe0=_0x200fe0>>>0x8;_0x593f2f[_0x22a9a4+0x1]=_0x200fe0;_0x200fe0=_0x200fe0>>>0x8;_0x593f2f[_0x22a9a4]=_0x200fe0;return _0x22a9a4+0x3;}function writeU_Int16BE(_0x373992,_0x178c61,_0xd9f922,_0x20da3c,_0x12b91d){_0x178c61=+_0x178c61;checkInt(_0x178c61,_0x20da3c,_0x12b91d,_0x373992,_0xd9f922,0x1);_0x373992[_0xd9f922++]=_0x178c61>>>0x8;_0x373992[_0xd9f922++]=_0x178c61;return _0xd9f922;}function writeUInt16BE(_0x4d8ee7,_0x56cbda=0x0){return writeU_Int16BE(this,_0x4d8ee7,_0x56cbda,0x0,0xffff);}function writeIntLE(_0x3fe342,_0x1aab49,_0x262a99){if(_0x262a99===0x6)return writeU_Int48LE(this,_0x3fe342,_0x1aab49,-0x800000000000,0x7fffffffffff);if(_0x262a99===0x5)return writeU_Int40LE(this,_0x3fe342,_0x1aab49,-0x8000000000,0x7fffffffff);if(_0x262a99===0x3)return writeU_Int24LE(this,_0x3fe342,_0x1aab49,-0x800000,0x7fffff);if(_0x262a99===0x4)return writeU_Int32LE(this,_0x3fe342,_0x1aab49,-0x80000000,0x7fffffff);if(_0x262a99===0x2)return writeU_Int16LE(this,_0x3fe342,_0x1aab49,-0x8000,0x7fff);if(_0x262a99===0x1)return writeU_Int8(this,_0x3fe342,_0x1aab49,-0x80,0x7f);boundsError(_0x262a99,0x6,_0x2817('0x9'));}function writeInt32LE(_0x49a918,_0x42ec0d=0x0){return writeU_Int32LE(this,_0x49a918,_0x42ec0d,-0x80000000,0x7fffffff);}function writeInt16LE(_0x591e7f,_0x4c45de=0x0){return writeU_Int16LE(this,_0x591e7f,_0x4c45de,-0x8000,0x7fff);}function writeInt8(_0x40e132,_0x2d9c06=0x0){return writeU_Int8(this,_0x40e132,_0x2d9c06,-0x80,0x7f);}function writeIntBE(_0x1e9672,_0x5151f8,_0x13072e){if(_0x13072e===0x6)return writeU_Int48BE(this,_0x1e9672,_0x5151f8,-0x800000000000,0x7fffffffffff);if(_0x13072e===0x5)return writeU_Int40BE(this,_0x1e9672,_0x5151f8,-0x8000000000,0x7fffffffff);if(_0x13072e===0x3)return writeU_Int24BE(this,_0x1e9672,_0x5151f8,-0x800000,0x7fffff);if(_0x13072e===0x4)return writeU_Int32BE(this,_0x1e9672,_0x5151f8,-0x80000000,0x7fffffff);if(_0x13072e===0x2)return writeU_Int16BE(this,_0x1e9672,_0x5151f8,-0x8000,0x7fff);if(_0x13072e===0x1)return writeU_Int8(this,_0x1e9672,_0x5151f8,-0x80,0x7f);boundsError(_0x13072e,0x6,_0x2817('0x9'));}function writeInt32BE(_0x1ac52c,_0x3cd18b=0x0){return writeU_Int32BE(this,_0x1ac52c,_0x3cd18b,-0x80000000,0x7fffffff);}function writeInt16BE(_0x500f8a,_0x2cbfe5=0x0){return writeU_Int16BE(this,_0x500f8a,_0x2cbfe5,-0x8000,0x7fff);}function writeDoubleForwards(_0x23e49e,_0x3cc6f7=0x0){_0x23e49e=+_0x23e49e;checkBounds(this,_0x3cc6f7,0x7);float64Array[0x0]=_0x23e49e;this[_0x3cc6f7++]=uInt8Float64Array[0x0];this[_0x3cc6f7++]=uInt8Float64Array[0x1];this[_0x3cc6f7++]=uInt8Float64Array[0x2];this[_0x3cc6f7++]=uInt8Float64Array[0x3];this[_0x3cc6f7++]=uInt8Float64Array[0x4];this[_0x3cc6f7++]=uInt8Float64Array[0x5];this[_0x3cc6f7++]=uInt8Float64Array[0x6];this[_0x3cc6f7++]=uInt8Float64Array[0x7];return _0x3cc6f7;}function writeDoubleBackwards(_0x3b74ad,_0x134543=0x0){_0x3b74ad=+_0x3b74ad;checkBounds(this,_0x134543,0x7);float64Array[0x0]=_0x3b74ad;this[_0x134543++]=uInt8Float64Array[0x7];this[_0x134543++]=uInt8Float64Array[0x6];this[_0x134543++]=uInt8Float64Array[0x5];this[_0x134543++]=uInt8Float64Array[0x4];this[_0x134543++]=uInt8Float64Array[0x3];this[_0x134543++]=uInt8Float64Array[0x2];this[_0x134543++]=uInt8Float64Array[0x1];this[_0x134543++]=uInt8Float64Array[0x0];return _0x134543;}function writeFloatForwards(_0x2d2e6a,_0x2484fc=0x0){_0x2d2e6a=+_0x2d2e6a;checkBounds(this,_0x2484fc,0x3);float32Array[0x0]=_0x2d2e6a;this[_0x2484fc++]=uInt8Float32Array[0x0];this[_0x2484fc++]=uInt8Float32Array[0x1];this[_0x2484fc++]=uInt8Float32Array[0x2];this[_0x2484fc++]=uInt8Float32Array[0x3];return _0x2484fc;}function writeFloatBackwards(_0x4f95b2,_0x26e3dc=0x0){_0x4f95b2=+_0x4f95b2;checkBounds(this,_0x26e3dc,0x3);float32Array[0x0]=_0x4f95b2;this[_0x26e3dc++]=uInt8Float32Array[0x3];this[_0x26e3dc++]=uInt8Float32Array[0x2];this[_0x26e3dc++]=uInt8Float32Array[0x1];this[_0x26e3dc++]=uInt8Float32Array[0x0];return _0x26e3dc;}class FastBuffer extends Uint8Array{}function addBufferPrototypeMethods(_0x34631c){_0x34631c[_0x2817('0x13')]=readUIntLE;_0x34631c[_0x2817('0x6')]=readUInt32LE;_0x34631c['readUInt16LE']=readUInt16LE;_0x34631c[_0x2817('0x8')]=readUInt8;_0x34631c[_0x2817('0x14')]=readUIntBE;_0x34631c['readUInt32BE']=readUInt32BE;_0x34631c[_0x2817('0xc')]=readUInt16BE;_0x34631c[_0x2817('0x15')]=readIntLE;_0x34631c[_0x2817('0xd')]=readInt32LE;_0x34631c[_0x2817('0xe')]=readInt16LE;_0x34631c['readInt8']=readInt8;_0x34631c[_0x2817('0x16')]=readIntBE;_0x34631c[_0x2817('0x10')]=readInt32BE;_0x34631c[_0x2817('0x17')]=readInt16BE;_0x34631c[_0x2817('0x18')]=writeUIntLE;_0x34631c[_0x2817('0x19')]=writeUInt32LE;_0x34631c['writeUInt16LE']=writeUInt16LE;_0x34631c[_0x2817('0x1a')]=writeUInt8;_0x34631c[_0x2817('0x1b')]=writeUIntBE;_0x34631c['writeUInt32BE']=writeUInt32BE;_0x34631c[_0x2817('0x1c')]=writeUInt16BE;_0x34631c[_0x2817('0x1d')]=writeIntLE;_0x34631c[_0x2817('0x1e')]=writeInt32LE;_0x34631c['writeInt16LE']=writeInt16LE;_0x34631c[_0x2817('0x1f')]=writeInt8;_0x34631c[_0x2817('0x20')]=writeIntBE;_0x34631c['writeInt32BE']=writeInt32BE;_0x34631c[_0x2817('0x21')]=writeInt16BE;_0x34631c[_0x2817('0x22')]=bigEndian?readFloatBackwards:readFloatForwards;_0x34631c['readFloatBE']=bigEndian?readFloatForwards:readFloatBackwards;_0x34631c['readDoubleLE']=bigEndian?readDoubleBackwards:readDoubleForwards;_0x34631c[_0x2817('0x23')]=bigEndian?readDoubleForwards:readDoubleBackwards;_0x34631c[_0x2817('0x24')]=bigEndian?writeFloatBackwards:writeFloatForwards;_0x34631c[_0x2817('0x25')]=bigEndian?writeFloatForwards:writeFloatBackwards;_0x34631c[_0x2817('0x26')]=bigEndian?writeDoubleBackwards:writeDoubleForwards;_0x34631c['writeDoubleBE']=bigEndian?writeDoubleForwards:writeDoubleBackwards;_0x34631c[_0x2817('0x27')]=asciiSlice;_0x34631c[_0x2817('0x28')]=base64Slice;_0x34631c[_0x2817('0x29')]=latin1Slice;_0x34631c[_0x2817('0x2a')]=hexSlice;_0x34631c['ucs2Slice']=ucs2Slice;_0x34631c[_0x2817('0x2b')]=utf8Slice;_0x34631c[_0x2817('0x2c')]=asciiWrite;_0x34631c['base64Write']=base64Write;_0x34631c[_0x2817('0x2d')]=latin1Write;_0x34631c[_0x2817('0x2e')]=hexWrite;_0x34631c[_0x2817('0x2f')]=ucs2Write;_0x34631c[_0x2817('0x30')]=utf8Write;}module[_0x2817('0x31')]={'FastBuffer':FastBuffer,'addBufferPrototypeMethods':addBufferPrototypeMethods};