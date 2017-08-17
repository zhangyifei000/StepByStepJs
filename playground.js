/**
 * 基本语法
 */

//  1.变量声明 var let const 还可以不加任何关键字
//  严格地说，var a = 1 与 a = 1，这两条语句的效果不完全一样，
//  主要体现在delete命令无法删除前者。不过，绝大多数情况下，这种差异是可以忽略的。
//  Js是一门动态语言可以动态设置任何值

/*
var name = 'Bill'
name = 3
console.log(name) //3
*/

// 2.变量提升 只对var声明的变量起作用 Js工作方式是把所有变量的声明提到代码块前。

/*
console.log(a) // undefined
var a = 1

//等同于一下操作

var a;
console.log(a)
a = 1
*/

/*
console.log(a) // ReferenceError: a is not defined
a = 1
*/

/*------------------------------------------------------------------------*/

/**
 * 数据类型
 */

//  1.js共有7中数据类型
// Boolean(true, false), Null(null), Undefined(undefined), String(string), Number(数字类型), Symbol(原子类型), Object(对象)
// 使用typeof判断数据类型

/*
console.log(typeof 3) //number
console.log(typeof 3.0) //number
console.log(typeof "3") //string
console.log(typeof true) //boolean
console.log(typeof {}) //object
console.log(typeof null) //object
console.log(typeof a) //undefined
*/

// 2.null和undefined
// 转换成boolean类型都是false, null 转换成Number为0， undefined转还成number为NaN,函数没有返回值默认返回undefined

/*
console.log(!null) //true
console.log(!undefined) //true
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN
function f() {}
console.log(f()) // undefined
*/

//[], 和 {} 默认转换成boolean类型都是true

/*
console.log(![]) // false
console.log(!{}) // false
*/

/**
 *  字符串
 */

 /*
\0 null（\u0000）
\b 后退键（\u0008）
\f 换页符（\u000C）
\n 换行符（\u000A）
\r 回车键（\u000D）
\t 制表符（\u0009）
\v 垂直制表符（\u000B）
\' 单引号（\u0027）
\" 双引号（\u0022）
\ 反斜杠（\u005C）
 */

 /**
  * 对象
  */

// 1. 创建一个对象

/*
var perosn = {name: 'Bill'}
console.log(typeof perosn) //object
console.log(perosn) // { name: 'Bill' }
*/

/*
var person = new Object()
person.name = 'Bill'
console.log(person) //{ name: 'Bill' }
*/

/*
var person = Object.create(Object.prototype = {
    name: 'Bill'
})
person.name = "Bill"
console.log(person) //{ name: 'Bill' }
*/

/**
 * 数组
 */

 // 数组可以装任何类型的数据

 /*
var array = [1, "2", 3, function(){return true}, null, undefined, NaN]
console.log(array) //[ 1, '2', 3, [Function], null, undefined, NaN ]
console.log(array.length) //7
console.log(typeof array) // object
console.log(Object.keys(array)) // [ '0', '1', '2', '3', '4', '5', '6' ]
console.log(array[8]) // undefined
array['p'] = 123 // 因为，length属性的值就是等于最大的数字键加1，而这个数组没有整数键，所以length属性保持为0
console.log(array.length) //7

array.length = 0 //清空数组
console.log(array) //[]
*/

// 类似数组对象

/*

// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

console.log(arrayLike[0])// 'a'
console.log(arrayLike.length) // 2
console.log(arrayLike instanceof Array) // false

// DOM元素集
var elts = document.getElementsByTagName('h3'); //控制台下不能运行
elts.length // 3
elts instanceof Array // false

// 字符串
console.log('abc'[1]) // 'b'
console.log('abc'.length) // 3
console.log('abc' instanceof Array) // false
*/

/**
 * 函数
 */

 // 声明

 // 1 
