// 由于mongodb是非关系数据库, 数据是没有架构的。
// 但是数据架构是有用的, 可以为数据定义规则，因此有了Schema

var mongoose = require('mongoose');

// 创建Schema
var Schema = new mongoose.Schema({
  device: {
    type: String, 
  },  
  isSmart: {
    type: Boolean,
  },
  releaseTime: {
    type: Date,
  },
  price: {
    type: Number,
  },
});

// 为Model的实例添加自定义方法
Schema.methods.printBrief = function() {
  console.log(this.device);
};

// 为Model添加静态方法
Schema.statics.printCount = function() {
  this.count({}, (err, count) => {
    if (err) {
      return;
    } else {
      console.log(count);
    }
  });
};

// 将Schema转为对应的model
const phoneModel = mongoose.model('phone', Schema);

// 创建model实例
const iPhoneSE = new phoneModel({
  device: "iPhone9S",
  isSmart: "false",
  releaseTime: "2017-04-21 10:00:00",
  price: 5000,
});

// 调用model的实例方法
iPhoneSE.printBrief();

// 调用model的静态方法
phoneModel.printCount();
