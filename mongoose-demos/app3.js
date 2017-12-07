// 由于mongodb是非关系数据库, 数据是没有架构的。
// 但是数据架构是有用的, 可以为数据定义规则，因此有了Schema

var mongoose = require('mongoose');
var mongodb = 'mongodb://localhost/db/';
mongoose.Promise = global.Promise;
var db = mongoose.connect(mongodb);

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
  console.log(`The device is:${this.device}`);
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
  device: "iPhoneSE",
  isSmart: "true",
  releaseTime: "2017-04-21 10:00:00",
  price: 4999,
});

// 1. 插入数据: instance.save()
iPhoneSE
  .save()
  .then((err, phone) => {
    if (err) {
      return;
    } else {
      console.log(`phone[${phone}] saved.`);
    }
  });

// 2. 插入数据: model.create()
phoneModel
  .create({
    device: "iPhone9S",
    isSmart: "true",
    releaseTime: "2018-05-03 12:00:00",
    price: 4890,
  })
  .then((err, phone) => {
    if (err) {
      return;
    } else {
      console.log(`phone[${phone}] saved.`);
    }
  });

// 3. 查找数据: find, findById, findOne, where, 它们都是static methods



// 调用model的实例方法
iPhoneSE.printBrief();

// 调用model的静态方法
phoneModel.printCount();
