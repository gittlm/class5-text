const mongoose = require('mongoose')

//1.定义文档模型
	const UserSchema = new mongoose.Schema({
	  	title:{
	  		type:String
	  	},
	  	intro:{
	  		type:String
	  	},
	  	user:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'user'
	  	},
	  	category:{
	  		type:mongoose.Schema.Types.ObjectId,
	  		ref:'category'
	  	},
	  	createdAt:{
	  		type:Date,
	  		default:Date.now
	  	},
	  	click:{
	  		type:Number,
	  		default:0
	  	},
	  	content:{
	  		type:String
	  	}
	})

	//定义实例方法
	UserSchema.methods.getBlogs = function(callback){
		this.model('blog').find({author:this._id},callback)
	}
	//定义静态方法
	UserSchema.statics.findByPhone = function(val,callback){
		this.findOne({phone:val},callback)
	}

//2.根据文档模型生成对应模型(集合)
//2.1第一个参数就是需要生成的集合名称,mongoose子自动将集合名称转化为复数
//2.2第二个参数就是前面定义的文档模型
const ArticleModel = mongoose.model('article', UserSchema)

module.exports = ArticleModel