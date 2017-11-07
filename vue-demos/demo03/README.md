
<!-- vim-markdown-toc GFM -->
* [插值](#插值)
    * [文本](#文本)
    * [原始HTML](#原始html)
    * [特性(其实说的就是html里的属性)](#特性其实说的就是html里的属性)
    * [使用JavaScript表达式](#使用javascript表达式)
* [指令](#指令)
    * [参数](#参数)
    * [修饰符](#修饰符)
* [缩写](#缩写)

<!-- vim-markdown-toc -->
## 插值

### 文本
```html
<span>This is a message: {{ msg }}</span>
```

1. 无论何时，绑定的数据对象上的`msg` 属性发生了改变，插值处的内容都会更新。
2. 可以使用 `v-once` 指令，进行一次性插值，也就是说，后面不会改变。

### 原始HTML
```html
<div v-html="rawHtml"></div>
```

如何使用请看[这里](./index-1.html), 注意安全使用，不然会导致XSS攻击。

### 特性(其实说的就是html里的属性)
双大括号语法不能作用在HTML上，遇到这种情况应该使用 `v-bind` 指令。如何使用请查看[这里](./index-2.html)。这也同样适用于布尔类特性，如果结果是[falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy), 那么该特性会被删除。

### 使用JavaScript表达式

Vue提供了完全的JavaScript表达式支持。举例: 
```javascript
{{ number + 1 }}

{{ ok ? '1' : '0' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

但是有个限制是，每个绑定都只能包含单个表达式，所以下面的例子不会生效。
```javascript
// 这是语句，不是表达式
{{ var a = 1 }}

// 流程控制也不会生效，请使用三元表达式
{{ if (ok) {} }}
```

## 指令

指令是带有 `v-` 前缀的特殊属性，指令属性的值预期是单个JavaScript表达式(v-for是个例外)。

### 参数

一些指令能够接收一个"参数", 在指令名称之后以冒号表示。例如， `v-bind` 指令可以用于响应式地更新HTML属性:
```html
<a v-bind:href="url">...</a>
<a v-on:click="doSomething">...</a>
```

### 修饰符

修饰符是以 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。比如`.prevent`修饰符告诉 `v-on`指令对于触发的事件调用`event.preventDefault()`:
```html
<form v-on:submit.prevent="onSubmit">...</form>
```

## 缩写

有的指令经常用到，因此为`v-bind`和`v-on`这两个常用的指令提供了简写。
```html
<a v-bind:href="url">...</a>
<a :href="url">...</a>

<a v-on:click="doSomething">...</a>
<a @click="doSomething">...</a>
```

