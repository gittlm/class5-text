//中间件的使用
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.use(express.static('public'))

app.use('/',(req,res)=>{
	console.log(req.body)
})



app.post('/', (req, res) => res.send('post data ...'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))