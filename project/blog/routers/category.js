const express = require('express')
const router = express.Router()
const UserModel = require('../models/users.js')

//后台管理员权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请使用管理员帐号登录！！！</h1>')
	}
})

//显示后台分类页面
router.get('/', (req, res) => {
	res.render('admin/category',{
		userInfo:req.userInfo
	})
})

//显示后台新增页面
router.get('/add', (req, res) => {
	res.render('admin/category-add',{
		userInfo:req.userInfo
	})
})

//显示后台新增页面
router.post('/add', (req, res) => {
	res.render('admin/category',{
		userInfo:req.userInfo
	})
})

module.exports = router