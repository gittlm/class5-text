//处理带参数的路由请求
const express = require('express')
const app = express()


app.use(express.static('public'))


app.all('/',(req,res,next)=>{
	console.log('aaaaa')
	next();
})

// 第一种   ?name=tom&age=18   
app.get('/', (req, res) => {
	console.log(req.query)//取得携带的信息并转化为对象
	res.send('get data ...')
})

// 第二种   /users/123/books/456   
app.get('/users/:userId/books/:bookId',(req,res)=>{
	console.log(req.params)
	res.send('get data ...')
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))