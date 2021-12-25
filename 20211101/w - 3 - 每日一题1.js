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
      //  console.log(item.age)
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
  // console.log('随机数是'+num)
}
ros();

// 3.设计一个页面，在页面上显示信息“现在是XXXX年XX月XX日Xx点XX分XX秒（星期X)，欢迎您的到访！“
 
 
 function time(){
  var  d = new Date();
  console.log(d)
 var y = d.getFullYear();
 var m = d.getMonth()+1;
 var day = d.getDate();
 var h = d.getHours();
 var min = d.getMinutes();
 var s = d.getSeconds();
 var X = d.getDay()
 console.log(y)
 var pp = document.getElementById('df');
 pp.innerHTML='现在是'+y+'年'+m+'月'+day+'日'+h+'点'+min+'分'+s+'秒'+'（星期'+X+')';
 }
//  time();
// 4.编制一个从字符串中收集数字字符的函数CollectDigits(s)，它从字符串s中顺序取出数字，
// 并且合并为一个独立的字符串作为函数的返回值。例如函数调用CollectDigits(“1abc23def4″）的返回值是字符串"1234″。
function collectDigits(s){
  //  let t= '';
  //   // for(var i =0;i<s.length;i++){
  //   //     var num = parseFloat(s[i])
  //   //   if(num>=0){
  //   //    t+=s[i];
  //   //   }
  //   // }
  //  return t 
  // let t = '';
  // var reg = /\d/g;
  // var regnum = reg.exec(s)
  // console.log(regnum[0])
  // while(regnum){
  //   t+=regnum[0];
  //   regnum = reg.exec(s)
    
  // }
  // return t;
  let t = '';
  var reg = /\d/g;
  var regnum = reg.exec(s)
  
  do {
    t+=regnum[0];
   regnum = reg.exec(s)
} while (regnum);

  return t;
}
//  var res = collectDigits('abc23def4');
//  console.log(res)
5./*编制一个将两个字符串交叉合并的函数Merge(s1,s2)，例如Merge(“123","abc"）的返回结果是"1a2b3c"，
如果两个字符串的长度不同，那么就将多余部分直接合并到结果字符串的末尾，如Merge(“123456″,"abc"）的返回结果是"1a2b3c456"。*/
function Merge(s1,s2){
    var str = '';
    if(s1.length>=s2.length){
        for(var i = 0;i<s2.length;i++){
           str += s1[i]+s2[i]
          
        }
        str = str+s1.substr(s2.length)
     
    }else{
      for(var i = 0;i<s1.length;i++){
        str += s1[i]+s2[i]
       
     }
     str = str+s2.substr(s1.length)
    }

    return str
}
;
 console.log(Merge('123456','aaaaaaa'));
/**
 * 关于Javascript中数组的说法中，不正确的是：（A）  
  A.数组的长度必须在创建时给定，之后便不能改变 
  B.由于数组是对象，因此创建数组需要使用new运算符
  C.数组内元素的类型可以不同
  D.数组可以在声明的同时进行初始化
 */
  // 设计一个程序，它（使用一个数组）接收用户输入的7门课程的成绩，然后在页面上显示其总成绩和平均分，并列出小于60的成绩。
  function score(arr){
    var mins = [];
    var all=0;
      for(var i=0;i<arr.length;i++){
         
         all+=arr[i];
        
        
         if(arr[i]<60){
          
           mins.push(arr[i])
         
         }


      }
      var p = all/7
      console.log(all);
      console.log(p)
      console.log(mins)
      return {
        '总分': all,
        '平均分': p ,
        '小于60分的':mins
      }
  }
  // var arr = [34,56,77,88,99,78,98]
  // var t = score(arr)
  // console.log(t)
  // 9.编写inherit()函数，它返回了一个继承自原型对象p的属性的新对象，这里使用ECMAScript 5中的Object.create()函数(如果存在的话)，
  // 如果不存在Object.create()，则退化使用其他方法

  // 8.设计一个函数DayOfYear(d)，它接必一个日期参数d，返回一个该日期是所在年份的第几天，如DayOfYear(2000,2,8)的返回值是39. 
  
  // （提示：①定义一个数组months=new Array（31,28,31,30,31,30,31,31,30,31，30,31）记录每个月少天：
  // ②定义一个辅助函数IsLeapYear(y)判定某个年份是否闰年，以确定2月份的天数是28还是29。）

  function isLwapYear(year){
    let res = false;
    if(year%4==0&&year%100!=0||year%400==0){
      res = true;
　　}
    return res;
  }
