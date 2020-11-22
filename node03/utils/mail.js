/*
###邮箱验证码案例
   + nodemailer  可以实现邮件发送   https://nodemailer.com/about/
   + npm官网      https://www.npmjs.com
*/
"use strict";
const nodemailer = require("nodemailer");
//创建发送邮件的请求对象
let transporter = nodemailer.createTransport({
    host: "smtp.qq.email",//发送方邮箱  qq 通过lib/well-know/serveice.json
    port: 465, //端口号
    secure: false, // true for 465, false for other ports
    auth: {
      user: '352186537@qq.com',  // 发送方邮箱地址
      pass: 'kxlfqavqcooabgfd',  // smtp 验证码
    },
});  
  function send(mail,code){
	  
	 let mailobj= {code
	     from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
	     to: mail, // list of receivers
	     subject: "1902", // Subject line
	     text: `您的验证码是${code}，有效期1分钟`, // plain text body
	     // html: "<b>Hello world</b>", // html body
	 } 
	 //发送邮件
	 return new Promise((resolve,reject)=>{
		 transporter.sendMail(mailobj,(err,data)=>{
		 	 	if(err){
					reject(err);
				}else{
					resolve(data);
				}
		 });
	 })
	  
  }
module.exports={send:send};

