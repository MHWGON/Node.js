const fs=require('fs');
//文件夹创建
fs.mkdir('./test',(err)=>{
	if(err){
		console.log(err);
	}
})
//文件夹更改
fs.rename('./test','./testNew',(err)=>{
	if(err){
		console.log('更改失败'+err);
	}else{
		console.log('Change OK');
	}
})
//文件夹的删除  注意：只能删除空文件夹
fs.rmdir('./testNew',(err)=>{
	if(err){
		console.log(err);
	}else{
		console.log('Remove OK');
	}
})