function dayOfYear(d){
    var months=[31,28,31,30,31,30,31,31,30,31, 30,31];
    var day = 0;
    var year = d[0];
    // 平年还是闰年
    let res = isLwapYear(year)
    if(res) {
      months = [31,29,31,30,31,30,31,31,30,31, 30,31];
    }
    for(var i = 0 ; i<d[1]-1;i++){
       day+=months[i]
    }
    day=day+d[2]
    console.log(day);
    return day;
  
}
// dayOfYear([2000,2,8])
function add (a,b){
  return  a+b;
}
function myAdd(x,y){
   var num =  add.bind(this,x,y);
   return  num
}
console.log(myAdd(1,2))
function num (){

}
let res = add.call(num, 1,5);
console.log(res, '----')
// let o = {
//   a: 10,
//   b: 20
// };
// console.log(add.call(o, 5,6), '0000')
// console.log(add.apply(o, [5,6]), '0000')
// console.log(add.bind(o, 5,6)(), '0000')

function Add() {
  this.a = 3;
  this.b = 5;
  this.add = function() {
    console.log(this,'----')
    return this.a + this.b;
  }
}

let o1 = {
  a: 6,
  b: 7
};
let a1 = new Add();
console.log(a1)
var xx = a1.__proto__==Add.prototype;
var pp = Add.prototype.constructor==Add;
console.log('kankan',xx,pp)

console.log(a1.add.call(o1))
// var a = 7;
// var b = 9
// console.log(this)
// console.log(a1.add.call(this))
// 7.斐波纳契（Fibonacci）数列的第一项是1，第二项是1，以后各项都是前两项的和。请按逆序在页面中显示斐波纳契数列前10项的值
// （即，如果计算出来的数列是1,1,2,3,5,8…，那么显示的顺序是…，8,5,3,2,1,1)，并要求每行显示6个数。
// function fub(num){
//   if(num==1 || num==2){
//     console.log(' ++++++++ ',1,)
//     return 1;
//   }else{
//     var tt = fub(num-1)+fub(num-2);
//     console.log('---------', tt)
//     return tt;
//   }

    
  
// }
// console.log(fub(5))
// function fibonacci(n) {
//   if (n == 1 || n == 2) {
//       return 1
//   };
//   return fibonacci(n - 2) + fibonacci(n - 1);
// }
// console.log(fibonacci(5))

function fibs(n){
  var n1 = 1, n2 = 1, sum;
  var arr = [1,1];
  var str= '';
    for (let i = 2; i < n; i++) {
        sum = n1 + n2
        n1 = n2
        n2 = sum;
        arr.unshift(sum)
    }
    if(n>6){
       for(var i =0;i<n;i++){
         str = str + arr[i] + ',';
       }
    }
    console.log(arr , str)
    return sum
}
// fibs(8)

// 找到数组里重复最多的项，要求区分字符串和数字。 [1,2,3,4,34,343,333, '111', 111','a','b']  -> 
function qf(arr){
   var obj1={};
   var name = '';
   var maxmun= 0;
   for(var i=0;i<arr.length;i++){       //循环遍历数组
      var item = arr[i]
      
      if(obj1[item]){
        obj1[item]=obj1[item]+1    //设置对象值
        if(obj1[item] > maxmun) {
          maxmun = obj1[item];
          name = item
        }
      }else{
        obj1[item]=1;  //设置对象值
      }
   }
  //  var name = '';
  //  var maxmun= 0;
  //  for (var xx in obj1){        //循环遍历对象
  //    console.log('属性名：', xx, "属性值：", obj1[xx])
  //   if(obj1[xx]>maxmun){
  //     maxmun=obj1[xx];   //出现最多的次数
  //     name= xx;       //出现最多项的名字

  //   }
  //  }
   console.log(obj1, name,maxmun)
   return name ;
}
var res1 = qf([1,2,3,'111','111','111','111','111','111',4,34,343,333,333,333,333,3333, '111','a','b'])
console.log('重复最对的项是',res1)

/**
 * url问号传参解析, parseUrl()
 * 输入： "https://phab.hillinsight.tech/project/board/42/query/open/?order=owner", 输出： { order: 'owner' }
 * 输入： "http://www.baidu.com?name=lyj&age=20&sex=nan",  输出： { name: 'lyj', age: '20', sex: 'nan'}
 * 
 */
function parseUrl(str){
     var arr1=  str.split('?')
     var arrRight= arr1[1];
     var arr2 = arrRight.split('&');
     var obj ={};
     for(var i=0;i<arr2.length;i++){
      var arr3= arr2[i].split('=');
        console.log(arr3)
        obj[arr3[0]]=arr3[1]
      
     }
     console.log(obj)
      
}
// parseUrl('https://phab.hillinsight.tech/project/board/42/query/open/?order=owner')
// parseUrl('http://www.baidu.com?name=lyj&age=20&sex=nan')

// 入职薪水10K，每年涨幅5%，50年后工资多少？
function offer(gz,zf,years){
      for (var i =0;i<years;i++){
          gz+=gz*zf
      } 
      console.log(gz)
}
offer(10000,0.05,50)

