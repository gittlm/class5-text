const http = require('http')

const server = http.createServer((req,res)=>{

	// console.log(req.url)
	console.log(req.method)
	res.write('hello my name is tanglimin')
	res.end('end')
})
server.listen(3000,'10.196.18.146',()=>{
	console.log('aaaaa')
})//以自己电脑ip地址'10.196.18.146'为服务器，在以IP地址为网址的页面上可以打开写入的内容