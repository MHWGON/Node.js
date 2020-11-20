const fs=require('fs');
//同步读取文件    在关键位置捕获错误信息（在同步中通过try.cache捕获错误异常信息）
try{
	let dirs=fs.readdirSync('./');
}cache(err){
	console.log('出错了');
	console.log(err);
}
console.log(dirs);

//异步读取文件
fs.readdir('./',(err,data)=>{
	//如果为真表示有错误，默认为null(为假)
	if(err){  
		console.log(err);
	}else{
		console.log(data);
	}
})
console.log(2);
//错误的回调优先，在回调函数中第一个参数表示错误对象，默认为null，如果出现error，就是错误对象
/*
错误处理：同步 try cache 异步：错误回调优先
文件夹的错误
curd(create update read delete)
*/