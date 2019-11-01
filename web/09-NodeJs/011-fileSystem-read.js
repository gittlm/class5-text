const fs = require('fs')

//同步读取文件
//打开文件
// const fd = fs.openSync('./002-bb.txt','r')
// //读取数据
// const buff = Buffer.alloc(100)
// fs.readSync(fd,buff,0,50,0)
// console.log(buff)
// //关闭文件	
// fs.closeSync(fd)


const rs = fs.createReadStream('./002-bb.txt')
// rs.write('hello read')
// rs.end('end')