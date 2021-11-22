/**
 * 判断数组中是否所有的数字都大于 0
  编写函数 isAllNumPositive,满足

  isAllNumPositive([1, 2, 3, 4]);  // 输出 true
  isAllNumPositive([1, 2, 3, 4, -1]);  // 输出 false
  isAllNumPositive([1, 2, 3, 4, 'a', {a:3}]);  // 输出 true
 */
/**
  题意解析：
    1. 新建一个函数，函数名为 isAllNumPositive
    2. 这个函数接收一个参数，是一个数组 arr，返回值是一个布尔值
    3. 这个函数里的具体内容
      3.1 命名一个变量 resBool 来存这个结果，默认值是true，原因：只要有一项不满足就可以将这个结果置为false，结束循环。
      3.2 遍历这个数组 arr
      3.3 判断这个项的类型
        3.3.1 如果是数字，判断数字是否大于0，如果大于0，不用管；如果小于0，将resBool 设置为 false，同时 用 break 结束循环。将结果返回
        3.3.2 如果是对象，遍历这个对象，对象值的判断执行 3.3.1 的操作。
    4.将resBool 返回
*/
// 小技巧，可以调用一下函数，然后在函数里边就可以有值了，方便打印值调试。我举个例子。
function isAllNumPositive(arr) {
  console.log(arr);    //这里打印就像在外边打印一样，arr 具体的值有了
  let resBool = true ;
  for(let i=0;i<arr.length;i++){
    
    let item = arr[i];
    console.log('----', item)
    if (typeof item=="number"){
        if(item<0){
          resBool = false ;
          break;
        }
    }else{
      if(Object.prototype.toString.call(item)==='[object Object]'){
        console.log(item)
         for(let p in item){
           console.log(p,  item[p], item.a)
           let res = item[p];
           if(res<0){
             resBool = false;
             break;
           }
         }
         if(resBool==false){
           break;
         }
      }
    }
  }
  console.log(resBool)
  return resBool;
}
// 这里调用一下，把实参传入具体的值。 先把这个调通了，再去调其他调用案例。比如，这个实参里边没有对象，那么 3.3.2 可以先不处理；调用有对象的时候再去处理。
// isAllNumPositive([1, 2, 3, 4]);  
// isAllNumPositive([1, 2, 3, 4, 'a', {a:3}]);
// isAllNumPositive([1, 2, 3, 4, 'a', {a:3, b: -3}, 'b']);
// isAllNumPositive([1, 2, 3, 4, -1]); 

/** 将数组元素去重,其中数组元素均为基本类性
    编写函数 uniq,满足

    uniq([1,2,2,3,4,4,4,4]); // 输出 [1,2,3,4]
    uniq([1,2,'M','e','r', 'r', 'y']); // 输出 [1,2,'M','e','r','y']
 */
 

//  console.log(arr1)
 function uniq(uniq1){
  let arr1 = [];
  for(let i=0;i<uniq1.length;i++){
     //  console.log(uniq[i]);
      if(arr1.indexOf(uniq1[i])==-1){
        arr1.push(uniq1[i]);
      }
  }
  return arr1
 }
//  let uniq1 = [1,2,2,3,4,4,4,4];
// let uniq1 = [1,2,'M','e','r', 'r', 'y'];
//  console.log(uniq(uniq1)) 

/**
 * 改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头
  编写函数 putFirst,满足

  var arr = [1, 2, 3, 4];
  putFirst(arr, 2);
  // 此时 arr为 [3, 1, 2, 4]
 */
function putFirst(arr,pos){
  let item =  arr[pos]
  arr.splice(pos,1);
  arr.unshift(item)
  // console.log(arr)
  return arr
}
var arr = [1, 2, 3, 4];
//  console.log(putFirst(arr,2))


// 冒泡排序
function  bubbleSort(arr){
  for (let i = 0 ;i<=arr.length-1;i++){
     for (let j = 0;j<arr.length-1-i;j++){
         if(arr[j]>arr[j+1]){
           let temp = arr[j];
           arr[j]=arr[j+1];
           arr[j+1]=temp;
         }
     }
  }
  return arr
}

// console.log(bubbleSort([3,1,5,2,8])) 

/** 将数组元素按 age 字段的值，从小到大排序
    编写函数 sortAge,满足
    sortAge([
      {age: 19, name:'Jack'},
      {age: 5, name:'Apple'},
      {age: 12, name:'Lynn'},
      {age: 25, name:'David'}
    ]);
    // 输出
    [
      {age: 5, name:'Apple'},
      {age: 12, name:'Lynn'},
      {age: 19, name:'Jack'},
      {age: 25, name:'David'}
    ] 
*/
function sortAge(arr){
    for(let i=0;i<=arr.length-1;i++){ 
       let item = arr[i];
       console.log(item.age)
       for (let j=0; j<=arr.length-2-i; j ++){
         if (arr[j].age>arr[j+1].age){
            let temp = arr[j];
            arr[j]= arr[j+1];
            arr[j+1]= temp ;

         }
       }
    }
    return arr
}
let mmp  = sortAge([
  {age: 19, name:'Jack'},
  {age: 5, name:'Apple'},
  {age: 12, name:'Lynn'},
  {age: 25, name:'David'}
]);
// console.log(mmp)

// 1.编写程序，根据用户输入的数值，计算其平方、平方根。
function num(){
  var count = prompt('输入数值:')
  console.log('平方'+ Math.pow(count,2))
  console.log('平方根'+ Math.sqrt(count))


}
// num()
// 2.使用Math对象的random()方法编制一个产生0~100之间（含0,100）的随机整数的函数。

function ros(){
  var num = Math.floor((Math.random() * 100) + 1);
  console.log('随机数是'+num)
}
ros();
