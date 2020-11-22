const express=require('express');
const path=require('path');
const app=express();

// console.log(__dirname);
// console.log(path.join(__dirname,'./dir'));

//只能使用绝对路径
//app.use('/',express.static(path.join(__dirname,'./dir')));
app.use(express.static(path.join(__dirname,'./dir')));
//域名：3000 直接指向规定的静态目录
app.listen(3000,()=>{
	console.log('server start');
})