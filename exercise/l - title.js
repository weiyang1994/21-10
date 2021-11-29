/**记录练习题，做了的剪切到对应的文件 */

// flex布局（问常用的布局方式？  实现 123 元素， 展示321） 实现一个元素水平居中
// 翻转数组

/**
 *  let i=1;
    console.log(1-(++i)+(i--)+1+(i++)-(--i)-1);
    console.log(i);
 */

/**
 * 简述字符串截取方法 substr 、 substring 、 slice 三者的区别
 */
/**
 * url问号传参解析, parseUrl()
 * 输入： "https://phab.hillinsight.tech/project/board/42/query/open/?order=owner", 输出： { order: 'owner' }
 * 输入： "http://www.baidu.com?name=lyj&age=20&sex=nan",  输出： { name: 'lyj', age: '20', sex: 'nan'}
 * 
 */
// 
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

/**
  function mixArgs(first, second = "b") {
    console.log(first === arguments[0])
    console.log(second === arguments[1])
    first = 'c';
    second = 'd'
    console.log(first === arguments[0])
    console.log(second === arguments[1])
  }
  // mixArgs('x');
 */

// 计算 1+2+3+4+5+…+100 计算100的阶乘
// 入职薪水10K，每年涨幅5%，50年后工资多少？
/**
    求100-999之间的水仙花数。
    水仙花：是一个3位数，该三位数各位数字立方之和等于该数本身，如 153 就是一个水仙花数
 */
/**
 * 给你一个整数数组arr，请你帮忙统计数组中每个数的出现次数。如果每个数的出现次数都是独一无二的，就返回true；否则返回false
 * 
 *  示列1：输入：arr = [1,2,2,1,1,3]；输出：true
    解释：在该数组中，1出现了3次，2出现了2次，3 只出现了1次。没有两个数的出现次数相同。
    示列2：输入：arr = [1,2]；输出：false
 */

/**
    有难度的
    // 找到数组里重复最多的项，要求区分字符串和数字。
    // 深拷贝
    // 判断是否是数组的工具函数
    // 斐波那契数列，指的是这样一个数列：1、1、2、3、5、8、13、21、……在数学上，斐波那契数列以如下被以递归的方法定义：
        F0=0，F1=1，Fn=Fn-1+Fn-2（n>=2，n∈N*），
        用文字来说，就是斐波那契数列由 0 和 1 开始，之后的斐波那契数列系数就由之前的两数相加. 

      // 获取数组深度，例如：
      getArrayDeep([1]) // 0
      getArrayDeep([[1], [2]]) // 1
      getArrayDeep([[1, [2]]]) // 2
      getArrayDeep([[[[]]]]) // 3
 */

/**
 * 填空题：
    var object = {}
    object.__proto__ ===  ????填空1????  // 为 true

    var fn = function(){}
    fn.__proto__ === ????填空2????  // 为 true
    fn.__proto__.__proto__ === ????填空3???? // 为 true

    var array = []
    array.__proto__ === ????填空4???? // 为 true
    array.__proto__.__proto__ === ????填空5???? // 为 true

    Function.__proto__ === ????填空6???? // 为 true
    Array.__proto__ === ????填空7???? // 为 true
    Object.__proto__ === ????填空8???? // 为 true

    true.__proto__ === ????填空9???? // 为 true

    Function.prototype.__proto__ === ????填空10???? // 为 true
 */
/**
 * function Fn(){
    console.log(this)
  }
  new Fn();
  问题： new Fn() 会执行 Fn，并打印出 this，请问这个 this 有哪些属性？这个 this 的原型有哪些属性？
 */