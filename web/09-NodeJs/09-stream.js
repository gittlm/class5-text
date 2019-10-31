process.stdout.write('aaaa')

const { Readable } = requier('stream')

class Reader extends Readable{
	constructor{
		super()
		this.index = 0
	}
	_read(){
		this.index ++;
		if(this.index<5){
			this.push(this.index)
		}else{
			this.push(null)
		}
	}
}
const read = new Reader()
let body = ''
body += 
read.on('data',(chunk)=>{
	console.log(body)
})