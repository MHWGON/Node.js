const fs=require('fs');
// fs.stat('./file.js',(err,stats)=>{
// 	if(err){
// 		console.log('文件不存在');
// 	}else{
// 		fs.unlink('./file.js',(err)=>{
// 			console.log(err);
// 		})
// 	}
// })
//异步操作需要保持一定的顺序  回调函数的嵌套  回调地狱
// promise  async/await  ES7

function delfile(){
	return new Promise((reslove,reject)=>{
		//异步操作
		fs.unlink('./hehe.js',(err)=>{
			if(err){
				reject('失败了');     //外部走cach的处理函数，表示失败
			}else{
				reslove('成功了');    //外部走then的处理函数，表示OK
			}
		})
	})
}

delfile()
.then((msg)=>{
	console.log('then'+msg);
})
.catch((error)=>{
	console.log('cache'+error);
})