var express=require('express');
var router=express.Router();  //获取路由实例
// const app=express();

router.get('/add',(req,res)=>{
	res.send('user add Ok');
})
router.get('/del',(req,res)=>{
	res.send('user del OK');
})

module.exports=router;