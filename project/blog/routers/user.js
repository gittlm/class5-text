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
<<<<<<< HEAD
})
=======
	.catch(err=>{
		res.json({
			code:5,
			message:'注册失败，数据库已崩溃'
		})
	})
})

>>>>>>> 24456446e3ccfd37a3e897d7d537d0cf7cc77ef7

//处理登录
router.post('/login', (req, res) => {
	//1.获取用户数据
	const { username,password } = req.body
	// console.log(username,password)
	//2.查找数据库同名验证
<<<<<<< HEAD
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
			})
			.then(result =>{
				console.log(hmac(password))
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
=======
	userModel.findOne({username:username,password:hmac(password)},'-password')
	.then(user=>{//有同名的存在
		if(user){
			res.json({
				code:0,
				message:'登录成功',
				user:user
			})
		}else{
			res.json({
				code:5,
				message:'用户名或密码不正确'
			})
		}	
	})
	.catch(err=>{
		res.json({
			code:5,
			message:'登录失败，数据库已崩溃'
		})
	})
>>>>>>> 24456446e3ccfd37a3e897d7d537d0cf7cc77ef7
})

module.exports = router