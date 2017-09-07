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

/*

### 闭包


```
闭包就是能够将函数内部的变量与外部进行通信的一座桥梁。
```


```
function f() {
      var n = 100
      console.log(n) // 100
  }

  console.log(n) // ReferenceError: n is not defined  

  f()
```




> 我们定义了一个函数，函数在下面f()被调用，函数就会从上往下执行，执行完之后函数内部的声明的变量都会被清空掉，函数内部的变量是对外界不开放的


- 假如我们想要在另外一个函数里使用这个变量n我们有哪些方法哪？


```
function f() {
    var n = 100
    console.log(n) //100
    function increment () {
        n = n + 1;
        console.log(n) //101
    }
    increment()
}

f()
```

> 
> 我们在f()函数里定义了一个increment()函数，里面使用了变量n,这次并没有报错。这就是js里链式作用域，进行冒泡似的查找变量声明。

> 上面的例子，我们看到了一个函数体内定义了另外一个函数。我们知道js中函数是可以作为变量传递的，那么我们修改一下上面的例子


```
function f(increment) {
    var n = 100
    console.log(n) // 100
    increment(n) //调用
}

f(function(n) { 
    console.log(n + 1) // 101
})
```


> 发生了什么，我们将increment函数作为变量传给了f函数，大家看完这个例子是不是感觉有点熟悉的感觉。我们加入一些打印看下执行顺序


```
function f(increment) {
    console.log("f函数开始")
    var n = 100
    console.log(n) // 100
    increment(n) //调用
    console.log("f函数结束")
}

f(function(n) { 
    console.log(n + 1) // 101
    console.log("increment函数")
})
```



```
//打印顺序
// f函数开始
// 100
// 101
// increment函数
// f函数结束
```


> 我们看到在f函数里是从上下到下一次执行的，其实上面的例子和下面的事等价的


```
function f() {
    var increment = function(n) {
        console.log(n + 1)
    }

    var n = 100;
    console.log(n) // 100
    increment(n) // 101
}

f()
```

> 
> 好了，说了这么多闭包到底可以干啥类。就如我们上面所说的，可以捕获函数里的变量，比如我们函数体内有一个异步操作，我们想在这个函数执行完这些异步操作之后
> 就可以把这些数据传出去供别人使用了。


```
function getData(successCallBack) {
    console.log("getData函数开始执行")
    setTimeout(function() {
        console.log("执行回调")
        successCallBack("这些是数据")
    }, 3000);
    console.log("getData函数体结束")
}

getData((data) => {
    console.log(data)
})

//执行结果如下

// getData函数开始执行
// getData函数体结束
// 执行回调
// 这些是数据
```


> 闭包会造成内存泄漏，下面我们玩个游戏1,1,2,3,5,8,13,21,34...求第n位是多少！一个经典的算法题

- 使用递归


```
var count = 0

function fib (num) {
    console.log(count ++) 
    if (num <= 0) {
        return 0
    }
    if (num === 1) {
        return 1
    }
    return fib(num - 2) + fib(num - 1)
}

console.log(fib(7)) //8
```


>  fib(6) = fib(5) + fib(4), fib(5) = fib(4) + fib(3) ...... f(2) = f(1) + f(0),一直到最后我们才找到f(0) = 0, f(1) = 1,那么此时函数f(2)才会被释放掉，然后f(3)回后f(3)才会被释放掉。。。,
>  所以如果num数够大的话那么内存里存储的这些函数也会增多。大家可以测试一下我测的当num = 45时就会执行大概18s,这个数字会根据有所不同，根据电脑性能，反正是很耗时的。


```
var count = 0

function fib (index , left, right) { //使用right作为变量，存储最后这个值
    console.log(count ++) 
    if (index === 1) {
        return right
    }
    return fib(index - 1, right, left + right)
}

console.log(fib(7,0,1)) // 8
```


- 如何不在函数里写控制语句，完成一个循环


```
function circle(index) {
    if (index === 0) {
        return 
    }
    console.log(index)
    return circle(index - 1)
}
circle(5) //5 4 3 2 1
```


- 闭包是如何保存上下文的


```
function print() {
    console.log("print开始执行")    
    for (var index = 0; index < 5; index++) {
        console.log("for begin")        
        setTimeout(function() {
            console.log("callback begin")            
            console.log(index) // 5,5,5,5,5
        }, 1000);
    }
    console.log("print执行结束")    
}

print()

//执行顺序
// print开始执行
// for begin
// for begin
// for begin
// for begin
// for begin
// print执行结束
// callback begin
// 5
// callback begin
// 5
// callback begin
// 5
// callback begin
// 5
// callback begin
// 5
```

> 
> 打印了五个五为什么？在for语句里setTimeout是个异步的函数，在for执行完之后index已经是五了，然后在打印，当然都是5了

- 上面的例子相当于下面的


```
function print() {
    console.log("print开始执行")    
    for (var index = 0; index < 5; index++) {
        console.log("for begin")
        var callBack =  function() { 
            console.log("callback begin")            
            console.log(index) // 5,5,5,5,5
        }       
        setTimeout(callBack, 1000);
    }
    console.log("print执行结束")    
}

print()
```


- 使用闭包留index的值


```
function print() {
    console.log("print开始执行")    
    for (var index = 0; index < 5; index++) {
        console.log("for begin")
        var callBack =  function(index) { 
            console.log("callback begin")            
            console.log(index) // 5,5,5,5,5
        }       
        setTimeout(callBack(index), 1000); //callBack保留index的值
    }
    console.log("print执行结束")    
}

print()
```



```
//打印顺序

// print开始执行
// for begin
// callback begin
// 0
// for begin
// callback begin
// 1
// for begin
// callback begin
// 2
// for begin
// callback begin
// 3
// for begin
// callback begin
// 4
// print执行结束
```


- 最终就变成了我们经常写的下面这部分


```
function print(callBack) {
    console.log("print开始执行")
    for (var index = 0; index < 5; index++) {
        console.log("for begin")
        setTimeout(callBack(index), 1000);
    }
    console.log("print执行结束")
}

var callBack = (index) => {
    console.log("callback begin")
    console.log(index)
}

print(callBack)

//执行顺序
// print开始执行
// for begin
// callback begin
// 0
// for begin
// callback begin
// 1
// for begin
// callback begin
// 2
// for begin
// callback begin
// 3
// for begin
// callback begin
// 4
// print执行结束
```

- 在一个我们经常见的就是函数作为返回值进行返回


```
function increment(x) {
    return function (y) {
        return x + y
    }
}

var incre10 = increment(10) //相当于 function(y) {return 10 + y}
console.log(incre10(8)) // 18

//increment相当于一个构造器可以创建函数
```

- 考虑一下例子


```
var object = {
    name: 'Bill',
    getName: function() {
        return function() {
            return this.name
        }
    }
}
console.log(object.getName()()) //undefined
```


> 我们看到getName的上下文是object 那么getName的中使用this的话应该是指向object
> object.getName()()此时的上下文是global的因为我在node环境下执行的如果在网页里应该是window


```
global.name = 'Jason'

var object = {
    name: 'Bill',
    getName: function() {
        return function() {
            return this.name
        }
    }
}
console.log(object.getName()()) //Jason
```


- 还有一种方法


```
var object = {
    name: 'Bill',
    getName: function() {
        var that = this //getName的上下文环境是object
        return function() {
            return that.name
        }
    }
}
console.log(object.getName()()) //Jason
```


> 所以使用闭包的时候要注意上下文环境问题

*/

