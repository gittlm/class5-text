var http = require('http')
var fs = require('fs')
var url = require('url')


var server = http.createServer(function(req,res){
	console.log(req.method)
	//定义程序名
	var urlStr = req.url;
	// var oDate = new Date('2019-10-14 19:35:00').toUTCString();
	// res.setHeader('Set-Cookie',['name=tom'])
	// res.setHeader('Set-Cookie',['name=tom;Expires='+oDate])
	// res.setHeader('Set-Cookie',['name=tom;Max-Age=10'])
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
	}


	
	// res.end('hello,my name is tanglimin');
})


server.listen(3000,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:3000/')
})