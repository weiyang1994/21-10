(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _modules = require('./modules1');

var _modules2 = require('./modules2');

var _modules3 = _interopRequireDefault(_modules2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(fn1)
// console.log(modules2)
(0, _modules.fn1)();
(0, _modules.fn2)();
_modules3.default.fn1();
_modules3.default.fn2();
},{"./modules1":2,"./modules2":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fn1 = fn1;
exports.fn2 = fn2;
// 分别暴露
function fn1() {
  console.log('这是模块化1的fn1函数');
}

function fn2() {
  console.log('这是模块化1的fn2函数');
}
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//统一暴露
function fn1() {
  console.log('这是模块化2的fn1执行的函数');
}

function fn2() {
  console.log('这是模块化2的fn2执行的函数');
}

exports.default = { fn1: fn1, fn2: fn2 };
},{}]},{},[1]);
