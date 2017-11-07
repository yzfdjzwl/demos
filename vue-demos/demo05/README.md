<!-- vim-markdown-toc GFM -->
* [Class和Style绑定](#class和style绑定)
    * [绑定HTML CLass](#绑定html-class)
        * [对象语法](#对象语法)
        * [数组语法](#数组语法)
        * [用在组件上](#用在组件上)
    * [绑定内联样式](#绑定内联样式)
        * [对象语法](#对象语法-1)
        * [数组语法](#数组语法-1)
        * [自动添加前缀](#自动添加前缀)
        * [多重值](#多重值)

<!-- vim-markdown-toc -->
## Class和Style绑定

由于它们都是属性，那么我们使用`v-bind`来处理它们：将其通过表达式计算出字符串结果就可以了。但是字符串拼接容易出错，所以在使用`v-bind`绑定`class`和`style`的时候，Vue做了专门的增强，表达式的结果除了是字符串之外，还可以是对象和数组。

### 绑定HTML CLass

#### 对象语法

```html
<div v-bind:class="{ active: isActive }"></div>
```
上面的语法表示，如果`isActive`是true的话，那么将会被渲染成:`<div class="active"></div>`，当然，`v-bind:class`指令还可以和普通的class属性共存，当有下面的模板时:
```html
<div class="static"
     v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>

data: {
    isActive: true,
    hasError: false,
}
```
当有`data`这样的数据模板时，那么渲染出来的结果就是:`<div class="static isActive"></div>`，当然，绑定的对象不必内联在模板里:
```html
<div v-bind:class="classObject"></div>
```
javascript代码如下:
```javascript
data: {
    classObject: {
        active: true,
        'text-danger': false,
    },
}
```
这里渲染的结果和上面一样，同样，我们还可以绑定一个返回对象的计算属性。这是一个常用并且非常强大的模式:
```html
<div v-bind:class="classObject"></div>
```
javascript代码如下:
```javascript
data: {
    isActive: true,
    error: null
},
computed: {
    classObject: function() {
        return {
            active: this.isActive && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
        }
    }
}
```

#### 数组语法

我们可以把一个数组给`v-bind:class`, 以应用一个class列表:
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
javascript代码如下:
```javascript
data: {
    activeClass: 'active',
    errorClass: 'text-danger'
}
```
渲染的结果如下:
```html
<div class="active text-danger"></div>
```
如果想要根据切换列表重的class，可以用三元表达式:
```html
<div v-bind:calss="[isActive ? activeClass: '', errorClass]"></div>
```
这样写将始终添加`errorClass`, 但是只有当`isActive`为TRUE的时候才添加`activeClass`。
不过当有多个条件class时这样写有些繁琐。所以在数组语法中也可以使用对象语法:
```html
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

#### 用在组件上

当一个自定义组件上使用`class`属性时，这些类将被添加到根元素上面。这个元素上已经存在的类不会被覆盖。
比如，如果你声明了这个组件:
```javascript
Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
});
```
然后在使用它的时候添加一些class:
```html
<my-component class="baz boo"></my-component>
```
那么html将会被渲染为:
```html
<p class="foo bar baz boo">Hi</p>
```
同样，对于带数据绑定class也同样使用:
```html
<my-component v-bind:class="{ active: isActive}"></my-component>
```
当`isActive`为true的时候，HTML将会被渲染为:
```
<p class="foo bar active">Hi</p>
```

### 绑定内联样式

#### 对象语法

`v-bind:style`的对西那个语法十分直观---看着非常像CSS，但其实是一个JavaScript对象。CSS属性名可以用驼峰式或短横线分隔(记得用单引号扩起来)来命名:
```html
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```
javascript代码如下:
```javascript
data: {
    activeColor: 'red',
    fontSize: 30,
}
```
当然，还是可以直接绑定到一个对象上, 这样更好:
```html
<div v-bind: style="styleObject"></div>
```
javascript代码如下:
```javascript
data: {
    styleObject: {
        color: 'red',
        fontSize: '13px',
    }
}
```

#### 数组语法

它和Class绑定类似，也可以应用数组语法: `<div v-bind-style:"[baseStyle, overridingStyle]"></div>`。

#### 自动添加前缀

当`v-bind:style`使用需要添加浏览器的CSS属性时，如`transform`, Vue也会自动添加响应的前缀。

#### 多重值

具体参考[官网](https://cn.vuejs.org/v2/guide/class-and-style.html)最低端。