/**
 * Promise
 */
//promise是抽象异步处理对象以及对其进行各种操作的组件。
// 创建一个promise对象 

/*

var promise = new Promise(function(resolve, reject) {
    //1.异步处理
    //2.处理之后调用resove,reject
});

promise.then(onFulfilled, onRejected)

resolve成功时调用onFulfilled, reject时调用onRejected

promise.catch(onRejected)是一个更好的选择

//下面我们看个例子

// 创建promise对象的流程如下所示。
// 1. new Promise(fn) 返回一个promise对象 
// 2. 在 fn 中指定异步等处理
// • 处理结果正常的话，调用 resolve(处理结果值)
// • 处理结果错误的话，调用 reject(Error对象)

function getAsyncFunction(error) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if (error) {
                reject("出错了")
            } else {
                resolve("成功了")
            }
        }, 2000);
    })
}

getAsyncFunction(true).then(function(reslult) {
    console.log("reslut:" + reslult)
}).catch(function(error) {
    console.log("error:" + error) //error:出错了
})

getAsyncFunction(false).then(function(reslult) {
    console.log("reslut:" + reslult) // reslut:成功了    
}).catch(function(error) {
    console.log("error:" + error) 
})

//2.如果resolve也是一个promise实例

var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 3000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 1000)
})

p1.then((result) => {
    console.log(result)
    return p2
}).then((result) => {
    console.log(result)
})

// 3. Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调

var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 1000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 2000)
})

var p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p3执行失败了"), 3000)
})

Promise.all([p1, p2]).then((resluts) => console.log(resluts)) // [ 'p1完成了', 'p2执行完了' ]
Promise.all([p1, p2, p3]).then((resluts) => console.log(resluts)).catch((results) => console.log(results)) //p3执行失败了

//p1,p2,p3中p3失败了那么这些状态就是失败了，所以我们在使用all的时候要注意。
//那么all里执行的顺序是如何的。

//测试1
var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 8000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 2000)
})

Promise.all([p1, p2]).then((resluts) => console.log(resluts)) // [ 'p1完成了', 'p2执行完了' ] exited with code=0 in 8.074 seconds

//测试2
var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 1000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 8000)
})

Promise.all([p1, p2]).then((resluts) => console.log(resluts)) // [ 'p1完成了', 'p2执行完了' ] exited with code=0 in 8.074 seconds

//测试3
var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 2000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 2000)
})

Promise.all([p2, p1]).then((resluts) => console.log(resluts)) // [ 'p2完成了', 'p1执行完了' ]

//测试4
var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 8000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 2000)
})

Promise.all([p2, p1]).then((resluts) => console.log(resluts)) // [ 'p2执行完了', 'p1完成了' ]

//then执行的结果是由all里最晚执行出来的结果之后，才会调用的，也就是all里所有异步都执行完才会调用，并且只要有一个出错就不会调then

// 4， race 是和all差不多的，只不过是里面的异步操作，只要有一个完成就立马调then

var p1 = new Promise((resolve) => {
    setTimeout(() => resolve("p1完成了"), 8000)
})

var p2 = new Promise((resolve) => {
    setTimeout(() => resolve("p2执行完了"), 2000)
})

Promise.race([p1, p2]).then((resluts) => console.log(resluts)).then // p2执行完了

*/

