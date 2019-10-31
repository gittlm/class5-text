
//同步处理文件系统
//分步处理
	const fs = require('fs')
	const fd = fs.openSync('./01-aa.text','w')
	fs.writeSync(fd,'hello')
	fs.closeSync(fd)
//合并处理
	fs.writeFileSync('./01-aa.text','world',{flag:'a'})


//异步处理文件系统
