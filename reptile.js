/*
###爬虫案例
1.获取目标网站   http.get
2.分析网站内容   cheerio 可以使用JQuery里的选择器
3.获取有效信息，下载或其它操作
*/
const $https=require('http');
const fs=require('fs');
let cheerio=require('cheerio');

let url='http://www.baidu.com/'
$https.get(url,(res)=>{
	//安全判断
	const {statusCode}=res;
	const contentType=res.headers['content-type'];   //文件类型
	console.log(statusCode,contentType);
	let err=null;
	if(statusCode!==200){
		err=new Error('请求状态码错误');
	}else if(!/^text\/html/.test(contentType)){
		//格式类型为网页
		err=new Error('请求类型错误');
	}
	//err为真，上面两个判断，有一个出错了
	if(err){
		console.log(err);
		res.resume();         //清除缓存
		return false;
	}
	
	//数据处理
	//数据分段 只要接受数据就会触发data 时间chunk每次就受的数据片段
	let rawData='';
	res.on('data',(chunk)=>{
		console.log('-----');
		rawData+=chunk.toString('utf8');
		// console.log(rawData);
	})
	//数据流传输完毕
	res.on('end',()=>{
		//将请求的数据保存到本地
		// fs.writeFileSync('./bilibili.html',rawData);
		
		let $=cheerio.load(rawData);  //将请求到的网页数据进行转化
		// console.log($);
		$('link').each((index,el)=>{
			console.log(el);
			console.log($('el').attr('href'));
		})
		console.log("数据传输完毕");
	})
}).on('error',(err)=>{
	console.log("请求错误");
})
// let obj={name:123,age:18};
// let name=obj.name;
// let {name}=obj