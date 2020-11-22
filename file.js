const fs=require('fs');
// 创建文件(覆盖写入)
fs.writeFile('file.txt','今天天气不错啊',(err)=>{
	console.log(err);
});
//写入文件
fs.appendFile('file.txt',"你好,明天",(err)=>{
	console.log(err);
})
// 读取文件
fs.readFile('file.txt',(err,data)=>{
	if(err){
		console.log(err);
	}else{
		//默认读取二进制数据流 buffer
		console.log(data.toString('utf8'));
	}
})
//删除文件
fs.unlink('./file.txt',(err)=>{
	console.log(err);
})
//循环读取文件
// const fs=require('fs');
fs.readdir('../Node.js',(err,dirs)=>{
	for (let index=0;index<dirs.length;index++) {
		console.log(dirs[index]);
	}
})
fs.stat('../Node.js',(err,stats)=>{
	if(stats.isFile()){
		console.log('is file');
	}else{
		console.log('is dir');
	}
})