// const express = require('express')
// const router = express.Router()
	//处理分页
	/*options={
		limit:显示的条数
		page:页数
		model:数据库模型
		query:查询条件
		projection:数据的显示与否
		sort:排序的条件
		url:路径
		populates:关联查询
	}
	*/
async function pagination(options){
	//获取用户信息，先处理分页
	/*
		前提条件：想要显示哪一页必须知道页码，page由前台传入
		每页显示3条数据，limit=3
		第一页：1-3	跳过skip(1-1)*limit
		第二页：3-6	跳过skip(2-1)*limit
		......
		第page页：        跳过skip(page-1)*limit
	*/
	// const limit = 3
	let { limit,page,model,query,projection,sort,populates,url } = options
	// let page = req.query.page/1
	//如果page不是数字
	if(isNaN(page)){
		page = 1
	}
	//上一页边界控制
	if(page == 0){
		page = 1
	}
	

	const count = await model.countDocuments()
	const pages = Math.ceil(count / limit)
	//下一页边界控制
	if(page > pages){
		page = pages
	}
	if(page == 0){
		page = 1
	}
	//由于swig无法对数字进行循环遍历，所以要在后台生成页码
	let list = []
	for(let i=1;i<=pages;i++){
		list.push(i)
	}
	let skip = (page-1)*limit

	const results = model.find(query,projection)

	if(populates){
		populates.forEach(function(populate){
			return results.populate(populate)
		})
	}

	const docs = await results.sort(sort).skip(skip).limit(limit)
	return {
		docs:docs,
		page:page,
		list:list,
		pages:pages,
		url:url
	}
}	
module.exports =  pagination