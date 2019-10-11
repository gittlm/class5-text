var http = require('http')
var fs = require('fs')
var url = require('url')


var server = http.createServer(function(req,res){
	// console.log(req.method)
	//设置允许访问的源
	res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:3000')
	// res.setHeader('Access-Control-Allow-Origin','*')

	//设置允许访问的方法
	res.setHeader('Access-Control-Allow-Methods','PUT,DELETE')

	//设置响应头
	res.setHeader('Content-Type','application/x-www-form-urlencoded')


	//设置允许的请求头
	res.setHeader('Access-Control-Allow-Headers','Name')

	
	//定义程序名
	var urlStr = req.url;

	if(req.method == 'POST'){
		var body = '';
		req.on('data',function(chunk){
			body += chunk;
		})
		req.on('end',function(){
			console.log('get post data::',body)
			res.end(body)
		})
	}else if(req.method == 'GET'){
		if(urlStr.search(/\?/) != -1){
			var parm = url.parse(urlStr,true).query;
			// console.log(url.parse(urlStr,true))
			// console.log(parm)
			var json = JSON.stringify(parm);
			res.end(json);
		}
		if(urlStr == '/favicon.ico'){
			res.end('favicon.ico');
		}
		//定义路径(路径在网页网址后面直接加，这里加的是方法)
		var filePath = './'+urlStr;
		//传参（路径，函数（err出错，data正确））
		fs.readFile(filePath,function(err,data){
			if(!err){
				res.end(data);
			}else {
				res.statusCode = 404;
				res.end('not found...');
			}
		})
	}else{
		res.end('ok')
	}


	
	// res.end('hello,my name is tanglimin');
})


server.listen(3001,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:3001/')
})