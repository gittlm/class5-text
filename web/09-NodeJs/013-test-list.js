const http = require('http')

const server = http.createServer((req,res)=>{


	res.write('hello my name is tanglimin')
	res.end('end')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('aaaaa')
})//以自己电脑为服务器，在以IP地址为网址的见面上可以打开写入的内容