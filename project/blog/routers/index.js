const express = require('express')
const router = express.Router()
const CategoryModel = require('../models/category.js')

async function getcommondata(){
	const getCategories = CategoryModel.find({},'name').sort({order:1})
	const categories = await getCategories
	return {
		categories
	}
}





//显示首页
router.get('/', (req, res) => {
	//获取cookies信息并返回给模板
	// let userInfo = {}
	// if(req.cookies.get('userInfo')){
	// 	userInfo = JSON.parse(req.cookies.get('userInfo'))
	// }
	getcommondata()
	res.render('main/index',{
		userInfo:req.userInfo
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

module.exports = router