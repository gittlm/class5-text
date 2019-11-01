const fs = require('fs')


const filename = process.argv[2]

fs.mkdirSync('../../'+filename)
fs.mkdirSync('../../'+filename+'/css')
fs.mkdirSync('../../'+filename+'/js')