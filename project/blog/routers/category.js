const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')

//后台管理员权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请使用管理员帐号登录！！！</h1>')
	}
})

//显示后台分类页面
router.get('/', (req,res) => {
	//直接引用util/pagination.js模板
	let options = {
		limit:5,
		page:req.query.page/1,
		model:CategoryModel,
		query:{},
		projection:'-__v',
		sort:{order:1}
	}
	pagination(options)
	.then(result=>{
		res.render('admin/category',{
			userInfo:req.userInfo,
			categories:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'category'
		})
	})
	.catch(err=>{
		console.log(err)
	})
})

//显示后台新增页面
router.get('/add', (req,res) => {
	res.render('admin/category-add',{
		userInfo:req.userInfo
	})
})

//处理后台新增页面
router.post('/add', (req,res) => {
	//获取参数
	let { name,order,des } = req.body
	if(!order){
		order = 0
	}
	if(!des){
		des = name
	}
	//查找数据库同名验证
	CategoryModel.findOne({name:name})
	.then(category=>{
		if(category){//有同名，新增不成功
			res.render('admin/fail',{
				userInfo:req.userInfo,
				message:'名称已存在，请更换名称'
			})
		}else{//可以新增，并添加到数据库中
			CategoryModel.insertMany({name,order,des})
			.then(result=>{//新增分类成功
				res.render('admin/ok',{
					userInfo:req.userInfo,
					message:'新增分类成功',
					url:'/category'
				})
			})
			.catch(err=>{//新增分类失败
				if(!name){
					res.render('admin/fail',{
						userInfo:req.userInfo,
						message:'分类名称为空，请重新输入',
						url:'/category'
					})
				}
				
			})
		}
	})
	.catch(err=>{
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'操作失败,请稍后再试'
		})
	})
})

//显示修改页面
router.get('/edit/:id', (req,res) => {
	const id = req.params.id
	CategoryModel.findById(id)
	.then(category=>{
		res.render('admin/category-edit',{
			userInfo:req.userInfo,
			category
		})
	})
	.catch(err=>{
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'请求失败,请稍后再试',
			category
		})
	})
})

//处理修改页面
router.post('/edit', (req,res) => {
	//获取参数
	let { name,order,des,id } = req.body
	if(!order){
		order = 0
	}
	if(!des){
		des = name
	}
	//查找数据库
	CategoryModel.findById(id)
	.then(category=>{//查找数据库同名验证
		if(category.name == name && category.order == order){//数据未改变，
			res.render('admin/fail',{//对比有没有更改
				userInfo:req.userInfo,
				message:'名称未修改，请修改后再提交',
				category
			})
		}else{//可以改变数据
			// if(name){
			CategoryModel.findOne({name:name,_id:{$ne:id}})
			.then(category=>{
				if(category){//查询数据库里有同名存在 
					res.render('admin/fail',{
						userInfo:req.userInfo,
						message:'名称已存在，请更换名称',
						category
					})
				}else{//查询数据库里无同名存在 ，可以修改
					CategoryModel.updateOne({_id:id},{name,order,des})
					.then(result=>{//修改成功
						// if(result.name){//有名称且不重复，修改成功
						res.render('admin/ok',{
							userInfo:req.userInfo,
							message:'修改成功',
							url:'/category',
							category
						})
						// }
					})
					.catch(err=>{//修改失败
						res.render('admin/fail',{
							userInfo:req.userInfo,
							message:'修改失败，请稍后再试',
							category
						})
					})
				}
			})	
			.catch(err=>{//修改失败
				res.render('admin/fail',{
					userInfo:req.userInfo,
					message:'数据库查找失败,请稍后再试',
					category
				})
			})	
			// }else{
			// 	return;
			// }
		}	
	})		
	.catch(err=>{
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'数据库操作修改失败,请稍后再试',
			category
		})
	})
})

//删除分类
router.get('/delete/:id',(req,res)=>{
	//找到相应的id
	const id = req.params.id
	CategoryModel.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除分类成功',
			url:'/category'
		})
	})	
	.catch(err=>{//修改失败
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'数据库查找失败,请稍后再试'
		})
	})	
})

module.exports = router