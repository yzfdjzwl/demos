这次模仿，主要是为了提升CSS和HTML水平，也在尽量向HTML5标准靠拢。

整体分析---> 提取公共样式 ---> 个体分析好了HTML结构是如何的,该如何定位，想清楚 ---> 开始写。--->先定位 ---> 后调整样式

# 分析

## header部分

* 第一反应，是将整个部分为三部分，左边是一张logo，浮动过后，用的是左侧margin，上部分padding。

* 中间的搜索部分，整体采用浮动。

	* 左侧margin，上部分margin。为整体设置边框，然后设置整体的宽度和高度，使用line-height进行居中.

    * "网页"作为子元素，使用padding-left改变它的位置，后面的箭头符号使用的背景图，display:inline-block,设置margin-left进行改变位置，vertical-middle进行垂直居中。

	* 而后面的sougo的logo是设置input标签的背景图片, background: url() no-repeat right center;最后的搜索按钮采用的是绝对定位。text-align:center进行水平居中，line-height进行垂直居中。

* 最后一个部分，作为一个ul标签，右浮动，然后设置右上的margin值，通过控制margin调整几个图标之间的距离，通过设置padding和height来调整图标居中。

## nav部分

源码是设置的背景图，然后对整体设置padding值(padding-left为12px)来控制它们的显示。内部有一个大的div，设置宽度为988。接下来，每一个小块都是一个div，每个div里有三个链接。让div左浮动。每个div之间通过padding-left和padding-right来控制div之间的距离，而div里的3个链接，设置了链接的padding值加上背景颜色让它看起来更好一点儿，链接之间的距离通过设置margin-left和right来控制的。而对于每一行的最后一个div只有两个链接，那么设置它的固定长度即可。

而我的做法是：

其实差不多，只不过为把它们分成了ul和li，用了两层ul达到的。但是没有设置行高，所以下一行时，用了margin-top来控制它们之间的距离，所以这个地方一定要注意。

## ad1部分

左边的左浮动，有边的右浮动。

## qq-con1

第一个大部分的新闻：

* 整体还是分为两部分，分别左浮动，右浮动。

* main部分，又分为两部分，左边部分和右边部分，分别左浮动和右浮动。左边的div设置定高，超出后溢出。

	* 左边我又将它分成了3个新闻块。关于第一块的头部，写的时候有两个地方要注意。第一个是浮动，如果没有用div包裹它，将两个链接进行浮动后，下面的布局会出问题，也就是浮动的问题。所以要用div包裹起来，然后overflow:hidden触发BFC，就不存在那个问题了。

	* 第二个问题是，如何让"要闻"的顶部遮住父级div的border，首先，"要闻"的顶部，是设置的一张背景图，水平重复，然后通过padding来控制它离文字顶部的距离，然后设置行高，和高度来控制整个"要闻"的效果，最后设置"要闻"的margin-top: -1px。它的背景图就将父级border给覆盖了。之前，设置父级的overflow: hidden将超出的部分给隐藏了，还调了一会儿。

	* 有边的图片和文字, 它们作为一个整体, 右边margin, 上面padding控制整体的位置。个体之间通过margin控制距离，然后通过height、line-height和padding来控制它们垂直居中。

* 新闻列表，font-size:14px， 行高28px控制行高效果。这里注意设置a的颜色时候，需要将颜色设置到a标签上。而li标签前面的图片，设置li的padding-left, 然后设置背景图background: url() no-repeat left center; 当超出行的时候, overflow: hidden控制超出部分隐藏，white-space: nowrap控制不换行，而text-overflow: ellipsis控制用"..."来表示超出内容。

* 关于图片和文字的布局，图片左浮动，文字右浮动。控制宽度和行高。


第一大部分的右侧广告：

* 第一块内容：QQ一系列的东西
	
	* 关于这块，对每一行的内容设置了padding-top和padding-left, 然后设置每一个div的高度，这样，它们看起来就是居中的，然后图片是设置的背景图。通过控制a链接的margin来控制它们之间的距离。
	
	* 如果对于有两行的内容时，它与一行内容不同的是，只设置了它的行高，并没有设置整个div的高度。它们之间的换行是通过br标签换行的。


* 第二块内容：京东广告，这个没有什么好说的，因为内部用的是浮动和绝对定位。

