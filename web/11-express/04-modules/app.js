//模块化处理
const express = require('express')
const app = express()
const userRouter = require('./routers/user.js')
const blogRouter = require('./routers/blog.js')



app.use(express.static('public'))

app.use('/user',userRouter)
app.use('/blog',blogRouter)



// app.get('/', (req, res) => res.send('get data ...'))
// app.post('/', (req, res) => res.send('post data ...'))
// app.put('/', (req, res) => res.send('put data ...'))
// app.delete('/', (req, res) => res.send('delete data ...'))

// router.get('/', (req, res) => res.send('get blog data ...'))
// router.post('/', (req, res) => res.send('post blog data ...'))
// router.put('/', (req, res) => res.send('put blog data ...'))
// router.delete('/', (req, res) => res.send('delete blog data ...'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))