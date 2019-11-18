const express = require('express')
const router = express.Router()

const userModel = require('../models/users.js')
const hmac = require('../util/hmac.js')


//处理注册
router.post('/register', (req, res) => {
	//1.获取用户数据
	const { username,password } = req.body
	// console.log(username,password)
	//2.查找数据库同名验证
	userModel.findOne({username:username})
	.then(user=>{//有同名的存在
		if(user){
			res.json({
				code:5,
				message:'用户名已存在，请重新输入'
			})
		}else{//没有同名，可以注册
			userModel.insertMany({
				username:username,
				password:hmac(password)
				// isAdmin:true
			})
			.then(result =>{
				res.json({
					code:0,
					message:'注册成功',
					user:result
				})
			})
			.catch(err=>{
				res.json({
					code:5,
					message:'注册失败，数据库已崩溃'
				})
			})
		}	
	})
	.catch(err=>{
		res.json({
			code:5,
			message:'注册失败，数据库已崩溃'
		})
	})
})
	

//处理登录
router.post('/login', (req, res) => {
	//1.获取用户数据
	const { username,password } = req.body
	// console.log(username,password)
	//2.查找数据库同名验证
	userModel.findOne({username:username,password:hmac(password)},'-password')
	.then(user=>{
		if(user){//用户名存在
			//返回数据
			//配置cookies信息，同时设置过期时间
			// req.cookies.set('userInfo',JSON.stringify(user),{maxAge:1000*60*60*24})
			//用session+cookies设置过期时间
			req.session.userInfo = user
			res.json({
				code:0,
				message:'登录成功',
				user:user
			})
		}else{//用户名或密码不正确
			res.json({
				code:5,
				message:'用户名或密码不正确'
			})
		}	
	})
	.catch(err=>{
		res.json({
			code:5,
			message:'数据库操作失败，请稍后再试'
		})
	})
})

//处理退出
router.get('/logout',(req,res)=>{
	//清除cookies信息
	// req.cookies.set('userInfo',null)
	//清除session信息
	req.session.destroy()
	res.json({
		code:0,
		message:'退出成功'
	})
})
module.exports = router