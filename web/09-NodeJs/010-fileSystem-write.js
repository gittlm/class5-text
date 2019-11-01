const fs = require('fs')

//同步处理文件系统
	//分步处理
		//打开文件
		const fd = fs.openSync('./001-aa.text','a')//'a'是添加，'w'是覆盖
		//写入数据
		fs.writeSync(fd,' hello ')
		//关闭文件
		fs.closeSync(fd)
	//合并处理
		fs.writeFileSync('./001-aa.text',' this is a dog ',{flag:'a'})

//异步处理文件系统
	//打开文件
	fs.open('./001-aa.text','a',(err,fd)=>{
		if(err){
			console.log('open the file')
		}else{//写入数据
			fs.write(fd,'write files now',(err)=>{
				if(err){
					console.log(err)
					console.log('write the file')
				}else{//关闭文件
					fs.close(fd,(err)=>{
						if(err){
							console.log('close the file')
						}
					})
				}
			})
		}
	})
//合并处理
	fs.writeFile('./001-aa.text',' the three write..',{flag:'a'},(err)=>{
		if(err){
			console.log(err)
		}
	})

//用promise处理异步文件
	const util = require('util')	
	const writefile = util.promisify(fs.writeFile)
	writefile('./001-aa.text','four write..',{flag:'w'})
	.then(()=>{
		console.log('promise')
	})	
	.catch((err)=>{
		console.log(err)
	})



