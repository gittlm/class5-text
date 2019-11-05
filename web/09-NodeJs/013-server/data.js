const path = require('path')
const url = require('url')
const fs = require('fs')
const util = require('util')

const filename = path.normalize(__dirname + '/data.json')//将地址规范化
const readFile = util.promisify(fs.readFile)
async function getData(){
	const data1 = await readFile(filename,{flag:'r',encoding:'utf-8'})
	const arr = JSON.parse(data1)
	// console.log(data1)
	return arr;
}
// getData()
module.exports = {
	getData
}