/**
    求100-999之间的水仙花数。
    水仙花：是一个3位数，该  三位数各位数字立方之和===该数本身，如 153 就是一个水仙花数
 */

 function  fllower(){
      var arr =[];
      for(var i=100;i<=999;i++){
        // 101
        var g = i%10;
        var shi = ((i-g)/10)%10;
        var bai = (i-g-shi*10)/100;
        var sum = bai*bai*bai+shi*shi*shi+g*g*g;
        if(i===sum){
          arr.push(i);
        }
      }
      // console.log(arr)  
 } 
//  fllower()  
/**
 * 100元购物卡，牙刷5元，香皂2元、洗发水15元 100元正好花完有多少种可能。
 */
function useMoney(){
    
}

/**
 * 有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，
  棋盘上放的所有芝麻的重量
 */function qipan(){
    var sum=0;
    for(var i =0;i<64;i++){
       sum+=Math.pow(2,i)
      
    }
    var w= sum*0.00001
    console.log('重量是',w)
 }
// qipan()
/**
 * 打印100内与7相关的数
 */
function num(){
  var arr = [];
  var g ,shi
  for(var i=0;i<=100;i++){
     if(i%10==7 || Math.floor(i/10)==7){
        arr.push(i)
     }
  }
  console.log(arr)
}
// num()
/**
 * 公园里有一只猴子和一堆桃子，猴子每天吃掉桃子总数的一半，把剩下一半中扔掉一个坏的。
    到第七天的时候，猴子睁开眼发现只剩下一个桃子。问公园里刚开始有多少个桃子？
 */
function peach(){
  var p =1;
  for(var i=7;i>0;i--){
    p=(p+1)*2;
  }
  console.log(p)
}
peach()

// var objxx={
//    name:'zhansan '
// }
// var objxx2=objxx;
// console.log(objxx.name,objxx2.name);
// objxx2.name='lisi';
// console.log(objxx.name,objxx2.name);
/**
 * var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
    要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
 */
function  passNum(arr){
  var arr1=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]!==0){
      arr1.push(arr[i])
    }
  }
  console.log(arr1)
}
// passNum([4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0])

/**
 * 让数组中指定索引的元素排到首位. setIndexToFirst(index);
 * 例子： 原数组 [1,2,3,4,5,6,7]， 将第3位放到首位， 调用setIndexToFirst(3)，结果变成 [4,1,2,3,5,6,7]
 */
function setIndexTiFirst(arr,index){
   var p = arr[index];
   arr.splice(index,1);
   arr.unshift(p)
   console.log(arr)
}
// setIndexTiFirst([1,2,3,4,5,6,7],3)


/**
 * 请简单写出匹配email地址的正则表达式
 */
function email(arr){
  var regEmail =  /.{1,20}@.*\.(com|cn)$/;
   var tt= regEmail.exec(arr)
   if(tt==null){
     console.log('输入的邮箱有误')
   }else{
     console.log(tt[0])
   }
}
email('34181539@qq.com');
email('132@163.com');

/**
 * 编写一个函数，实现以下功能：计算出一个字符串共有多少个单词组成。
 * 'Good morning, I love JavaScript.' - 5
 */
function numberWord(str){
  
  var ww =  str.split(' ')
  console.log(ww.length)
}
// numberWord('Good morning, I love JavaScript yee yeeyeye eyey eye.')
/**
 * 给你一个整数数组arr，请你帮忙统计数组中每个数的出现次数。如果每个数的出现次数都是独一无二的，就返回true；否则返回false.
 * 示列1：输入：arr = [1,2,2,1,1,3]；输出：true
    解释：在该数组中，1出现了3次，2出现了2次，3 只出现了1次。没有两个数的出现次数相同。
    示列2：输入：arr = [1,2]；输出：false.   因为都出现1次，所以是false。
 */
function showNum(arr){
  var obj={};
  var flag=false;
  var newArr=[];
  for(var i = 0;i<arr.length;i++){
    if(obj[arr[i]]){
      obj[arr[i]]=obj[arr[i]]+1
    }else{
      obj[arr[i]]=1
    }
  }
  var tt = Object.values(obj);
   console.log(tt)
  // for(var j=0;j<tt.length;j++){
  //   for(var k=j+1;k<tt.length;k++){
  //     if(tt[j]==tt[k]){
  //       flag=true;

  //       break;
  //     }
  //   }
  //   if(flag==true){
  //     break;
  //   }
  // }
  // return flag;
  for(var j=0;j<tt.length;j++){
    var item = tt[j]
    // console.log('---', newArr, item, newArr.indexOf[item], newArr.indexOf[item]==-1)
    if(newArr.indexOf(item)==-1){//  判断 newArr 里 是否有 tt[j]  这一项
      newArr.push(item)
    }
  }
  // console.log(newArr)
  if(tt.length==newArr.length){
     flag=true
  }
  return flag;
  
}
var wy = showNum([1,2 ,2,1,1,3]);
console.log(wy) 
