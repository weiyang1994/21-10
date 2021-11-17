/**记录练习题，做了的剪切到对应的文件 */

/**
 * 判断数组中是否所有的数字都大于 0
  编写函数 isAllNumPosive,满足

  isAllNumPosive([1, 2, 3, 4]);  // 输出 true
  isAllNumPosive([1, 2, 3, 4, -1]);  // 输出 false
  isAllNumPosive([1, 2, 3, 4, 'a', {a:3}]);  // 输出 true
 */
/**
 * 改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头
  编写函数 putFirst,满足

  var arr = [1, 2, 3, 4];
  putFirst(arr, 2);
  // 此时 arr为 [3, 1, 2, 4]
 */
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
/** 将数组元素去重,其中数组元素均为基本类性
    编写函数 uniq,满足

    uniq([1,2,2,3,4,4,4,4]); // 输出 [1,2,3,4]
    uniq([1,2,'M','e','r', 'r', 'y']); // 输出 [1,2,'M','e','r','y']
 */

// flex布局（问常用的布局方式？  实现 123 元素， 展示321） 实现一个元素水平居中
// 翻转数组

// 1.编写程序，根据用户输入的数值，计算其平方、平方根和自然对数。
// 2.使用Math对象的random()方法编制一个产生0~100之间（含0,100）的随机整数的函数。
// 3.设计一个页面，在页面上显示信息“现在是XXXX年XX月XX日Xx点XX分XX秒（星期X)，欢迎您的到访！“。
// 4.编制一个从字符串中收集数字字符（"0″‘,"1″，…"9″）的函数CollectDigits(s)，它从字符串s中顺序取出数字，并且合并为一个独立的字符串作为函数的返回值。例如函数调用CollectDigits(“1abc23def4″）的返回值是字符串"1234″。
// 5.编制一个将两个字符串交叉合并的函数Merge(s1,s2)，例如Merge(“123","abc"）的返回结果是"1a2b3c"，如果两个字符串的长度不同，那么就将多余部分直接合并到结果字符串的末尾，如Merge(“123456″,"abc"）的返回结果是"1a2b3c456"。
// 6.设计一个程序，它（使用一个数组）接收用户输入的7门课程的成绩，然后在页面上显示其总成绩和平均分，并列出小于60的成绩。
// 7.斐波纳契（Fibonacci）数列的第一项是1，第二项是1，以后各项都是前两项的和。请按逆序在页面中显示斐波纳契数列前40项的值（即，如果计算出来的数列是1,1,2,3,5,8…，那么显示的顺序是…，8,5,3,2,1,1)，并要求每行显示6个数。
// 8.设计一个函数DayOfYear(d)，它接必一个日期参数d，返回一个该日期是所在年份的第几天，如DayOfYear(2000,2,8)的返回值是39. （提示：①定义一个数组months=new Array（31,28,31,30,31,30,31,31,30,31，30,31）记录每个月少天：②定义一个辅助函数IsLeapYear(y)判定某个年份是否闰年，以确定2月份的天数是28还是29。）
// 9.编写inherit()函数，它返回了一个继承自原型对象p的属性的新对象，这里使用ECMAScript 5中的Object.create()函数(如果存在的话)，如果不存在Object.create()，则退化使用其他方法

/**
  function f(y) {
    var x=y*y;
    return x;
  } 
  for(x=0;x< 5;x++) {
    y=f(x);
    document.writeln(y);
  } 
  //解释上边方法，写打印值
*/

/**
 * 关于Javascript中数组的说法中，不正确的是：（）  
  A.数组的长度必须在创建时给定，之后便不能改变 
  B.由于数组是对象，因此创建数组需要使用new运算符
  C.数组内元素的类型可以不同
  D.数组可以在声明的同时进行初始化
 */

/**
 * 除了一些常规的运算符之外，Javascript还提供了一些特殊的运算符。下面不属于Javascript特殊运算符的是：（） 
   A.delete
   B.size
   C.new
   D.typeof 
 */
/**
 * 以下关于Javascript中事件的描述中，不正确的是：（） 
    A.click——鼠标单击事件
    B.focus——获取焦点事件  
    C.mouseOver——鼠标指针移动到事件源对象上时触发的事件  
    D.change——选择字段时触发的事件
 */
/**
 * 考察以下程序片段: var n = newNumber(3456); alert(n.toFixed(2));  以下选项正确的是：(       )
    A.输出34  B.输出 56  C.输出 3456.00  D.输出 345600
 */
/**
    function Student(name)  {    
      this.name = name;   
      this.move = function() {     
      alert(this.name+”准备移动了”);    
      }
    }
    Student.prototype.move = function() {  
      alert(this.name+”开始移动了!”);  
    }
    var st = new Student(“李四); 
    st.study();
    下列说法正确的是？ 
    A.输出 ”李四准备移动了”  B.输出 ”李四开始移动了”   C.输出 ”李四准备移动了 李四开始移动了””  D.程序出错，没有任何输出。
 */
/**
 * 预测以下代码片段的输出结果:
    function add(i) { 
    var k = i+10; alert(k); 
    } 
    function add(i) { 
    var k = i+20; alert(k); 
    }  
    add(10);
    A.40  B.20  C.30 D.程序出错 
 */
/**
 * 练习题1： https://mp.weixin.qq.com/s?__biz=MjM5MDA2MTI1MA==&mid=2649091838&idx=3&sn=c60b8907ccccfa0416f6059cb49d7d00&chksm=be5bc953892c404501a24465d92eba6887623bc9c118bb34bebfb4ee43f48264fa2754672663&scene=21#wechat_redirect
 * 练习题2： https://cxyzjd.com/article/u012310056/78050985
 * 
 * 面试题： https://www.html.cn/web/javascript/16799.html
 */