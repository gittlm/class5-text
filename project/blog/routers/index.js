const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')
const ArticleModel = require('../models/article.js')

async function getcommondata(){
	//获取列表首页名称
	const getCategoriesDataPromiste = CategoryModel.find({},'name').sort({order:1})
	//获取点击排行文章信息
	const getClickArticlesDataPromise = ArticleModel.find({},'title click').sort({click:-1}).limit(10)


	const categories = await getCategoriesDataPromiste
	const clickArticles = await getClickArticlesDataPromise

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
router.get('/list/:id', (req, res) => {
	const id = req.params.id
	ArticleModel.getPaginationData(req,{category:id})
	.then(result=>{
		getcommondata()
		.then(data=>{
			const { categories,clickArticles } = data
			res.render('main/list',{
				userInfo:req.userInfo,
				categories,
				clickArticles,
				//返回分页数据
				articles:result.docs,
				page:result.page,
				list:result.list,
				pages:result.pages,
				//分类ID回传
				currentCategoryId:id,
				url:'/list'
			})
		})
	})
})
//获取详情页具体信息
async function getArticleData(req){
	const id = req.params.id
	//获取详情页面具体文章
	const getCommonDataPromise = getcommondata()
	const getArticleDataPromise = ArticleModel.findOneAndUpdate({_id:id},{$inc:{click:1}},{new:true})
	.populate({path:'user',select:'username'})
	.populate({path:'category',select:'name'})


	//为了保证点击排行榜点击量数据和详情点击量一致,
	//必须先获取详情文章信息再获取点击排行信息
	const articleData = await getArticleDataPromise
	const commonData = await getCommonDataPromise


	const { categories,clickArticles } = commonData
	return {
		categories,
		clickArticles,
		articleData
	}
}

//显示detail页面
router.get('/detail/:id', (req,res) => {
	getArticleData(req)
	.then(data=>{
		const { categories,clickArticles,articleData } = data
		res.render('main/detail',{
			userInfo:req.userInfo,
			categories,
			clickArticles,
			articleData,
			//分类ID回传
			currentCategoryId:articleData.category
		})
	})
})


//处理文章首页分页ajax请求
router.get('/articles',(req,res)=>{
	const id = req.query.id
	let query = {}
	if(id){
		query.category = id
	}
	ArticleModel.getPaginationData(req,query)
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