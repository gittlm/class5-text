const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')

async function getcommondata(){
	//获取列表首页名称
	const getCategories = CategoryModel.find({},'name').sort({order:1})
	//获取点击排行文章信息
	const getClickArticle = ArticleModel.find({},'title click').sort({click:-1}).limit(10)



	const categories = await getCategories
	const clickArticles = await getClickArticle

	return {
		categories,
		clickArticles
	}
}





//显示首页
router.get('/', (req, res) => {
	//获取cookies信息并返回给模板
	// let userInfo = {}
	// if(req.cookies.get('userInfo')){
	// 	userInfo = JSON.parse(req.cookies.get('userInfo'))
	// }
	ArticleModel.getPaginationData(req)
	.then(result=>{
		getcommondata()
		.then(data=>{
			const { categories,clickArticles } = data
			res.render('main/index',{
				userInfo:req.userInfo,
				categories,
				clickArticles,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				url:'/'
			})
		})
	})
	
})
//显示列表页
router.get('/list', (req, res) => {
	res.render('main/list',{
		userInfo:req.userInfo
	})
})
//显示详情页
router.get('/detail', (req, res) => {
	res.render('main/detail',{
		userInfo:req.userInfo
	})
})

//处理文章首页分页ajax请求
router.get('/articles',(req,res)=>{
	ArticleModel.getPaginationData(req)
	.then(result=>{
		res.json({
			code:0,
			message:'获取文章成功',
			data:result
		})
	})
	.catch(err=>{
		res.json({
			code:5,
			message:'获取文章失败'
		})
	})	
})



module.exports = router