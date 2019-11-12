//处理返回数据的方法的对比
const express = require('express')
const app = express()


app.use(express.static('public'))


app.all('/',(req,res,next)=>{
	console.log('aaaaa')
	next();
})

app.get('/', (req, res) => {
	// res.end('hello')
	// res.end('<h1>hello</h1>')

	// res.json({name:'tom',age:40})
	// res.json('hello')

	// res.send('hello')
	// res.send({name:'tom',age:40})
	res.send('<h1>hello</h1>')
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))