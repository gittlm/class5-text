//请求静态页面
const express = require('express')
const app = express()

app.use(express.static('public'))
//直接请求静态文件下的index.html


// app.use('/static', express.static('public'))
//在地址后面加上/static才可以实现,是虚拟目录

app.get('/', (req, res) => res.send('Hello World!!!!!!!!!!!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))


