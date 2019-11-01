// process.stdout.write('aaaa')
//可写流
const { Writable} = require('stream')
class CustomStream extends Writable{
	_write(chunk,encoding,callback){
		console.log(chunk)
		console.log(encoding)
		callback();
	}
}
const write = new CustomStream()

write.write('hello',()=>{
	console.log('write hello....')
})//写入
write.end('end')//最后写入，准备结束
write.on('finish',()=>{
	console.log('finish......')
})//结束


//可读流
const { Readable } = require('stream')

class CustomReadable extends Readable{
	constructor(){
		super()
		this.index = 0
	}
	_read(){
		this.index ++;
		if(this.index<5){
			this.push(this.index+'')
		}else{
			this.push(null)
		}
	}
}
const reader = new CustomReadable()
let body = ''
reader.on('data',(chunk)=>{
	body += chunk
})
reader.on('end',()=>{
	console.log(body)
})




//可以读写，在控制台写入转化为Buffer,ctrl+c退出可写流
process.stdin.on('data',(chunk)=>{
	console.log(chunk)
})