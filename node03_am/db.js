//连接数据库
const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/myDB',{ useNewUrlParser: true,useUnifiedTopology: true});
//连接数据库
var db=mongoose.connection;   //数据库连接对象
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
	console.log('数据库连接成功:db ok');
})
//scheme  对象
//创建一个和集合相关联的scheme 对象
//获取scheme对象
 var Schema = mongoose.Schema;
 
  var userSchema = new Schema({
     user: {type:String,require:true},
     pas:{type:String,require:true},
	 age:Number,
	 sex:{type:Number,default:0}
   });
//将scheme对象转换为数据模型
var User = mongoose.model('users', userSchema);//该数据对象和集合关联{'集合名'，scheme对象}
//操作数据库
var arr = [{ user: 'Star Wars' }, { pas: '123' },{ age:18 },{sex:0}];
User.insertMany(arr, function(error, docs){
	if(error){
		console.log('插入失败：'+error);
	}else{
		console.log('插入成功');
	}
});

// 查找
User.find({ name: 'Star Wars', pas: 18}, function (err, docs) {
	if(err){
			console.log('查询失败：'+error);
	}else{
			console.log('查询成功');
	}
});
//删除
 User.deleteOne({ name: 'Star Wars' }, function (err) {
	 if(err){
	 		console.log('删除失败：'+error);
	 }else{
	 		console.log('删除成功');
	 }
 });




 