const mongoose =require('mongoose');
var Schema = mongoose.Schema;
 
  var userSchema = new Schema({
     user: {type:String,require:true},
     pas:{type:String,require:true},
	 age:Number,
	 sex:{type:Number,default:0}
   });
//将scheme对象转换为数据模型
var User = mongoose.model('users', userSchema);//该数据对象和集合关联{'集合名'，scheme对象}

module.exports=User;
/*
modemore  自动更新代码
npm install nodemon -g
node server.js
nodemon server.js
*/