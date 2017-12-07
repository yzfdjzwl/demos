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

phoneModel.aggregate()
  .group({_id: 'device'})
  .exec((err, doc) => {
    if (err) {
      return;
    } else {
      console.log(doc);
    }
  });
