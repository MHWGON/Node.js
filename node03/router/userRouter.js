const express=require('express');
const User=require('../db/model/userModel.js');
const router=express.Router();

let codes={};
/**
 * @api {post} /user/reg 用户注册
 * @apiName 用户注册
 * @apiGroup User
 *
 * @apiParam {String}  user 用户名
 * @apiParam {String}  pas 用户密码
 *@apiParam {String}   code  验证码
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/reg',(req,res)=>{
	//获取数据
	let {code,user,pas}=req.body;
	console.log(user,pas);
	if(!user||!pas||!code){
		res.send({err:1,mes:'参数错误'});
	}else{
		//判断验证码是否正确
		if(codes[user]!=code) {
			res.send({err:-1,mes:'验证码错误请重试'});
		}
		//先查看数据库中是否已有用户
		User.find({user})
		.then((data)=>{
			if(data.length==0){
				//用户名不存在需要注册
				return  User.insertMany({user:user,pas:pas})
			}else{
				res.send({err:1,mes:'用户名已经存在'});
			}
		}).then(()=>{
			res.send({err:0,mes:'注册成功'});
		}).catch(()=>{
			res.send({err:1,mes:'注册错误'});
		})
	}
	//数据处理
	//返回数据
})


/**
 * @api {post} /user/reg 用户登录
 * @apiName 用户登录
 * @apiGroup User
 *
 * @apiParam {String}  user 用户名
 * @apiParam {String}  pas 用户密码
 * 
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
router.post('/login',(req,res)=>{
	let {user,pas}=req.body;
	if(!user||!pas){
		res.send({err:1,mes:'参数错误'});
	}else{
		// {user:user,pas:pas}={user,pas};
		User.find({user:user,pas:pas})
		.then((data)=>{
			if(data.length>0){
				return res.send({err:0,mes:'登录成功'});
			}else{
				return res.send({err:-1,mes:'用户名或密码不正确'});
			}
			
		}).catch((err)=>{
			return res.send({err:1,mes:'内部错误'});
		})
	}
})
module.exports=router;