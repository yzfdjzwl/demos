
<!-- vim-markdown-toc GFM -->
* [条件渲染](#条件渲染)
    * [v-if](#v-if)
        * [在<template>元素上使用v-if条件渲染分组](#在template元素上使用v-if条件渲染分组)
        * [v-else](#v-else)
        * [v-else-if](#v-else-if)
        * [用key管理可复用的元素](#用key管理可复用的元素)
    * [v-show](#v-show)
    * [v-if VS v-show](#v-if-vs-v-show)
    * [v-if 与 v-for一起使用](#v-if-与-v-for一起使用)

<!-- vim-markdown-toc -->

## 条件渲染

### v-if

在Vue中，我们使用`v-if`指令实现:
```javascript
<h1 v-if="ok">Yes</h1>
// 也可以使用`v-else`添加一个"else"块:
<h1 v-if="ok">Yes</h1>
<h1 v-else>No</h1>
```

#### 在<template>元素上使用v-if条件渲染分组

可以把`<template>`元素当作不可见的包裹元素，并且在上面使用`v-if`。最终的渲染结果不包含`<template>`元素。

```html
<template v-if="ok">
    <h1>Title</h1>
    <p>Paragraph</p>
    <p>Paragraph</p>
</template>
```

#### v-else

可以使用`v-else`指令来表示`v-if`的"else"块:
```html
<div v-if="Math.random() > 0.5">
    Now you see me
</div>
<div v-else>
    Now you don't
</div>
```
`v-else`元素必须紧跟在带`v-if`或`v-else-if`的元素后面，否则它将不会被识别。

#### v-else-if

> 2.1.0新增

```html
<div id="app">
    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>Not A/B/C</div>
</div>
```
javascript代码如下：
```javascript
var vm = new Vue({
    el: '#app',
    data: {
        type: 'D',
    }
});
```
同样的，`v-else-if`也必须紧跟在带`v-if`或者`v-else-if`的元素之后。

#### 用key管理可复用的元素

由于Vue会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么除了使Vue变得非常快之外，还有其他的一些好处。比如，如果你允许用户在不同的的登陆方式之前切换:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <script src="https://unpkg.com/vue"></script>
</head>
<body>
    <div id="app">
        <template v-if="loginType === 'username'">
            <label>Username:</label>
            <input placeholder="Enter your username" />
        </template>
        <template v-else>
            <label>Email:</label>
            <input placeholder="Enter your email" />
        </template>
        <div>
            <button v-on:click="toggle">Toggle login type</button>
        </div>
    </div>
    <script>
        var vm = new Vue({
            el: '#app',
            data: {
                loginType: 'email',
            },
            methods: {
                toggle: function() {
                    this.loginType = this.loginType === 'username' ? 'email' : 'username';
                }
            },
        });
    </script>
</body>
</html>
```
在上面的代码中切换`loginType`将不会清楚用户已经输入的内容。因为两个模板使用了相同的元素，`<input>`不会被替换---仅仅是替换了它的`placeholder`。这样也不总是符合实际需求，所以Vue提供了一种方式来表达"这两个元素是完全独立的，不要复用它们"。只需添加一个具有唯一值的`key`属性即可。
```html
<template v-if="loginType === 'username'">
    <label>Username:</label>
    <input placeholder="Enter your username" key="username-input" />
</template>
<template v-else>
    <label>Email:</label>
    <input placeholder="Enter your email" key="email-input" />
</template>
```
现在，每次切换的时候，输入框都重新渲染了，但是`label`元素还是会被高效地复用，因为它们没有添加`key`属性。

### v-show

另一个根据条件展示元素的选项是`v-show`指令。用法大致一样:
```html
<h1 v-show="ok">Hello</h1>
```
不同的是带有`v-show`的元素始终会被渲染并保留在DOM中。`v-show`只是简单地切换元素的CSS属性`display`。
> 注意`v-show`不支持`<template>`元素，也不支持`v-else`。

### v-if VS v-show

* `v-if`是真正的条件渲染，因为它会确保咋i 切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
* `v-if`也是惰性的: 如果在初始渲染时条件为假，则什么也不做----直到条件第一次变为真时，才会开始渲染条件块。
* 相比之下, `v-show`就简单得多 --- 不管初始条件是什么，元素总是会被渲染，并且只是简单得基于CSS进行切换。
* 一般来说，`v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用`v-show`较好；如果在运行时条件很少改变，则使用`v-if`较好。

### v-if 与 v-for一起使用

当`v-if`与`v-for`一起使用时，`v-for`具有比`v-if`更高的优先级。
