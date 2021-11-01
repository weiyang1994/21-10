console.log(12)

function a(num){
  console.log(123); 
  if(num<10){
    let x = num+1;
    a(x);
  }
  
}
// a(0);

var res = 0;

 for(var i=0;i<101;i++){
    res=res+i;
 }
 console.log(res);
 function add(){
   var res1=0;
   for(var j=0;j<=100;j++){
      res1=res1+j;
   }
   return res1;
   
 }
 var c = add()
 console.log(c, add())
  // 求4到100的奇数和
  var res2 = 0;
  for(var i=4;i<101;i++){
      if(i%2 != 0){
        res2=res2+i
      }
  }
console.log('奇数和-',res2);
// 求数组[2,6,1,77,52,25,7]中的最大值
var t= [2,6,1,77,52,25,7];
 var maxNumber=t.indexOf(0);
for(var q=0;q<=t.length-1;q++){
   console.log(q)
  if (maxNumber<t[q]){
    maxNumber=t[q];
  }
}
console.log(maxNumber+'最大值')


// 将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 分

 var arr=['red', 'green', 'blue', 'pink'];
  var str1= arr.join('|');
  console.log(str1)


  // 得到下面数组 ["blue","cyan","pink","red","black","green","yellow"] 中字符串"red"的索引值

  var arr3=["blue","cyan","pink","red","black","green","yellow"];
  console.log(arr3.indexOf('red'));
  let resIdex = arr3.findIndex((item, a, b) => { console.log('------', item, a, b); return item === 'red'})
  let resIdx1 = arr3.findIndex(function(item, index, arr) {
    console.log('----~~~~~', item, index, arr)
    return item === 'red';
  })
  console.log(resIdex, resIdx1)


  // 打印当前时间，格式 ：xx年xx月xx日  时：分：秒
  var time =new Date();
  console.log(time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日'+time.getHours()+'时:'+time.getMinutes()+'分:'+time.getSeconds()+'秒')
  
  // 用最快的方式求  1，1999， 333，87， 90中最大的值和最小的值
     console.log(Math.max(1,1999,333,87,90));
     console.log(Math.min(1,1999,333,87,90));
    //  输出从1到100之间所有不能被3整除的数;并输出这些整数的和
    var h =0;
    for(var i= 0;i<101;i++){
      if(i%3 !==0){
          console.log('不能被三整除的数',i);
          h=h+i
      }
    }
    console.log(h+'总和');

student('WY1111',500)
/**
函数练习题：输入学生姓名，输入考试成绩	
若是100,【恭喜你***，满分通过！】
若是大于等于80小于100，【**,你很优秀，继续保持！】
若是大于等于60小于80，【**成绩良好】
大于等于50小于60，【**就差一点点，下次一定要至少及格！】
小于50，【**你是笨蛋么？】
 */
 function student(name,num){
      if(num==100){
        console.log('恭喜你'+name+','+'满分通过！')
      }else if(80<=num && num<100){
        console.log(name+','+'你很优秀，继续保持！')
      }else if(60<=num && num<80){
        console.log(name+'成绩良好')
      }else if(50<=num && num<60){
        console.log(name+'就差一点点，下次一定要至少及格')
      }else{
        console.log(name+'你是笨蛋吗')
      }
 }

//  student('WY',100)

//  每过20ms打印一个字符串：第几次打印，当前时间是 xx时xx分xx秒； 一共打印6次
//  var num =1
// var d = setInterval(function(){
//   var t= new Date();
//   console.log('第',num,'次打印','当前时间是'+t.getHours()+'时',t.getMinutes(),'分',t.getSeconds(),'秒')
//   num=num+1;
//   if(num>6){
//     clearInterval(d);
//   }
// },2000)
// 声明一个函数，函数刚开始调用时打印字符串：xx函数开始调用了。  然后过5s打印：距离xx函数调用已经过去了5s了。
   function wy1(){
    console.log('wy1函数开始调用了')
      setTimeout(function(){
        console.log('距离wy1函数调用已经过去5s了');
      },5000)  
      
   }
// wy1();

function p (){
  var pp='';
  for(var i=0;i<8;i++){
    let count = 0;
    while(count <= i) {
      pp = pp + '*';
      if(count === i) {
        pp = pp + '\n'
      }
      count ++;
    }
  }
  console.log(pp)
}
p();
// *\n**\n***\n****\n
function p1() {
  var pp1 = ''
  for(var i=0;i<8;i++){
    for(var j=0;j<=i;j++){
      pp1=pp1+'*';
      if(j==i){
        pp1=pp1+'\n';
      }
    }
  }
  console.log(pp1)
}
p1();