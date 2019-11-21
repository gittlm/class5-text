
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const swig = require('swig')
const Cookies = require('cookies')
const session = require('express-session')
const MongoStore = require("connect-mongo")(session);



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
// app.use((req,res,next)=>{
// 	req.cookies = new Cookies(req,res)
// 	let userInfo = {}
// 	if(req.cookies.get('userInfo')){
// 		userInfo = JSON.parse(req.cookies.get('userInfo'))
// 	}
// 	req.userInfo = userInfo

// 	next();
// })

/*---------------cookies+session+mongodb-----------------*/
app.use(session({
    //设置cookie名称
    name:'tang',
    //用它来对session cookie签名，防止篡改
    secret:'abc',
    //强制保存session即使它并没有变化
    resave: true,
    //强制将未初始化的session存储
    saveUninitialized: true, 
    //如果为true,则每次请求都更新cookie的过期时间
    rolling:true,
    //cookie过期时间 1天
    cookie:{maxAge:1000*60*60*24},
    //设置session存储在数据库中
    store:new MongoStore({ mongooseConnection: mongoose.connection })   
}))
app.use((req,res,next)=>{
	//获取并将cookies信息存在req.userInfo上
	req.userInfo = req.session.userInfo || {}

	next();
})

/*-------------------配置路由---------------*/
app.use('/',require('./routers/index.js'))
app.use('/user',require('./routers/user.js'))
app.use('/admin',require('./routers/admin.js'))
app.use('/category',require('./routers/category.js'))
app.use('/article',require('./routers/article.js'))





app.listen(3000, () => console.log('server is running in http://127.0.0.1:3000!'))