const url=require('url');
var str="https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash";
var obj=url.parse(str);
console.log(obj);

var path='/a/b/c',string='query',hash='hash';
var obj={
	protocal:"http",
	hostname:'www.test.com',
	port:8080,
	pathname:path,
	query:query=string,
	hash:hash
}
var str=url.format(obj);
console.log(str);

/*
url 类比JSON记忆
url.parse   将url转成对象
url.format  将url对象转字符串
*/