//请求四种路由方法
const express = require('express')
const app = express()


app.use(express.static('public'))


app.get('/get', (req, res) => res.send('get data ...'))
app.post('/post', (req, res) => res.send('post data ...'))
app.put('/put', (req, res) => res.send('put data ...'))
app.delete('/delete', (req, res) => res.send('delete data ...'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))