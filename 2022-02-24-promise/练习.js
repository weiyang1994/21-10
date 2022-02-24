const promise = new Promise((resolve, reject) => {
  console.log(1);
  resolve();
  console.log(2);
  reject('error');
})
promise.then(() => {
  console.log(3);
}).catch(e => console.log(e))
console.log(4);
// 打印输出结果： 


// 红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？
// （用Promise实现）三个亮灯函数已经存在：
function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}