//javascript执行上下文和调用栈

//javascript在执行过程中通常在以下环境
//global code: 全局作用域
// Function code: 当代码执行进入到函数体当中。
// Eval code: 在 eval 函数内部执行的文本。

var name = 'Bill' 

function print() {
    console.log(name) //Bill
    // console.log(age) //ReferenceError: age is not defined    

    function say() {
        var age = 3 //age是在函数say内，而say在print的函数作用域内
        console.log(name) //Bill
    }
    say()
}
print()
//name变量和print函数都在全局作用域内

//每个函数都会创造一个新的上下文，并且创建出一个局部的作用域
//作用域声明的东西不能被当前函数作用外部访问到

// 执行上下文栈

// 代码进入函数体内部如果遇到函数，会给这个函数重新创建一个新的执行上下文，然后将它压入栈中
//浏览器永远会执行当前栈顶部的执行上下文，一旦函数执行完后，就会从栈中弹出，然后执行当前栈中的下一个上下文。

(function foo(i) {
    debugger;
    if (3 === i) {
        return 
    } else {
        foo(++i)
    }
})(0)

//入栈

// foo(3) i = 3
// foo(2) i = 2
// foo(1) i = 1
// foo(0) i = 0
// global

//出栈
//从上往下走，大家把代码复制到浏览器的debug里去看看堆栈，单步调试，就能看到结果

