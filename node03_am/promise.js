const fs=require('fs');
//封装
function isExist(){
	return new Promise((resolve,reject)=>{
		fs.stat('./file.js',(err,res)=>{
			if(err){
				reject('文件不存在');
			}else{
				resolve('文件存在');
			}
		})
	})
}
function deFile(){
	return new Promise((resolve,reject)=>{
		fs.unlink('./file.js',(err)=>{
			if(err){
				reject('del no ok');
			}else{
				resolve('del ok');
			}
		})
	})
}
isExist()
.then(()=>{
	console.log('is exit 的成功处理')
	return deFile();
})
.then(()=>{
	console.log('删除文件的成功处理');
})
.catch((err)=>{
	console.log('catch');
	console.log(err);
})
//链式调用  在一组链式调用中只能有一个catch
//如何（手动）终止链式调用的执行
