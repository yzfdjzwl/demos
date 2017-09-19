## Demo10: Path

1. path.join()
2. path.resolve()
3. accessSync()
4. path.relative()
5. path.parse()

## ./

`./或../`在`require()`中使用效果和`__dirname`的效果一样，不会因为启动脚本的目录不一样而改变，在其他情况下跟`process.cwd()`效果一样，是相对于启动脚本所在目录的路径。

因此，在`require()`中才使用`./或../`, 其他地方均使用绝对路径。

## Reference

[浅析 NodeJs 的几种文件路径](https://github.com/imsobear/blog/issues/48)
[path模块](http://javascript.ruanyifeng.com/nodejs/path.html)
