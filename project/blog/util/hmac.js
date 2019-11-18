const crypto = require('crypto');

module.exports = (str)=>{
	const hmac = crypto.createHmac('sha512', 'asddfghadfsdfa');
	//对明文进行加密
	hmac.update(str)
	//生成密文
	return hmac.digest('hex')
}