// 解释器执行代码的顺序

// 寻找调用函数的代码
// 在执行 函数 代码之前, 创建 执行上下文.
// 进入创建阶段:
// 初始化 作用域链.
// 创建变量对象：
// 创建 参数对象, 检查参数的上下文, 初始化其名称和值并创建一个引用拷贝。
// 扫描上下文中的函数声明：
// 对于每个被发现的函数, 在 变量对象 中创建一个和函数名同名的属性，这是函数在内存中的引用。
// 如果函数名已经存在, 引用值将会被覆盖。
// 扫描上下文中的变量声明：
// 对于每个被发现的变量声明,在变量对象中创建一个同名属性并初始化值为 undefined。
// 如果变量名在 变量对象 中已经存在, 什么都不做，继续扫描。
// 确定上下文中的 "this"
// 激活 / 代码执行阶段：
// 执行 / 在上下文中解释函数代码，并在代码逐行执行时给变量赋值。

// 让我们来看一个例子:

/*

function foo(i) {
    var a = 'hello';
    var b = function privateB() {

    };
    function c() {

    }
}

foo(22);
// 在调用foo(22) 的时候, 创建阶段 看起来像是这样:

fooExecutionContext = {
    scopeChain: { ... },
    variableObject: {
        arguments: {
            0: 22,
            length: 1
        },
        i: 22,
        c: pointer to function c()
        a: undefined,
        b: undefined
    },
    this: { ... }
}
// 你可以发现, 创建阶段 掌管着属性名的定义，而不是给它们赋值，不过参数除外。 一旦 创建阶段 完成之后，执行流就会进入函数中。 在函数执行完之后，激活 / 代码 执行阶段 看起来像是这样：

fooExecutionContext = {
    scopeChain: { ... },
    variableObject: {
        arguments: {
            0: 22,
            length: 1
        },
        i: 22,
        c: pointer to function c()
        a: 'hello',
        b: pointer to function privateB()
    },
    this: { ... }
}
*/

//作用域

function one() {
    
        two();
    
        function two() {
    
            three();
    
            function three() {
                alert('I am at function three');
            }
    
        }
    
    }
    
    one();

//入栈

// three()
// two()
// one()
// global

// three作用域 = three + two + one + global 

var myConsole = [];

for (var i = 0; i < 5; i++) {
    myConsole.push(
        function inner() {
           console.log(i)
        }
    );
}

console.log(i) // 5 

myConsole[0]() //5
myConsole[1]() //5
myConsole[2]() //5
myConsole[3]() //5
myConsole[4]() //5


//这个inner是创建在glbal上的，那么他的作用域也是global
//for语句执行完之后i再全局作用域上已经是5了。

//闭包的作用域

function foo() {
    var a = 'private variable';
    return function bar() {
        alert(a);
    }
}

var callAlert = foo();

callAlert(); // private variable

//入栈

// bar()
// foo()
// global

//bar的作用域是bar + foo + global

//我们通过callAlert()获得了foo，而foo函数返回了bar的函数指针，
// 那么callAlert的作用域和bar一样了，所以我们就能访问到foo函数内的私有变量了


//this到底指向谁

//在我们编写的类中我们希望this是指向该类的实例即对象时，我们确有时候会出错。下面让我讨论一下这个this
// 这里有this 呈现不同值的六种方式。它们分别是：

// 全局环境下的this
// 对象构造函数中的this
// 对象方法中的this
// 简单函数中的this
// 箭头函数中的this
// 事件监听器中的this

//在全局环境下this值global或者window
console.log(this) //浏览器下为window,通常情况下在全局下不使用this

//对象构造函数中的this
class Human {
    constructor(name) {
        this.name = name //this指向实例对象
    }
}

var people = new Human('Bill')
console.log(people.name) //Bill,此时this是people

