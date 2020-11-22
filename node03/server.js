const express=require('express')
var bodyParser = require('body-parser');
const db=require('./db/connect.js');
const app=express();
const Mail=require('./utils/mail.js');

let codes={};
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

//路由引入并使用
const userRouter=require('./router/userRouter');
app.use('/user',userRouter);

//发送邮箱验证码
app.post('/getMainCode',(req,res)=>{
	let {mail}=req.body;
	let code=parseInt(Math.random()*10000);   //产生随机验证码
	
	Mail.send(mail,code);
	.then((data)=>{
		codes[mail]=code;   //发送成功时将验证码保存起来
		res.send(err:0,msg:'验证码发送成功');
	})
	.catch((err)=>{
		res.send(err:1,msg:'验证码发送失败');
	})
})

app.listen(3000,()=>{
	console.log('server start');
})