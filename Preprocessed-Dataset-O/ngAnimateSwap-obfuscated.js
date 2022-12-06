var _0x4554=['element','$watchCollection','leave','$animate'];(function(_0x14588b,_0x1b1bee){var _0x966b74=function(_0x274391){while(--_0x274391){_0x14588b['push'](_0x14588b['shift']());}};_0x966b74(++_0x1b1bee);}(_0x4554,0x10b));var _0xb27c=function(_0x5423c0,_0x1c37bf){_0x5423c0=_0x5423c0-0x0;var _0x2cb395=_0x4554[_0x5423c0];return _0x2cb395;};'use strict';/**
 * @ngdoc directive
 * @name ngAnimateSwap
 * @restrict A
 * @scope
 *
 * @description
 *
 * ngAnimateSwap is a animation-oriented directive that allows for the container to
 * be removed and entered in whenever the associated expression changes. A
 * common usecase for this directive is a rotating banner or slider component which
 * contains one image being present at a time. When the active image changes
 * then the old image will perform a `leave` animation and the new element
 * will be inserted via an `enter` animation.
 *
 * @animations
 * | Animation                        | Occurs                               |
 * |----------------------------------|--------------------------------------|
 * | {@link ng.$animate#enter enter}  | when the new element is inserted to the DOM  |
 * | {@link ng.$animate#leave leave}  | when the old element is removed from the DOM |
 *
 * @example
 * <example name="ngAnimateSwap-directive" module="ngAnimateSwapExample"
 *          deps="angular-animate.js"
 *          animations="true" fixBase="true">
 *   <file name="index.html">
 *     <div class="container" ng-controller="AppCtrl">
 *       <div ng-animate-swap="number" class="cell swap-animation" ng-class="colorClass(number)">
 *         {{ number }}
 *       </div>
 *     </div>
 *   </file>
 *   <file name="script.js">
 *     angular.module('ngAnimateSwapExample', ['ngAnimate'])
 *       .controller('AppCtrl', ['$scope', '$interval', function($scope, $interval) {
 *         $scope.number = 0;
 *         $interval(function() {
 *           $scope.number++;
 *         }, 1000);
 *
 *         var colors = ['red','blue','green','yellow','orange'];
 *         $scope.colorClass = function(number) {
 *           return colors[number % colors.length];
 *         };
 *       }]);
 *   </file>
 *  <file name="animations.css">
 *  .container {
 *    height:250px;
 *    width:250px;
 *    position:relative;
 *    overflow:hidden;
 *    border:2px solid black;
 *  }
 *  .container .cell {
 *    font-size:150px;
 *    text-align:center;
 *    line-height:250px;
 *    position:absolute;
 *    top:0;
 *    left:0;
 *    right:0;
 *    border-bottom:2px solid black;
 *  }
 *  .swap-animation.ng-enter, .swap-animation.ng-leave {
 *    transition:0.5s linear all;
 *  }
 *  .swap-animation.ng-enter {
 *    top:-250px;
 *  }
 *  .swap-animation.ng-enter-active {
 *    top:0px;
 *  }
 *  .swap-animation.ng-leave {
 *    top:0px;
 *  }
 *  .swap-animation.ng-leave-active {
 *    top:250px;
 *  }
 *  .red { background:red; }
 *  .green { background:green; }
 *  .blue { background:blue; }
 *  .yellow { background:yellow; }
 *  .orange { background:orange; }
 *  </file>
 * </example>
 */var ngAnimateSwapDirective=[_0xb27c('0x0'),function(_0x5c8ea5){return{'restrict':'A','transclude':_0xb27c('0x1'),'terminal':!![],'priority':0x226,'link':function(_0xfa322a,_0x50bb2f,_0x31762e,_0x1819b3,_0x1b6924){var _0x452c1e,_0x58c28b;_0xfa322a[_0xb27c('0x2')](_0x31762e['ngAnimateSwap']||_0x31762e['for'],function(_0x3f7bb1){if(_0x452c1e){_0x5c8ea5[_0xb27c('0x3')](_0x452c1e);}if(_0x58c28b){_0x58c28b['$destroy']();_0x58c28b=null;}if(_0x3f7bb1||_0x3f7bb1===0x0){_0x1b6924(function(_0x1bab79,_0xc8f213){_0x452c1e=_0x1bab79;_0x58c28b=_0xc8f213;_0x5c8ea5['enter'](_0x1bab79,null,_0x50bb2f);});}});}};}];