var student = new Human('Jason')
console.log(student.name) // Jason 此时this只student

// 对象方法中的this

var o = {
    sayName() {
        console.log(this.name)
        console.log("this指向->", this)
    }
}

o.name = 'Bill'
o.sayName()

//Bill
// this指向-> { sayName: [Function: sayName], name: 'Bill' }

// 简单函数中的this

function sayName() {
    console.log(this) //window
}

//因为sayName我们是在全局作用域内所以里面的this事全局环境下的

//思考下面的代码

var o = {
    doSomethingLater () {
      setTimeout(function() {
        this.speak() // Error
      }, 1000)
    },
    speak() {
      console.log("Hello Boy")
    }
  }

  o.doSomethingLater() //TypeError: this.speak is not a function
  
  // setTimeout函数中的回调函数是在全局作用域上所以里面的this是指向window的
  //我们知道doSomethingLater实在对象o的作用域内的，那么我们就可以使用这个this，来替换下面的this

  var o = {
    doSomethingLater () {
        var that = this //这个this是指向o的
      setTimeout(function() {
        that.speak()
      }, 1000)
    },
    speak() {
      console.log("Hello Boy")
    }
  }

  o.doSomethingLater() //Hello Boy

// 使用es6中的箭头函数也可以解决上面的问题
// 箭头函数中的this总是它定义时所指向的环境。

class Increment {
    constructor(i) {
        this.i = i
    }

    print() {
        setInterval(handlerCallback, 1000) //Uncaught ReferenceError: handlerCallback is not defined //此时是在全局作用域上查找handlerCallback的定义
    }

    handlerCallback() {
        console.log(this.i ++)
    }
}

var time = new Increment(0)
time.print() 

//第三种在任意函数内改变this值的方式是使用bind, call 或 apply方法。我们在也经常使用bind来进行this的绑定

class Increment {
    
    constructor(i) {
        // debugger 打开这个可以在浏览器里调试
        this.i = i
    }

    print() {
        setInterval(this.handlerCallback, 1000) //这个this是指当前对象，在当前作用域查找handlerCallback的定义handlerCallback里是用了this.i
    }

    handlerCallback() {
        console.log(this.i ++) // 这个this指向了全局此时的i也被是全局的了
    }
}

var time = new Increment(0)
time.print() //NaN

//使用bind绑定

class Increment {
    
    constructor(i) {
        // debugger 打开这个可以在浏览器里调试
        this.i = i
    }

    print() {
        setInterval(this.handlerCallback.bind(this), 1000) //这句话的意思是handlerCallback函数里的this是指向当前对象的
    }

    handlerCallback() {
        console.log(this.i ++)
    }
}

var time = new Increment(0)
time.print() //1，2，3.....

//到这里是否明白了this的含义了吗，要结合我们上篇的作用域理解效果更佳

process


//从localStorage取出的bool值如何转换

const isPrint = localStorage.getItem("isPrint") //如果取不出默认是null, 如果有值是字符串

if (isPrint) {
    console.log("打印东西")
} else {
    console.log("不打印东西")
}



//数组类型

// Undefined, Null, Bollean, Number, String, Object六种数组类型 Symbol (new in ECMAScript 2015）

//typeof用来检测数据类型

var name;
var course = null;
var isStudent = true;
var grade = 80;
var sex = "女"
var student = {}

console.log(typeof name)
console.log(typeof course)
console.log(typeof isStudent)
console.log(typeof grade)
console.log(typeof sex)
console.log(typeof student)

// undefined
// object
// boolean
// number
// string
// object

//我们看到typeof null 会返回一个object 因为null会被认为是一个空对象引用。

// Undefined类型
// 只有一个undefined值

var message; //声明一个变量默认值是undefined
console.log(message) //undefined

// Null类型
// 只有一个特殊值 null,如果定义的变量用来保存对象，那么我们最好给他附上初始值null
// 实际上undefined是派生自null值得所以他们是相等的,但不是恒等的。他们typeof的值不同
console.log(undefined == null) //true
console.log(undefined === false) //false

