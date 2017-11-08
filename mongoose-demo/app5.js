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

// 是先排序后限制5条数据
// With a Json
phoneModel
  .find({
    'device': 'iPhone9S',
    'price': { $gt: 3000, $lt: 8000},
    'isSmart': 'true',
  })
  .limit(5)
  .sort({ 'price': -1 })
  .exec((err, doc) => {
    if (err) {
      return;
    } else {
      console.log(doc);
    }
  });

// 上面等价于下面
// Using query builder
phoneModel
  .find({ 'device': 'iPhone9S' })
  .where('isSmart').equals('true')
  .where('price').gt(3000).lt(8000)
  .limit(5)
  .sort({ 'price': -1 })
  .exec((err, doc) => {
    if (err) {
      return;
    } else {
      console.log(doc);
    }
  });
