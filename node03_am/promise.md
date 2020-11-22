### promise
    大量的异步操作，如果需要顺序执行，通过回调函数执行，回调地狱
	
	通过promise 解决回调地狱
	
	、、、
	function test(){
		//返回promise
		return Promise((resolve,reject)=>{
			//需要的异步处理
			成功的时候 resolve()
			失败      reject()
		})
	}
	2.根据顺序 形成链式调用
	test().then().then().catch()
	3.catch()异常捕获
### node 操作mongodb数据库
### http://127.0.0.1:27017   查看MongoDB数据库是否启动成功
    + mongod
	+ mongoose
	+ 使用mongoose操作mongDB数据库
	show dbs   查看数据库
	show collections    查看表，数据库中的所有表构成集合
	db.user.drop()      删除某张表（user）
	db.users.find()     查找表中的数据
###
    1.注册登录   mongod
	2.验证码逻辑接口实现
	  a.验证用户名存在
	  b.获取验证码
	    1.获取验证码接口 1.发送邮件 2.邮件和验证码保存到内存中
	    2.5分钟内 不能重复发送
		{111@qq.com:{ctime:第一次发送邮箱验证码的时间戳,code:123}}
	    3.5分钟内发送次数不能发送三次
		
	3.apidoc自动生成api接口文档