/*
 function f(s) {
    console.log("方法", s)
 }

 f(12)

 // 2

 var f = function(s) {
    console.log("方法", s)
}
f(12)
*/
// 3 这个x只在函数体内部可用，指代函数表达式本身，其他地方都不可用。这种写法的用处有两个，
// 一是可以在函数体内部调用自身，二是方便除错（除错工具显示函数调用栈时，将显示函数名，而不再显示这里是一个匿名函数
/*
var f = function x(s) {
    console.log(typeof x)
}
*/
//  x //ReferenceError: x is not defined
// x() // x is not defined
// f() // function

// 4 函数是一等公民，可以作为参数和返回值，函数名类似变量名

/*

function add(x, y) {
    return x + y
}

function operation(add) {
    console.log(add(1,2))
}

operation(add) // 3
*/

// 5 函数的属性和方法

/*

function add (x, y) {
    return x + y
}

console.log(add) // [Function: add]
console.log(typeof add) // function
console.log(add.name) //add
console.log(add.length) //2
console.log(add.toString())// function add(x, y) {return x + y}
*/

// 6 默认值

/*

function f (x) {
    var a = x || 3
    console.log(a)
}

f() //3
f('') //3
f(0)//3
f(null)//3
f(undefined)//3
f(5) //5
// 上面代码的||表示“或运算”，即如果x有值，则返回x，否则返回事先设定的默认值（上例为1）。
// 这种写法会对x进行一次布尔运算，只有为true时，才会返回a。
// 可是，除了undefined以外，0、空字符、null等的布尔值也是false。
// 也就是说，在上面的函数中，不能让a等于0或空字符串，否则在明明有参数的情况下，也会返回默认值。
*/

// 7.闭包

// 函数内部可以直接读取全局变量,但是如果另外一个函数想要修改你的内部参数该怎么办

// 1 外部函数无法访问函数体内部变量
/*
function increment() {
    var a = 0
}
console.log(a) //ReferenceError: a is not defined
*/

/*

function increment() {
    var a = 0
    function add() {
        return a + 5
    }
    a = add()
    console.log(a) //5
}
increment()
*/

// 闭包能够读取其他函数内部变量的函数。由于在JavaScript语言中，只有函数内部的子函数才能读取内部变量，因此可以把闭包简单理解成“定义在一个函数内部的函数”。
// 闭包最大的特点，就是它可以“记住”诞生的环境。
// 在本质上，闭包就是将函数内部和函数外部连接起来的一座桥梁。
// 闭包的最大用处有两个，一个是可以读取函数内部的变量，
// 另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。

/*

var count = 0

function increment() {
    var start = 0
    function incrementOne() {
        console.log(count++)
        return start++
    }
    return incrementOne
}

var inc = increment()
console.log(inc()) //0
console.log(inc()) //1
console.log(inc()) //2
console.log(inc()) //3
*/
// start声明在函数体内，当函数执行完之后应该被销毁掉，但是我们看到每次调用inc函数 start都会加一
// 每次调用inc函数生成一个新的闭包，而这个闭包又会保留外层函数的内部变量，所以内存消耗很大，会造成栈的溢出

// fib 1,1,2,3,5,8,13

/*

function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
  }
  
console.log(fib(45)) // exited with code=0 in 18.535 seconds 用了18秒


function fib2(index, left, right) {
    if (index === 1) {
        return right
    }
    return fib2(index - 1, right, left + right)
}
console.log(fib2(2, 0, 1)) // exited with code=0 in 0.064 seconds
*/
//index 相当于是一个循环什么时候终止这个循环，我们写的第一个fib函数会先把他们压倒栈里面，我们只有知道f(1) = 1， 才会知道f(2)的值， f(2) = f(1) + f(0)
//这个时候f(1)会被释放掉，f(2)结果返回之后f(2)会被释放掉一次类推。所以当计算数很大的时候使用这种方法就会造成内存溢出
//第二个函数把每次的结过都存储在一个变量中
