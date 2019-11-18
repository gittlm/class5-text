
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swig = require('swig')
const Cookies = require('cookies')
const app = express()



//请求静态页面
app.use(express.static('public'))
//直接请求静态文件下的index.html


/*---------处理中间件的post请求--------*/
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/*-------------------配置数据库-------------------*/
//连接数据库
mongoose.connect('mongodb://localhost/blog', { useUnifiedTopology: true,useNewUrlParser: true })
const db = mongoose.connection
//连接失败
db.on('error',(err)=>{
	console.log('connect db err ...')
	throw err
})
//连接成功
db.once('open', function() {
  	console.log('connect mongodb success !!!')
})  	

/*----------------------配置模板引擎--------------------*/
//1.
//开发阶段设置不走缓存
swig.setDefaults({
  	cache: false
})
//2.
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html', swig.renderFile);
//3.
// 第一参数必须是views
// 第二个参数是模板存放的目录
app.set('views', './views')
//4.
// 第一个参数必须是view engine
// 第二个参数是模板名称,也就是app.engine的第一个参数
app.set('view engine', 'html')

// app.use('/',(req,res)=>{
// 	//5.渲染模板
//     //第一个参数是相对于模板目录的文件
//     //第二个参数是传递给模板的数据
//     res.render('index')
// })


/*-------------------配置cookies保存用户状态信息----------------------*/
app.use((req,res,next)=>{
	req.cookies = new Cookies(req,res)
	let userInfo = {}
	if(req.cookies.get('userInfo')){
		userInfo = JSON.parse(req.cookies.get('userInfo'))
	}
	req.userInfo = userInfo

	next();
})

/*-------------------配置路由---------------*/
app.use('/',require('./routers/index.js'))
app.use('/user',require('./routers/user.js'))





app.listen(3000, () => console.log('server is running in http://127.0.0.1:3000!'))