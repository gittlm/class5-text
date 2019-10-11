var http = require('http')
var fs = require('fs')


var server = http.createServer(function(req,res){
	console.log(req.url)
	//定义程序名
	var urlStr = req.url;
	if(urlStr == '/favicon.ico'){
		res.end('/favicon.ico')
	}
	//定义路径(路径在网页网址后面直接加，这里加的是方法)
	var filePath = './'+urlStr;
	//传参（路径，函数（err出错，data正确））
	fs.readFile(filePath,function(err,data){
		if(!err){
			res.end(data);
		}else {
			res.statusCode = 404;
			res.end('not found...')
		}
	})
	// res.end('hello,my name is tanglimin');
})


server.listen(3000,'127.0.0.1',function(){
	console.log('Server running at http://127.0.0.1:3000/')
})