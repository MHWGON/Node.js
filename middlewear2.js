const express=require('express')
const app=express();

app.get('/test1',(req,res,next)=>{
	console.log('fun1');
	// res.send('fun1');
	next();
},(req,res)=>{
	console.log('fun2');
	res.send('fun2');
})

app.listen(3000,()=>{
	console.log('server start');
})