* 第三块内容： 股票。 

	* 首先分析整体，内部设置一个inner div，设置整体的padding-top和padding-left。

	* 将它们整体分为4个大块。

	* 第一个大块有h4和搜索框，h4左浮动，搜索框右浮动，然后相对定位，通过改变right的值来定位它的位置。 设置整个搜索框的高度和宽度(将搜索按钮算入) ，然后设置行高，让里面的内容居中。对input type="text"设置相关的属性来显示它的样式，并且设置了它的宽度。然后将搜索按钮绝对定位到最后面。 设置按钮的高度和宽度，通过line-height和text-align：center来居中。

	* 下面一整行是ul的公司名字，因为上面两个都浮动了，脱离文档流了，所以设置ul与上面的margin值不能够改变它们之间的距离，我的解决办法是，将上面的h4和搜索框用个div包裹起来，然后overflow: hidden触发BFC，就OK了。

	* 这一行的ul，设置li的高度和宽度，以及行高和text-align: center来居中文字。如果宽度不固定的话，我想应该用padding-left和padding-right来居中文字。我发现，不同li之间存在竖线分割不同的li，于是设置li的border-right来模拟竖着的线。记得清除浮动。

	* 下面这块的内容，左边是图片，右边是3个不同的值。左边的左浮动，设置左边图片的margin-right来对齐右边。对右边整个div整体设置padding-top来控制整体的距离，然后上下两个a链接都没有多少样式，它们和中间的距离，是通过控制中间的a链接的高度和行高来控制的。

	* 而最下面是一个a链接，由于a链接是inline，而上面又是div，所以设置它的padding-top是不会改变自己的位置的，因为inline元素是内联元素，脱离了文本流，设置它的padding任何值都不会影响周围的block元素，同样，它自己的位置也不会改变。而本身对inline且不可替换元素设置margin-top和margin-bottom是看不出来效果的(因为对行高没有任何影响)。所以我设置了上一个div的margin-bottom来控制它们之间的距离。

* 第四块内容:星座

	* 最后一块内容是星座，整体分析，设置内部inner的padding-top和padding-left来显示整体的样子。分析结构，将整体分为3个部分。
	
	* 第一部分只有一个h4，这个很简单。

	* 第二个部分，是一个图片和有边的文字。对图片左浮动，同时设置图片四个方向的padding值来控制它的内边距。右边部分用一个div包裹起来，同时左浮动，用margin-top来调整它的距离。上面是一个select，而下面，同样，用一个div包裹起来，左边文字用p标签，右边是一张图片，左浮动，p标签也是左浮动的。那么如何来控制与上面的select的距离呢？对左边p标签设置margin-top，右边图片设置margin-top,都是10px，看起来就是在同一行的了。


## 第二大新闻部分

先分析，注意提取公共样式。

仔细观察，我发现，腾讯主页的新闻主要分为三种布局。

三种布局相同的地方就是，都会分成三列，不同的地方就是三种布局的header不一样。

第一种header，分为2块。第一块是左边的，第二块是右边的。而对于左边的布局，header是一大块，所以得先对一大块header进行布局，假设现在这个大块div是a，a左边是几个链接，左浮动，右外边距设置它们的距离，右边是一个div，右浮动，有一个小地箭头，整体设置它们的高度和它们的行高。而小图标，它却不能对齐。

单独说明小箭头，它的html结构是这样的：

```
<div class="par">
	<a></a>
	<i class="arrow"></i>
</div>
```

小箭头作为i标签的背景图，而i标签又没有内容，所以i标签不能被撑起来，所以必须对i标签设置高度和宽度，但是i标签又是inline元素，改变它的display: inline-block;最终我发现，它并没有在垂直方向上对齐文本。so vertical-align: middle;

而对下面的图片和文字以及ul是如何布局的呢？

首先，它们作为一个整体部分，要和上面的header有距离，设置整体的padding-top。而对于图片和文字，图片左浮动，文字右浮动，设置文字的padding-top来确定它的位置，以及设置它的固定宽度以及行高。

而下面的ul与上面的div的距离，设置margin-top。

其他地方都大体差不多。没有什么好讲的了。


关于儿童频道，是一个特殊的地方。它是上面是图片，下面是文字，然后4个这样的布局，之前我在思考如何让下面的文字对齐上面的图片，直接看的源码，是这么做的。

```
<div class="item">
	<a><img src=""></a>	
	<p></p>
</div>
```

通过p标签来换行，然后设置p的高度和图片高度一样，p设置文字居中，text-align: center。然后控制margin来设置它和图片的距离。









	
