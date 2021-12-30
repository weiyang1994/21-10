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