// Boolean类型

// 有两个值true和false

// 什么时候是false

console.log(Boolean("")) //false 空字符串
console.log(Boolean(0)) //false 0
console.log(Boolean(NaN)) //false NaN
console.log(Boolean(null)) //false null
console.log(Boolean(undefined)) //false undefined

//其他情况下都是true比如

console.log(Boolean([])) //true 数组
console.log(Boolean({})) //true 对象
console.log(Boolean("哈哈哈")) // true 字符串

// if语句里会自动进行转换

var people = null;

if (!people) {
    console.log("非null")
}
// 非null

// Number类型

// 表示整数或者浮点数
console.log(070) // 八进制的56,八进制第一位必须是0然后是八进制数字（0-7）
console.log(0XA) //  十六进制的10 十六进制第一位必须是0x然后是（0-9）(A-F)
console.log(0b01) // 二进制的1 二进制是0b开头 后面是（0-1）

// 浮点数存在误差

if (0.1 + 0.2 === 0.3) {
    console.log("0.3") //不会执行
}

// NaN指非数值 

console.log(3/0) //Infinity
console.log(NaN/10) //NaN
console.log(NaN === NaN) //false

//使用isNaN函数判断是不是数值
console.log(isNaN(NaN)) //true

//isNaN接受到一个值后尝试把这个转换成数值如果成功就会返回false,其他就是true

console.log(isNaN('10')) //false
console.log(isNaN(true)) //false
console.log(isNaN('gg')) //true

//所以使用isNaN时要注意

// 调用isNaN函数时会先调用valueOf()方法，然后确定返回值是否可以转换成数值，如果不能则
// 根据这个返回值在调用toString()方法。

// 数值转换
// Number(), parseInt(), praseFloat()可以将非数值转换成数值
// 转换规则如下 
// Boolean true -> 1, false -> 0
console.log(Number(true)) //1
// Number 返回本身
// Null null -> 0
console.log(Number(null)) //0
//  字符串 

console.log(Number("123")) //123
console.log(Number("+123"))//123
console.log(Number("0123"))//123
console.log(Number("12.3"))//12.3
console.log(Number("0xf"))//15
console.log(Number(""))//0
console.log(Number("123哈哈哈")) //NaN
console.log(Number("哈哈123")) //NaN

//  Object
console.log(Number({age: 3})) //NaN
//如果是对象的话会先调用对象的valueOf()方法然后在按照前面的转换规则如果转换结果是NaN,在调用toString方法然后在依照前面的规则转换成字符串

// parseInt函数
console.log(parseInt("123")) //123
console.log(parseInt("+123"))//123
console.log(parseInt("0123"))//123
console.log(parseInt("12.3"))//12
console.log(parseInt("0xf"))//15
console.log(parseInt(""))//NaN
console.log(parseInt("123哈哈哈")) //123
console.log(parseInt("哈哈123")) //NaN

// parseInt第二个参数用来指定转换的进制
console.log(parseInt(11, 2)) //转换成二进制 3

// String类型

// String 类型由0个或多个Unicode字符组成的字符串序列可由单引号或者双引号表示
// 转义字符 \n 换行 \b 空格 \\斜杠等
// 特点：一旦创建值就不能改变，要改变某个变量保存的字符串，就要先销毁原来的字符串，然后在用另一个包含新值得字符串填充该变量

// 对象
// 对象就是数据和操作的集合，“Object类型是所有它的实例的基础。换句话说，Object类型所具有的任何属性和方法也同样存在于更具体的对象中
// 我们在Console里创建一个对象然后进行分析
var o = {};//快速创建一个对象。展开

// __proto__的读取器(getter)暴露了一个对象的内部 [[Prototype]] 。
// 对于使用对象字面量创建的对象，这个值是 Object.prototype。
// 对于使用数组字面量创建的对象，这个值是 Array.prototype。
// 对于functions，这个值是Function.prototype。
// 对于使用 new fun 创建的对象，其中fun是由js提供的内建构造器函数之一(Array, Boolean, Date, Number, Object, String 等等），这个值总是fun.prototype。
// 对于用js定义的其他js构造器函数创建的对象，这个值就是该构造器函数的prototype属性。
    
