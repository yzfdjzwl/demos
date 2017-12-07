记录自己的学习过程：

- 基本的实现原理是什么?

``` javascript
基本的原理是一个carousel的div里包含了一个ul标签，ul标签里放的是图片。
实际上改变的是ul标签的left值。
```

- 如何实现无缝轮播

``` javascript
这里所使用的方法是将所有图片都拷贝了一份
for(var i = 0, len = aLi.length;i < len;i++) {
	warper.appendChild(aLi[i].cloneNode(true));
}

// 有一个index控制图片的下标，从0开始的
// 当每次点击按钮时，判断下标
// 要控制两种极限的情况
// 一是：在第一张图片的时候，点击prev，需要将第一张图片换成第六张图片，然后再左移动
// 二是：在最后一张照片的时候，点击next, 需要将最后一张照片换成第五张照片，然后再右移
// 注意：在点击按钮的时候，要控制index的变化，index是从0开始的
```

- 如何控制停止

``` javascript

之前我自己是通过是否移动了一张图片的距离来控制停止，但是我发现这样会出bug。
因为如果多次点击的话，就会出现卡顿的情况，迫不得已看了豪情大大是如何实现的。

// 豪情的实现方法是判断当前的left值是否和最终移动后的left值相等
// 如果相等的话，就停止了。这里也有老师的速度小算法

function move(obj, attr, target) {
	if(obj.timer) {
		clearInterval(obj.timer);	
	}
	obj.timer = setInterval(function(){
		var stop = true;	
		var nowLeft = parseInt(getStyle(warper, attr));

		var speed = (target-nowLeft) / 8;
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

		if(nowLeft != target) {
			stop = false;
			obj.style[attr] = nowLeft + speed + "px";
		}
		if(stop) {
			clearInterval(obj.timer);
			obj.timer = null;
		}
	}, 30);
}
```

- 如何控制速度

``` javascript
看代码
```

- 如何清除卡顿

``` javascript
点击之前要清除定时器
结束后也要清除定时器
```

- 如何获取当前的left值

``` javascript
因为obj.style.left这个left值是写在html中的才可以获取到。
所以我自己封装了一个小方法
// currentStyle for IE
function getStyle(obj, attr) {
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}
```

- 如何自动播放

- tab也要切换

- 如何点击tab切换

- 如何实现暂停 


一些知识：

``` javascript
// 在已有节点前插入节点 
warper.insertBefore(aLi[aLi.length-1].cloneNode(true), aLi[0]); // 新节点、已有节点

// clientWidth、offsetWidth、scrollWidth	

clientWidth: 是对象看到的宽度（不含边线、即border）
scrollWidth: 获取对象的滚动宽度。
scrollHeight: 获取对象的滚动高度。
offsetWidth: 是指对象自身的宽度，整型，单位像素(含边线, 如滚动条的占用的宽，值会随着内容的输入不断改变)。



document.body.clientWidth; // <body>
document.body.clientHeight;
document.documentElement.clientWidth; // <html>
document.documentElement.clientHeight;
```