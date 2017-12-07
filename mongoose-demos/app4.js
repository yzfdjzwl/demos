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

// 将Schema转为对应的model
const phoneModel = mongoose.model('phone', Schema);

// 查询: 1. 有回调函数
phoneModel.findOne({'device': 'iPhone7S'}, 'isSmart price', function(err, doc) {
  if (err) {
    return;
  } else {
    console.log(doc);
  }
});

// 查询: 2. 没有回调函数
const query = phoneModel.findOne({'device': 'iPhone9S'});
query.select('device price');
query.exec(function(err, doc) {
  if (err) {
    return;
  } else {
    console.log(doc);
  }
});
