// 定义一个构造函数
function Person() {
  this.age = 25;
}
/**
 * 1、每个构造函数都有一个prototype属性，这个属性是一个指针，指向一个对象，称这个对象为原型对象。
 * 这个原型对象上有一个默认属性constructor，该属性也是一个指针，指向其关联的构造函数。
 * 
 * ---- 构造函数 和 原型对象 之间的关系
 */
let prototypeObj = Person.prototype;   //原型对象
console.log(prototypeObj.constructor === Person);
/**
 * 通过构造函数创造的实例对象person，拥有一个内部属性__proto__，该属性指向其原型对象，且能访问原型对象上的所有属性和方法。
 * 
 * ---- 实例 和 原型对象 之间的关系。
 */
let person = new Person();
console.log(person.__proto__ === Person.prototype);
/**
 * 构造函数所有的属性和方法都是挂在原型对象上的
 */
Person.name1 = '小白兔 - 静态属性'; // ----不能通过 实例 访问
Person.prototype.name = '小白兔';
// Person.prototype.name = '小白兔';
console.log(person, person.name, person.age, person.age1, Person.name1)
Person.prototype.sayName = function() {
  console.log('我的名字是:', this.name);
}
person.sayName();


console.log('--------------------以上是第一部分的内容')

/**
 * js中所有的都是对象对吧，如果这个原型对象是其他构造函数的实例，做一下关联；
 * 有一个构造函数 Man ，把 Man 的实例对象 赋值给 Person 的原型对象，就关联好了。
 */
 function Man() {}
 Person.prototype = new Man();  //两个构造函数之间的纽带

 console.log(Person.prototype.__proto__ === Man.prototype)  // 实例 的 __proto__ 属性指向 其原型对象。
 /**
  * 给 Man 构造函数加一些属性和方法
  */
 Man.prototype.name1 = "我的名字是Man";
 Man.prototype.sayHello = function() {
   console.log('Hello,', this.name1)
 }
 /**
  * 实例化一个 Person 的实例
  */
 let person1 = new Person();
 /**
  * person1 实例可以访问到 Man 原型对象上的属性和方法
  */
 console.log(person1.name1)
 person1.sayHello();
 /**
  * person1 上有一个 __proto__ 属性指向其原型对象
  * 此时这个原型对象又是 Man 的实例，所以这个原型对象上有个 __proto__ 指向 Man 的原型对象
  * 所有 person1.__proto__.proto__ 指向 Man 的原型对象
  */
 console.log(person1.__proto__ === Person.prototype)
 console.log(Person.prototype.__proto__ === Man.prototype)
 console.log(person1.__proto__.__proto__ === Man.prototype)
 /**
  * 此时 Man 的原型对象不再是其他对象的实例了，所以 Man 来自于 Object，即 Man 的原型对象 是 Object 的实例
  * Man 的原型对象上有个 __proto__ 指向 Object 的原型对象
  */
 console.log(Man.prototype.__proto__ === Object.prototype)
 console.log(person1.__proto__.__proto__.__proto__ === Object.prototype) //xx
 /**
  * 原型链的终点是 Object，所以 Object 的原型对象不是任何对象的实例
  * Object 的原型对象的 __proto__ 指向 null
  */
 console.log(Object.prototype.__proto__)
 console.log(Object.prototype.__proto__ === null)
 console.log(person1.__proto__.__proto__.__proto__.__proto__ === null)
 
 console.log('--------------------以上是第二部分的内容')

 /**
  * 所有函数，都是 Function 的实例
  * 构造函数也是函数
  * 用 typeof '某对象' 获取类型，当结果是 'function' 的，认为'某对象'是 Function 的实例，
  *   都有一个 __proto__ 属性指向 Function 的原型对象
  */
 console.log(typeof Person)
 console.log(typeof Object)
 console.log(Person.__proto__ === Function.prototype)
 console.log(Object.__proto__ === Function.prototype) // ----特殊

 /**
  * 普通函数
  */
 function print() {
   console.log('我是一个普通函数');
 }
//  print()
/**
 * 匿名函数
 */
const aFun = function(){
  console.log('我是一个匿名函数')
}
console.log(aFun.prototype.constructor === aFun, '-----')
// aFun();
/**
 * 箭头函数
 */
const bFun = () => {
  console.log('我是一个箭头函数')
}
// bFun()
// console.log(typeof print)
// console.log(typeof aFun)
// console.log(typeof bFun)
// console.log(print.__proto__ === Function.prototype)
// console.log(aFun.__proto__ === Function.prototype)
// console.log(bFun.__proto__ === Function.prototype)
/**
 * 一切都为对象，Function 的原型对象 也是 Object 的实例，所以 Function 的原型对象上有个 __proto__ 指向 Object 的原型对象
 */
console.log(Function.prototype.__proto__ === Object.prototype)  // ----特殊

 console.log('--------------------以上是第三部分的内容')

/**
 * 属性查找机制：我们想要查找某个对象的某个属性，如果我们没有在当前对象中找到，我们便沿着原型链向它的上一级查找，
 *  如果上级没有查找到，再一直向上，直到查到Object.prototype，如果还是没有，就返回undefined。
 */
/**
 * 查找一个 person 实例上的 lanYangYang 属性，预期是找不到的，因为 person 实例本身上没有这个属性
 */
console.log(person['lanYangYang'])
/**
 * 给 Object 的原型对象上设置一个自定义属性： lanYangYang: '18岁了'
 */
Object.prototype.lanYangYang = '18岁了';
console.log(person['lanYangYang'])

console.log('--------------------以上是第四部分的内容')


