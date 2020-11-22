const express=require('express')
const app=express();

//所有接口都走拦截器
app.use('/',(req,res,next)=>{
	console.log('中间件');
	let {token}=req.query;
	if(token){
		next();//是否继续往下执行
	}else{
		res.send('缺少token');
	}
	
})
// app.use中使用函数
// app.use((req,res,next)=>{
	
// });

app.get('/test1',(req,res)=>{
	// let {token}=req.query;
	console.log('test1');
	if(token){
		res.send('OK');
	}else{
		res.send('not OK');
	}
})
app.get('/test2',(req,res)=>{
	// let {token}=req.query;
	console.log('test2');
	if(token){
		res.send('OK');
	}else{
		res.send('not OK');
	}
})

app.listen(3000,()=>{
	console.log('server start');
})