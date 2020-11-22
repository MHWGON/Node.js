const express=require('express');
var bodyParser = require('body-parser');
//app.use 使用中间件(插件)
//解析表单数据  x-www-form-urllencode

// express  实例化
const app=express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//最简单的api接口
app.get('/user/login',(req,res)=>{
console.log(req.query);
//处理参数
let {user,pas}=req.query;

if(user=='user' && pas==123){
	res.send({
		err:0,
		message:'login ok'
	});
}else{
	res.send({
		err:1,
		message:'login not ok'
	});
}
})

app.post('/user/reg',(reg,res)=>{
	//接收post数据
	let {user,pas}=reg.body;
	console.log(reg.body);
	//express不能直接解析消息体
	//通过第三方插件实现消息体的解析
	if(user=='user' && pas==123){
		res.send({
			err:0,
			message:'register ok'
		});
	}else{
		res.send({
			err:1,
			message:'register not ok'
		});
	}
})

//监听3000端口 开启服务器
app.listen(3000,()=>{
	console.log('server start');
})
//http://www.baidu.com/user/here?user=user&pas=123
//http://localhost:3000/user/login
//api接口的构成要素 ip+port pathname mothod get post  接受用户传递数据
//数据的接口格式有后端确定
 