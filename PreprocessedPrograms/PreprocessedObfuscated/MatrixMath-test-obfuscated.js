var _0x10e1=['toEqual','forEach','createRotateZ','rotationDegrees','decomposes\x20a\x204x4\x20matrix\x20to\x20produce\x20accurate\x20Y-axis\x20angles','reuseRotateYCommand','createIdentityMatrix','decomposes\x20a\x204x4\x20matrix\x20to\x20produce\x20accurate\x20X-axis\x20angles','reuseRotateXCommand','MatrixMath','map','decomposes\x20a\x204x4\x20matrix\x20to\x20produce\x20accurate\x20Z-axis\x20angles','decomposeMatrix'];(function(_0x2d37aa,_0x3dbd26){var _0x3cd7e2=function(_0x53a9c6){while(--_0x53a9c6){_0x2d37aa['push'](_0x2d37aa['shift']());}};_0x3cd7e2(++_0x3dbd26);}(_0x10e1,0x182));var _0x448f=function(_0x3a9bdb,_0x1b271a){_0x3a9bdb=_0x3a9bdb-0x0;var _0x29236f=_0x10e1[_0x3a9bdb];return _0x29236f;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';const MatrixMath=require(_0x448f('0x0'));function degreesToRadians(_0x493455){return _0x493455*Math['PI']/0xb4;}function convertZeroes(_0x5b3519){return _0x5b3519[_0x448f('0x1')](_0x5a1048=>_0x5a1048===-0x0?0x0:_0x5a1048);}describe(_0x448f('0x0'),()=>{it(_0x448f('0x2'),()=>{expect(MatrixMath[_0x448f('0x3')]([0x1,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x1,0x0,0x0,0x0,0x0,0x1])['rotationDegrees'])[_0x448f('0x4')]([0x0,0x0,0x0]);[0x1e,0x2d,0x3c,0x4b,0x5a,0x64,0x73,0x78,0x85,0xa7][_0x448f('0x5')](_0x56f3c3=>{let _0x7f3d4c=MatrixMath[_0x448f('0x6')](degreesToRadians(_0x56f3c3));expect(convertZeroes(MatrixMath[_0x448f('0x3')](_0x7f3d4c)[_0x448f('0x7')]))['toEqual']([0x0,0x0,_0x56f3c3]);_0x7f3d4c=MatrixMath[_0x448f('0x6')](degreesToRadians(-_0x56f3c3));expect(convertZeroes(MatrixMath[_0x448f('0x3')](_0x7f3d4c)['rotationDegrees']))[_0x448f('0x4')]([0x0,0x0,-_0x56f3c3]);});expect(MatrixMath[_0x448f('0x3')](MatrixMath['createRotateZ'](degreesToRadians(0xb4)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,0xb4]);expect(MatrixMath['decomposeMatrix'](MatrixMath['createRotateZ'](degreesToRadians(0xde)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,-0x8a]);expect(MatrixMath[_0x448f('0x3')](MatrixMath['createRotateZ'](degreesToRadians(0x10e)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,-0x5a]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(0x168)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,-0x0]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(33.33333333)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,33.333]);expect(MatrixMath[_0x448f('0x3')](MatrixMath['createRotateZ'](degreesToRadians(86.75309)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,86.753]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(42.00000000001)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,0x2a]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(42.99999999999)))['rotationDegrees'])['toEqual']([0x0,0x0,0x2b]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(42.49999999999)))[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,42.5]);expect(MatrixMath[_0x448f('0x3')](MatrixMath[_0x448f('0x6')](degreesToRadians(42.55555555555)))['rotationDegrees'])[_0x448f('0x4')]([0x0,0x0,42.556]);});it(_0x448f('0x8'),()=>{let _0x3c0f1f;[0x1e,0x2d,0x3c,0x4b,0x5a,0x64,0x6e,0x78,0x85,0xa7][_0x448f('0x5')](_0x5a855c=>{_0x3c0f1f=MatrixMath['createIdentityMatrix']();MatrixMath[_0x448f('0x9')](_0x3c0f1f,degreesToRadians(_0x5a855c));expect(convertZeroes(MatrixMath[_0x448f('0x3')](_0x3c0f1f)[_0x448f('0x7')]))[_0x448f('0x4')]([0x0,_0x5a855c,0x0]);_0x3c0f1f=MatrixMath[_0x448f('0xa')]();MatrixMath['reuseRotateYCommand'](_0x3c0f1f,degreesToRadians(-_0x5a855c));expect(convertZeroes(MatrixMath[_0x448f('0x3')](_0x3c0f1f)[_0x448f('0x7')]))['toEqual']([0x0,-_0x5a855c,0x0]);});_0x3c0f1f=MatrixMath[_0x448f('0xa')]();MatrixMath[_0x448f('0x9')](_0x3c0f1f,degreesToRadians(0xde));expect(MatrixMath['decomposeMatrix'](_0x3c0f1f)['rotationDegrees'])['toEqual']([0x0,-0x8a,0x0]);_0x3c0f1f=MatrixMath[_0x448f('0xa')]();MatrixMath['reuseRotateYCommand'](_0x3c0f1f,degreesToRadians(0x10e));expect(MatrixMath[_0x448f('0x3')](_0x3c0f1f)['rotationDegrees'])[_0x448f('0x4')]([0x0,-0x5a,0x0]);_0x3c0f1f=MatrixMath[_0x448f('0xa')]();MatrixMath[_0x448f('0x9')](_0x3c0f1f,degreesToRadians(0x168));expect(MatrixMath[_0x448f('0x3')](_0x3c0f1f)[_0x448f('0x7')])[_0x448f('0x4')]([0x0,0x0,0x0]);});it(_0x448f('0xb'),()=>{let _0x37c769;[0x1e,0x2d,0x3c,0x4b,0x5a,0x64,0x6e,0x78,0x85,0xa7][_0x448f('0x5')](_0x3d7a74=>{_0x37c769=MatrixMath[_0x448f('0xa')]();MatrixMath['reuseRotateXCommand'](_0x37c769,degreesToRadians(_0x3d7a74));expect(convertZeroes(MatrixMath['decomposeMatrix'](_0x37c769)[_0x448f('0x7')]))['toEqual']([_0x3d7a74,0x0,0x0]);});_0x37c769=MatrixMath['createIdentityMatrix']();MatrixMath['reuseRotateXCommand'](_0x37c769,degreesToRadians(0xde));expect(MatrixMath['decomposeMatrix'](_0x37c769)[_0x448f('0x7')])['toEqual']([-0x8a,0x0,0x0]);_0x37c769=MatrixMath[_0x448f('0xa')]();MatrixMath[_0x448f('0xc')](_0x37c769,degreesToRadians(0x10e));expect(MatrixMath[_0x448f('0x3')](_0x37c769)[_0x448f('0x7')])[_0x448f('0x4')]([-0x5a,0x0,0x0]);_0x37c769=MatrixMath[_0x448f('0xa')]();MatrixMath[_0x448f('0xc')](_0x37c769,degreesToRadians(0x168));expect(MatrixMath[_0x448f('0x3')](_0x37c769)['rotationDegrees'])[_0x448f('0x4')]([0x0,0x0,0x0]);});});