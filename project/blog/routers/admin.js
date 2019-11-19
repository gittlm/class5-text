const express = require('express')
const router = express.Router()
const UserModel = require('../models/users.js')
const pagination = require('../util/pagination.js')

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
router.get('/users', (req, res) => {
	//处理分页，提取公共样式到util/pagination.js里面
	/*
		前提条件：想要显示哪一页必须知道页码，page由前台传入
		每页显示3条数据，limit=3
		第一页：1-3	跳过skip(1-1)*limit
		第二页：3-6	跳过skip(2-1)*limit
		......
		第page页：        跳过skip(page-1)*limit
	
	const limit = 3
	let page = req.query.page/1
	//如果page不是数字
	if(isNaN(page)){
		page = 1
	}
	//上一页边界控制
	if(page == 0){
		page = 1
	}
	

	UserModel.countDocuments((err,count)=>{
		const pages = Math.ceil(count / limit)
		//下一页边界控制
		if(page > pages){
			page = pages
		}
		//由于swig无法对数字进行循环遍历，所以要在后台生成页码
		let list = []
		for(let i=1;i<=pages;i++){
			list.push(i)
		}
		let skip = (page-1)*limit

		UserModel.find({},'-password -__v')
		.sort({_id:-1})
		.skip(skip)
		.limit(limit)
	*/

	let options = {
		limit:3,
		page:req.query.page/1,
		model:UserModel,
		query:{},
		projection:'-password -__v',
		sort:{_id:-1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/users',{
			userInfo:req.userInfo,
			users:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/admin/users'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

module.exports = router