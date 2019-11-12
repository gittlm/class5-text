//用ALL处理四种不带方法的请求
const express = require('express')
const app = express()


app.use(express.static('public'))


app.all('/',(req,res,next)=>{
	console.log('aaaaa')
	next();
})


app.get('/', (req, res) => res.send('get data ...'))
app.post('/', (req, res) => res.send('post data ...'))
app.put('/', (req, res) => res.send('put data ...'))
app.delete('/', (req, res) => res.send('delete data ...'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))