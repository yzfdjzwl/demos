# 瀑布流

瀑布流的布局有几种，比如绝对定位或者说浮动。
这里主要介绍一下绝对定位。

## 实现方式

* 随机生成20个div，每个div设置随机的高度。

* 对20个div进行重组。

	* 获取视口宽度

	* 获取每行可以放的div的数量
	
	* 用一个数组存放div的高度

	* 如果第一行排满了，就从第二行开始排(这里就涉及到要找div最低的高度)

	* 如果第一行未排满，那么就继续排

* 窗口大小改变时，也对div进行重组。

* 浏览器滑动时，进行懒加载。

## 复习到的知识 

* chrome调试

* Math函数

```
Math.random() // 产生0到1的随机数，包括0，不包括1
Math.floor()  // 参数是一个number，向下取整
Math.round() // 参数是一个number，四舍五入
Math.ceil() //  参数是一个number，向上取整, ceil 是天花板的意思
```

* 浏览器会对document.documentElement.xxx与document.body.xxx解析会不一样，不同的浏览器都可能不会一样。

## 思路来源 

[原生JS实现瀑布流](http://www.cnblogs.com/wuzhiquan/p/4786991.html)

		

