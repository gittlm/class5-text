const express = require('express')
const router = express.Router()
const ArticleModel = require('../models/article.js')
const CategoryModel = require('../models/category.js')
const pagination = require('../util/pagination.js')

//处理图片上传的固定写法，不能改变
//引用
const multer = require('multer');
//dest是图片资源存在后台的目录
const upload = multer({dest:'public/uploads/'});


//后台管理员权限验证
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next();
	}else{
		res.send('<h1>请使用管理员帐号登录！！！</h1>')
	}
})

//显示文章列表页面
router.get('/', (req,res) => {
	//直接引用util/pagination.js模板
	// let options = {
	// 	limit:5,
	// 	page:req.query.page/1,
	// 	model:ArticleModel,
	// 	query:{},
	// 	projection:'-__v',
	// 	sort:{_id:1},
	// 	populates:[{path:"user",select:"username"},{path:"category",select:"name"}]
	// }
	// pagination(options)
	// .then(result=>{
	// 	res.render('admin/article',{
	// 		userInfo:req.userInfo,
	// 		articles:result.docs,
	// 		page:result.page,
	// 		list:result.list,
	// 		pages:result.pages,
	// 		url:'/article'
	// 	})
	// })
	// .catch(err=>{
	// 	console.log(err)
	// })

	ArticleModel.getPaginationData(req)
	.then(result=>{
		res.render('admin/article',{
			userInfo:req.userInfo,
			articles:result.docs,
			page:result.page,
			list:result.list,
			pages:result.pages,
			url:'/article'
		})
	})	
})

//显示文章列表新增页面
router.get('/add', (req,res) => {
	CategoryModel.find({},'name')
	.then(categories=>{
		res.render('admin/article-add',{
			userInfo:req.userInfo,
			categories
		})
	})
	.catch(err=>{
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'文章操作失败'
		})
	})

})

//处理文章新增
router.post('/add', (req,res) => {
	let { category,title,intro,content } = req.body
	ArticleModel.insertMany({
		category,
		title,
		intro,
		content,
		user:req.userInfo._id
	})
	.then(result=>{//新增文章成功
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'新增文章成功',
			url:'/article'
		})
	})
	.catch(err=>{//新增文章失败
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'新增文章失败',
			url:'/article'
		})
	})
})

//处理图片上传
//upload.single('upload')
//upload是前台传递图片资源的字段名称
router.post('/uploadImage',upload.single('upload'),(req,res)=>{
	//从后台获取图片地址
	const filePath = '/uploads/'+req.file.filename;
	//传递图片固定写法，不能改变
	res.json({
		uploaded:true,
		url:filePath
	})
})

//显示修改页面
router.get('/edit/:id', (req,res) => {
	const id = req.params.id
	CategoryModel.find({})
	.then(categories=>{
		ArticleModel.findById(id)
		.then(article=>{
			res.render('admin/article-edit',{
				userInfo:req.userInfo,
				categories,
				article
			})
		})
	})
	.catch(err=>{
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'文章修改失败,请稍后再试'
		})
	})
})

//处理修改页面
router.post('/edit', (req,res) => {
	//获取参数
	let { category,title,intro,content,id } = req.body
	//查找数据库
	ArticleModel.updateOne({_id:id},{category,title,intro,content})
	.then(data=>{//修改成功
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'文章更新成功',
			url:'/article'
		})
		// }
	})
	.catch(err=>{//修改失败
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'修改失败，请稍后再试'
		})
	})
})

//删除分类
router.get('/delete/:id',(req,res)=>{
	//找到相应的id
	const id = req.params.id
	ArticleModel.deleteOne({_id:id})
	.then(category=>{
		res.render('admin/ok',{
			userInfo:req.userInfo,
			message:'删除文章成功',
			url:'/article'
		})
	})	
	.catch(err=>{//修改失败
		res.render('admin/fail',{
			userInfo:req.userInfo,
			message:'删除文章失败,请稍后再试'
		})
	})	
})


//显示列表详情页面
router.get('/list/:id', (req,res) => {
	const id = req.params.id
	CategoryModel.find({_id:id},'name')
	.then(categories=>{
		ArticleModel.find({title:categories.name})
		.then(articles=>{
			res.render('main/list',{
				userInfo:req.userInfo,
				articles,
				categories
			})
		})
	})
})

module.exports = router