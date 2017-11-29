
<!-- vim-markdown-toc GFM -->
* [列表渲染](#列表渲染)
    * [用v-for把一个数组对应为一组元素](#用v-for把一个数组对应为一组元素)
    * [一个对象的v-for](#一个对象的v-for)
    * [key](#key)
    * [数组更新检测](#数组更新检测)
        * [变异方法](#变异方法)
        * [替换数组](#替换数组)
        * [注意事项](#注意事项)
    * [对象更改检测注意事项](#对象更改检测注意事项)

<!-- vim-markdown-toc -->

## 列表渲染

### 用v-for把一个数组对应为一组元素
* 普通用法见[index-1.html](./index-1.html)
* 对于`v-for`来讲，我们拥有对父级作用域属性的完全访问权限，`v-for`还支持一个可选的第二个参数为当前项的索引, 见[index-2.html](./index-2.html)
* 当然，还可以使用`of`来代替`in`。

### 一个对象的v-for
* 普通用法看[index-3.html](./index-3.html)
* 还可以提供第二个参数作为键名，见[index-4.html](./index-4.html)
* 还可以提供第三个参数作为索引，见[index-5.html](./index-5.html)

### key
* 类似于React的key
* 使用方法
```html
<div v-for="item in items" :key="item.id">
    <!-- content -->
</div>
```

### 数组更新检测

#### 变异方法
Vue包含一组观察数组的变异方法，所以它们也将会触发视图更新。这些方法如下：
* push()
* pop()
* shift()
* unshift()
* splice()
* sort()
* reverse()

#### 替换数组
变异方法，顾名思义，会改变被这些调用的原始数组。相比之下，也有非变异方法，如:`filter(), concat(), slice()`。这些不会改变原始数组，但总是返回一个新数组。当使用非变异方法时，可以用新数组替换旧数组。
```javascript
example1.items = example1.items.filter(function(item) {
    return item.message.match(/Foo/)
});
```

#### 注意事项
由于JavaScript的限制，Vue不能检测一下变动的数组:
* 当你利用索引直接设置一个项时，`vm.items[indexOfItem] = newValue`
* 当你修改数组的长度时，`vm.items.length = new Length`
因此为了解决第一类问题，可以使用下面两种办法:
```javascript
// method1
Vue.set(example.items, indexOfItem, newValue);

// method2
example1.items.splice(indexOfItem, 1, newValue);
```
为了解决第二类问题，可以使用`splice`:
```javascritp
example1.items.splice(newLength);
```

### 对象更改检测注意事项
由于JavaScript的限制，Vue不能检测对象属性的增加或删除:
```javascript
const vm = new Vue({
    data: {
        a: 1
    }
});
// vm.a 现在是响应式的
vm.b = 2;
// vm.b 不是响应式的
```
对于已经创建的实例，Vue不能动态添加根级别的响应式属性。但是，可以使用`Vue.set(Object, key, value)`方法向嵌套对象添加响应式属性。比如，对于:
```javascript
var vm = new Vue({
    data: {
        userProfile: {
            name: 'yuzf'
        }
    }
});
// 可以添加一个新的age属性到嵌套的`userProfile`对象
Vue.set(vm.userProfile, 'age', 27);
// 或者使用vm.$set实例方法, 它只是全局Vue.set的别名
this.$set(this.userProfile, 'age', 27);
```
