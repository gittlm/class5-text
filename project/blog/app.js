
const express = require('express')
const mongoose = require('mongoose')
const swig = require('swig')
const app = express()
//请求静态页面
app.use(express.static('public'))
//直接请求静态文件下的index.html


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



//配置路由
app.use('/',require('./routers/index.js'))


app.listen(3000, () => console.log('server is running in http://127.0.0.1:3000!'))