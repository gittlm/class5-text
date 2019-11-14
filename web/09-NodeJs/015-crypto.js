const crypto = require('crypto');

const hmac = crypto.createHmac('sha256', '密钥');

//对明文进行加密
hmac.update('12345')
//生成密文
console.log(hmac.digest('hex'))