const http = require('http')
const path = require('path')
const url = require('url')
const fs = require('fs')
const mime = require('./mime')//文件类型
const { getData } = require('./data.js')

const server = http.createServer((req,res)=>{
	const parse = url.parse(req.url,true)//将一个URL字符串转换成对象并返回
	const pathname = parse.pathname//设置或返回当前URL的路径部分
	const filePath = req.url//获取静态页面地址

	//根据不同的请求地址处理不同的逻辑
	//请求首页
	if(pathname == '/' || pathname == 'index.html'){
		//获取首页数据
		getData()
		.then(result=>{
			console.log(result)
		})
		// .catch(err=>{
		// 	console.log(err)
		// })




		const filename = path.normalize(__dirname + '/index.html')//将地址规范化
		fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
			if(err){
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
	 }
	else if(pathname == '/add'){
		console.log('add')
		res.end('add')
	}else if(pathname == '/del'){
		console.log('del')
		res.end('del')
	}else{
		const filename = path.normalize(__dirname + filePath)//将地址规范化
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
	}














	// const filename = path.normalize(__dirname + filePath)//将地址规范化
	// // console.log(filename)
	// fs.readFile(filename,{encoding:'utf-8'},(err,data)=>{
	// 	if(err){
	// 		// console.log(err)
	// 		res.setHeader('Content-type','text/html;charset="utf-8"')//设置请求头,转换文字
	// 		res.statusCode = 404;//设置出错状态码
	// 		res.end('<h1>请求地址输入错误...</h1>')//设置出错时页面显示内容
	// 	}else {
	// 		const extname = path.extname(req.url)//得到文件的后缀名
	// 		const mimeType = mime[extname]//用后缀名得到正确的文件类型
	// 		res.setHeader('Content-type',mimeType+';charset="utf-8"')//设置请求头,转换文字
	// 		res.end(data)
	// 	}
	// })




	// res.end('end')
})
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running in 127.0.0.1:3000')
})