const qs=require('querystring');
let string='name=lingjunting&pass=123.com';
//&符号切分query   =切割k,v
let obj=qs.parse(string,'&','=');
console.log(obj);

//stringfy
let obj1={name:'liangjunting',pass:'123.com',sex:0}
let string1=qs.stringify(obj1,'&','=');
console.log(string1);

let strinfg='w=hello&foo=bar'
let result=qs.escape(strinfg);
console.log(result);

let escape='w%3Dhello%26foo%3Dbar';
var res=qs.unescape(escape);
console.log(res);