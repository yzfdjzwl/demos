## Index

<!-- vim-markdown-toc GFM -->
* [基础](#基础)
    * [模块](#模块)
        * [require, exports, module](#require-exports-module)
        * [require](#require)
        * [exports](#exports)
* [代码的组织以及部署](#代码的组织以及部署)
    * [模块解析规则](#模块解析规则)
    * [包(package)](#包package)
        * [index.js](#indexjs)
        * [package.json](#packagejson)
    * [命令行程序](#命令行程序)
* [文件操作](#文件操作)
    * [fileSystem](#filesystem)
* [Demo Index](#demo-index)
* [Userful Link And Reference](#userful-link-and-reference)

<!-- vim-markdown-toc -->

## 基础

### 模块

#### require, exports, module

1. 三者是干嘛的。
2. module.exports与exports的区别。

#### require

1. 用于在当前模块加载其他的模块。
2. 可以使用相对路径`./`以及绝对路径`/`。
3. `.js`可以省略。

#### exports

## 代码的组织以及部署

### 模块解析规则

### 包(package)

#### index.js

#### package.json

### 命令行程序

## 文件操作

### fileSystem

* fs.writeFileSync()
* fs.readFileSync()
* fs.readFile()
* fs.createReadStream()
* fs.createWriteStream()

## Demo Index

1. [Simple Package](./demo01)
2. [Simple Package: Default index.js](./demo02)
3. [Complex Package: A Complex Directory Config](./demo03)
4. [A Simple CLI](./dmeo04)
5. [A Simple CLI: Copy](./demo05)
6. [A Simple CLI: Copy 2](./demo06)
7. [A Simple CLI: Console.log(file)](./demo07)
8. [Buffer API](./demo08)
9. [fs API](./demo09)
10. [path API](./demo10)

## Userful Link And Reference

* 七天学会NodeJs
* 了不起的NodeJs
* 深入浅出NodeJs
