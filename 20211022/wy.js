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
