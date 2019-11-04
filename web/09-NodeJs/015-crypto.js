const crypto = require('crypto')
const secret = 'tanglimin'
const hash = crypto.createHmac('sha256')
console.log(hash)