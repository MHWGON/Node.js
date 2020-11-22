###  node02
npm init
模块引入顺序:（第三方模块引入）
先从当前模块node_modules中引入，然后向上层模块中查找，只要有一个模块中含有依赖，就不会报错
###  什么是api
     ajax 2007\8
     前后端分离 前端通过ajax 请求数据
     通过api  接口实现数据的请求
	 前端：1.写界面 2.请求数据 3.数据处理
     后端：写api接口
	 
	 登录接口逻辑分析
	 1.接收用户传递数据
	 2.处理数据
	 3.返回数据
###  通过express 框架  书写api
     Zepto.js   移动端的JQuery
	 express直接百度搜索
1.安装 express
  npm install express --save
  、、、
### 服务器相关
    服务器：
	1.服务器就是一台电脑
	2.服务器软件（apache tomcat iis ngnix node）
	3.服务器ip 和端口号（80）
	局域网：服务器通过网线(无线)连接  每个电脑都有一个ip
	外网：
	ip：确定服务器主机的位置
	port：确定服务器中某一个程序
### api接口的书写
    + 接收数据
	  - get req.query
	  - post req.body 需要body-parser 插件记性解析
	  - 注意数据格式 json x-www-form-urencode formdata
### postman 接口测试
### 中间件 middlewear
    + 内置中间件  static
	+ 自定义中间件（全局 局部）
	+第三方中间件  (body-parser)(拦截器)
	
	中间件使用  一定要注意next
### 静态资源目录 static
    指定一个目录 目录可以被访问 apache (www)
### 非关系型数据库(文档)  mongodb
### 安装
    1.下载  百度地址
	2.安装  
	  + 最后一个对号不选
	  + 缺少数据库文件 c/data/db(建立文件夹)
	  + 不是内部命令 需要设置环境变量 mongod 的bin 目录路径
###  指令
     mongodb  数据库名
	 mongod   命令行启动数据库命令
	 mongo    命令行操作数据库指令
	 mongoose  node 操作数据库的插件
	

