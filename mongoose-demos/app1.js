// 1. 导入mongoose库
var mongoose = require('mongoose');

// 2. 获得db对象
db = mongoose.connection;

// 3. 事件
db.on('open', ()=>{
  console.log('Database connection is open... ');
});

db.on('connecting', ()=>{
  console.log('Database connection is connecting...');
});

db.on('disconnecting', ()=>{
  console.log('Database connection is disconnecting...');
});

db.on('disconnected', ()=>{
  console.log('Database connection is disconnected...');
});

db.on('close', ()=>{
  console.log('Database connection is close...');
});

// 启动连接
mongoose.connect('mongodb://localhost:27017/Phone');

// 关闭连接
// another one: mongoose.connection.close();
mongoose.disconnect();
