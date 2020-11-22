let cheerio=require('cheerio');
let $=cheerio.load('<div><p>hello</p><img src="http://www.baidu.com"/><img src="http://www.baidu1.com"/></div>')
//将一组html的字符串转化为类DOM结构，之后通过JQuery语法选择其中元素
// console.log($('img').attr('src'));
// console.log($('p').text());
$('img').each((index,el)=>{
	console.log($(el).attr('src'));
})