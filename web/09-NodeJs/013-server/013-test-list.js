const http = require('http')
const path = require('path')
const fs = require('fs')
const mime = require('./mime')//文件类型

const server = http.createServer((req,res)=>{

	// console.log(req.url)
	const filePath = req.url//获取静态页面地址
	// console.log(filePath)
	const filename = path.normalize(__dirname + filePath)//地址格式化
	// console.log(filename)

	fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
		if(err){
			// console.log(err)
			res.setHeader('Content-type','text/html;charset="utf-8"')//设置请求头,转换文字
			res.statusCode = 404;//设置出错状态码
			res.end('<h1>请求地址输入错误...</h1>')//设置出错时页面显示内容
		}else {
			const extname = path.extname(req.url)//得到文件的后缀名
			const mimeType = mime[extname]//用后缀名得到正确的文件类型
			res.setHeader('Content-type',mimeType+';charset="utf-8"')//设置请求头,转换文字
			res.end(data)
		}
	})




	// res.end('end')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000')
})