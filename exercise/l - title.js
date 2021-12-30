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
 * 除了一些常规的运算符之外，Javascript还提供了一些特殊的运算符。下面不属于Javascript特殊运算符的是：（B） 
   A.delete
   B.size
   C.new
   D.typeof 
 */
/**
 * 以下关于Javascript中事件的描述中，不正确的是：（D） 
    A.click——鼠标单击事件
    B.focus——获取焦点事件  
    C.mouseOver——鼠标指针移动到事件源对象上时触发的事件  
    D.change——选择字段时触发的事件
 */
/**
 * 考察以下程序片段: var n = new Number(3456); alert(n.toFixed(2));  以下选项正确的是：(    cCC   )
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
    下列说法正确的是？ 因为st 就没有study这个    st.study 是undefined
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
    function add(i) { 
    var k = i+20; alert(k); 
    } function add(i) { 
    var k = i+200; alert(k); 
    } 
    add(10);
    A.40  B.20  C.30 D.程序出错    相同函数  后面会覆盖前面的函数  执行后面的函数
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



/**
    有难度的
    
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








/**
 * 帮助学习的： https://www.136.la/javascript/show-32671.html
 */
/**
 * 对“hello world”进行翻转处理 要求变为："dlorw olleh"
 */
/**
 * 辅助学习的： https://recomm.cnblogs.com/blogpost/8134414
 */


  