// __proto__ 的设置器(setter)允许对象的 [[Prototype]]被变更。
// 前提是这个对象必须通过 Object.isExtensible(): 进行扩展，如果不这样，一个 TypeError 错误将被抛出。
// 要变更的值必须是一个object或null，提供其它值将不起任何作用。
// 要理解原型如何被使用，请查看相关文章：Inheritance and the prototype chain。
    
// .__proto__属性是Object.prototype 一个简单的访问器属性，其中包含了get（获取）和set（设置）的方法，任何一个__proto__的存取属性都继承于Object.
// prototype，但一个访问属性如果不是来源于Object.prototype就不拥有.__proto__属性，譬如一个元素设置了其他的.__proto__属性在Object.prototype之前，将会覆盖原有的Object.prototype。

//上面是MDN里的描述，其实就是说__proto__指向它的原型。现在就是指向Object

// JavaScript中几乎所有的对象都是 Object 的实例; 所有的对象都继承了Object.prototype的属性和方法，它们可以被覆盖（除了以null为原型的对象，如 Object.create(null)）。
// 例如，新的构造函数的原型覆盖原来的构造函数的原型，提供它们自己的 toString() 方法.。
// 对象的原型的改变会传播到所有对象上，除非这些属性和方法被其他对原型链更里层的改动所覆盖。

var o = {} // o的原型链指向Object，也就说从Object继承过来的
var o = Object.create(null) //o是没有原型链的

var Person = function() {
    this.canWork = true
    this.job = ''

    this.say = function() {
        if(this.canWork) {
            console.log(this.name + ":" + "Hello" + "->" + this.job)
        }
    }
}

var Student = function(name) {
    this.job = 'Student'
    this.name = name
}

Student.prototype = new Person() //让Student的原型指向Person,那么它就拥有了Person的方法和属性

var stu = new Student("Bill")
stu.say() //Bill:Hello->Student

// Object.prototype.constructor
// 返回了一个创建该对象原型的函数引用

var o = {}
var array = new Array()
var func = new Function()

console.log(o.constructor === Object) //true
console.log(array.constructor === Array) //true
console.log(func.constructor === Function) //true

// Object.assign(target, ...sources)
// 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象

var people = {name: "Bill"}
var son = {age: 10}

var clonePeople = Object.assign(people, {age: 3, grade: 80, son: son})
console.log(people === clonePeople)

people.age = 5
console.log(people.age) //5
console.log(clonePeople.age)//5

people.son.age = 11
console.log(people.son.age)
console.log(clonePeople.son.age)

// 所以Object.assign这是浅拷贝（继承属性和不可枚举的属性是不能进行copy的）

// Object.defineProperties(obj, props)
// 在一个对象上创建新的属性或者修改旧属性的值，并返回本身
// 属性本身有几种修改方式
// configurable?: boolean;
// enumerable?: boolean;
// value?: any;
// writable?: boolean;
// get?(): any;
// set?(v: any): void;

var people = {}
Object.defineProperties(people, {
    name: {
        value: "Bill",
        writable: true
    },
    age: {
        get: function() {
            return 10
        }
    }
})

people.name = "Jason"
console.log(people.name) //Jason
people.age = 11
console.log(people.age) //10

// Object.entries() 方法返回一个给定对象自己的可枚举属性[key，value]对的数组。

var p = {name: "Bill", age: 3}
console.log(Object.entries(p)) //[["name", "Bill"], ["age", "3"]]

//将Object转换成Map
var map = new Map(Object.entries(p))

// Object.freeze() 冻结一个对象，使他不能被修改。

var p = {name: "Bill", age: 3}
var freezeP = Object.freeze(p)
console.log(Object.isFrozen(p)) //true

console.log(freezeP === p) //true
p.name = "jason"
console.log(p.name) //Bill 严格模式会报错

