const express=require('express');
const app=express();

// app.get('/user/add',(req,res)=>{
// 	res.send('user add Ok');
// })
// app.get('/user/del',(req,res)=>{
// 	res.send('user del OK');
// })
let userRouter=require('./user_router');
app.use('/user',userRouter);

//监听3000端口 开启服务器
app.listen(3000,()=>{
	console.log('server start');
})

//localhost:3000/user/del