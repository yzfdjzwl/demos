## 什么是闭包

如果一个函数访问了它的外部变量，那么它就是一个闭包。

闭包，是词法闭包的简称，是引用了自由变量的函数。

闭包是指那些能够独立访问独立(自由)变量的函数(变量在本地使用，但定义在一个封闭的作用域中)。换句话说，这些函数可以"记忆"它被创建时的环境。

```
function makeFunc() {
	var name = "Mozilla";
	function displayName() {
		console.log(name);
	}
	return displayName;
}

var myFunc = makeFunc();
myFunc(); // "Mozilla"
```

上面这个例子，是因为myFunc变成了一个闭包。闭包是一种特殊的对象，它由两部分组成: 函数，以及创建该函数的环境。环境由闭包创建时在作用域中的任何局部变量组成。在我们的例子中，myFunc是一个闭包，由displayName函数和闭包创建时存在的"Mozilla"字符串形成。


它的作用一般用于：

* 实现私有作用域

* 异步/事件驱动

## 关于闭包的应用

**循环中常见的闭包：**

```
for(var i = 0;i < 5;i++) {
	var a = function() {
		console.log(i);
	}
	a();
}
```

将会打印出0, 1, 2, 3, 4, 这没什么毛病。 

**setTimeout中的闭包:**

```
for(var i = 0;i < 5;i++) {
	setTimeout(function() {
		console.log(i);
	}, 1000);
}
```

上面的例子将打印出5个5。setTimeout的回调函数调用了外部作用域的i，i和回调函数形成了闭包。其实，setTimeout()是在循环结束后才开始执行的，这是setTimeout的一种机制.

setTimeout是从**任务队列结束的时候开始计时的, 如果前面的进程没有结束，那么它就等到它结束后再开始计时。** 在这里，任务队列就是它自己所在的循环。循环结束后，setTimeout才开始计时，所以无论如何，setTimeout里面的i都是最后一次循环的i。(这里涉及到JavaScript是单线程的。)

那么如果我们想让它每隔一秒打印0, 1, 2, 3, 4该怎么做呢？

```
for(var i = 0;i < 5;i++) {
	setTimeout((function(n){
		console.log(n);
	})(i), i * 1000);	
}
```

但是实际上，我发现，这样是行不通的，这样就直接打印了0, 1, 2, 3, 4， 并没有每隔一秒打印。因为是外面包裹的是一层立即执行函数。代码会立即执行第一个参数里的代码。然后将它的返回值(undefined)传递给setTimeout。

[jQuery学习文档有对函数的这种用法有说明。](https://learn.jquery.com/about-jquery/how-jquery-works/)

那么，按照上面的理解，我就知道了我下面的做法将可以实现我想要的功能。

```
for(var i = 0;i < 5;i++) {
	setTimeout((function(n) {
		return function() {
			console.log(n);
		}
	})(i), i * 1000);
}

// 如果这么写，也是可以实现的
for(var i = 0;i < 5;i++) {
	(function(j) {
		setTimout(function(j) {
			console.log(j);
		}, j * 1000);
	})(i);
}

```

这也就是为什么我的轮播点击事件那里要这么写了。

**循环、事件中的闭包**

给出下面一个例子，猜猜结果是什么呢？

```
for(var i = 0;i < 2;i++) {
	function a() {
		console.log(a);
	}

	btn.addEventListener('click', a);
}

for(var i = 0;i < 5;i++) {
	function a() {
		console.log(a);
	}

	btn.addEventListener('click', a);
}
```

如果你点击了按钮，这个例子的打印结果是7个5。如果想要打印2个2，5个5该如何做呢？

```
(function(){
	for(var i = 0;i < 2;i++) {
		function a() {
			console.log(i);
		}
		btn.addEventListener('click', a);
	}
})();

for(var i = 0;i < 5;i++) {
	function a() {
		console.log(a);
	}
	btn.addEventListener('click', a);
}
```

如果点击按钮后想要打印2个2，依次打印0, 1, 2, 3, 4该如何做呢？ 

```
(function(){
	for(var i = 0;i < 2;i++) {
		function a() {
			console.log(i);
		}
		btn.addEventListener('click', a);
	}
})();


for(var i = 0;i < 5;i++) {
	btn.addEventListener('click', (function(n) {
		return function() {
			console.log(n);
		}
	})(i));
}
```

这里函数要return的原因还是因为如果不return，自执行函数就直接执行了。而不是点击按钮再打印。 

同样，这样，也可以实现，打印0, 1, 0, 1, 2, 3, 4。 代码如下：

```
(function() {
	for(var i = 0;i < 2;i++) {
		function a(j) {
			return funtion() {
				console.log(j);	
			}
		}
		btn.addEventListener('click', a[i]);	
	}
})();

for(var i = 0;i < 5;i++) {
	btn.addEventListener('click', (function(n) {
		return function() {
			console.log(n);
		}
	})(i));
}
```

当然，闭包还有其他应用场景，比如namespace等等，以后再做介绍。

**参考:**

![How do JavaScript closures work?](http://stackoverflow.com/questions/111102/how-do-javascript-closures-work)

![You don't know JS: closure](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/ch5.md)

![闭包](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures)

![循环中的闭包](https://segmentfault.com/a/1190000000471569)
