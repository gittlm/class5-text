const express = require('express')
const router = express.Router()

//后台管理员权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请使用管理员帐号登录！！！</h1>')
	}
})


//显示后台管理页
router.get('/', (req, res) => {
	res.render('admin/index',{
		userInfo:req.userInfo
	})
})

//显示后台用户列表 
router.get('/user-list', (req, res) => {
	res.render('admin/user-list',{
		userInfo:req.userInfo
	})
})

//显示分类列表
router.get('/category-list', (req, res) => {
	res.render('admin/category-list',{
		userInfo:req.userInfo
	})
})


module.exports = router