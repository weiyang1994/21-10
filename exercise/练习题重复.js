/**
 * 判断数组中是否所有的数字都大于 0
  编写函数 isAllNumPositive,满足

  isAllNumPositive([1, 2, 3, 4]);  // 输出 true
  isAllNumPositive([1, 2, 3, 4, -1]);  // 输出 false
  isAllNumPositive([1, 2, 3, 4, 'a', {a:3}]);  // 输出 true
 */

/** 将数组元素去重,其中数组元素均为基本类性
    编写函数 uniq,满足

    uniq([1,2,2,3,4,4,4,4]); // 输出 [1,2,3,4]
    uniq([1,2,'M','e','r', 'r', 'y']); // 输出 [1,2,'M','e','r','y']
 */

/**
 * 改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头
  编写函数 putFirst,满足

  var arr = [1, 2, 3, 4];
  putFirst(arr, 2);
  // 此时 arr为 [3, 1, 2, 4]
 */

// 冒泡排序   bubbleSort([3,1,5,2,8])
  

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

// 1.编写程序，根据用户输入的数值(手动输入)，计算其平方、平方根。

// 2.使用Math对象的random()方法编制一个产生0~100之间（含0,100）的随机整数的函数。

// 3.设计一个页面，在页面上显示信息“现在是XXXX年XX月XX日Xx点XX分XX秒（星期X)，欢迎您的到访！“

/* 4.编制一个从字符串中收集数字字符的函数CollectDigits(s)，它从字符串s中顺序取出数字，
 并且合并为一个独立的字符串作为函数的返回值。例如函数调用CollectDigits(“1abc23def4″）的返回值是字符串"1234″。
 */

/*编制一个将两个字符串交叉合并的函数Merge(s1,s2)，例如Merge(“123","abc"）的返回结果是"1a2b3c"，
如果两个字符串的长度不同，那么就将多余部分直接合并到结果字符串的末尾，如Merge(“123456″,"abc"）的返回结果是"1a2b3c456"。*/

/* 8.设计一个函数DayOfYear(d)，它接必一个日期参数d，返回一个该日期是所在年份的第几天，如DayOfYear(2000,2,8)的返回值是39. 
  
  （提示：①定义一个数组months=new Array（31,28,31,30,31,30,31,31,30,31，30,31）记录每个月少天：
   ②定义一个辅助函数IsLeapYear(y)判定某个年份是否闰年，以确定2月份的天数是28还是29。）
*/

/* 7.斐波纳契（Fibonacci）数列的第一项是1，第二项是1，以后各项都是前两项的和。请按逆序在页面中显示斐波纳契数列前10项的值
 （即，如果计算出来的数列是1,1,2,3,5,8…，那么显示的顺序是…，8,5,3,2,1,1)，并要求每行显示6个数。
 */

// 找到数组里重复最多的项，要求区分字符串和数字。 [1,2,3,4,34,343,333, '111', 111','a','b']  -> 

/**
 * url问号传参解析, parseUrl()
 * 输入： "https://phab.hillinsight.tech/project/board/42/query/open/?order=owner", 输出： { order: 'owner' }
 * 输入： "http://www.baidu.com?name=lyj&age=20&sex=nan",  输出： { name: 'lyj', age: '20', sex: 'nan'}
 * 
 *  parseUrl('https://phab.hillinsight.tech/project/board/42/query/open/?order=owner')
 *  parseUrl('http://www.baidu.com?name=lyj&age=20&sex=nan')
 */
  
/**
    求100-999之间的水仙花数。
    水仙花：是一个3位数，该  三位数各位数字立方之和===该数本身，如 153 就是一个水仙花数
 */

/**
 * 打印100内与7相关的数
 */

/**
 * 公园里有一只猴子和一堆桃子，猴子每天吃掉桃子总数的一半，把剩下一半中扔掉一个坏的。
    到第七天的时候，猴子睁开眼发现只剩下一个桃子。问公园里刚开始有多少个桃子？
 */

/**
 * var arr = [4, 0, 7, 9, 0, 0, 2, 6, 0, 3, 1, 0];
    要求将数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组
 */

/**
 * 让数组中指定索引的元素排到首位. setIndexToFirst(index);
 * 例子： 原数组 [1,2,3,4,5,6,7]， 将第3位放到首位， 调用setIndexToFirst(3)，结果变成 [4,1,2,3,5,6,7]
 */

/**
 * 请简单写出匹配email地址的正则表达式
 * 
 * email('34181539@qq.com');
 * email('132@163.com');
 */

/**
 * 编写一个函数，实现以下功能：计算出一个字符串共有多少个单词组成。
 * 'Good morning, I love JavaScript.' - 5
 */





