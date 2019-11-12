//应用swig插件
const express = require('express')
const swig = require('swig')

const app = express()


app.use(express.static('public'))


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
//5.渲染模板
app.get('/',(req,res)=>{
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))