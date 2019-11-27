const path = require('path');

module.exports = {
	// "production" 开发环境； "development"生产环境； "none"不指定
  	mode:'development',


	// 这里应用程序开始执行，是入口
  	// webpack 开始打包// string | object | array 
  	//单一入口两种方法
  	// entry: './src/index.js',
  	// entry:{index:'./src/index.js'},
  	//多入口
  	entry:{
  		index:'./src/index.js',
  		about:'./src/about.js',
  		contact:'./src/contact.js'
  	},
  

  	//出口，输出
  	output: {// webpack 如何输出结果的相关选项
  		// 所有输出文件的目标路径
    	// 必须是绝对路径（使用 Node.js 的 path 模块）// string
    	path: path.resolve(__dirname, 'dist'),

    	// 「入口分块(entry chunk)」的文件名模板（出口分块？）// string  
    	//对于单个入口,出口可以是一个静态文件
  		// filename: 'bundle.js'
  		//对于多个入口,也只指定一个输出配置
  		// filename: '[name]-bundle.js'
      // filename: '[name]-[hash]-bundle.js'
      filename: '[name]-[chunkhash]-bundle.js'
  	},
   	module: {
	   	rules: [
	     {//处理CSS资源
	       test: /\.css$/,
	       use: [
	         'style-loader',
	         'css-loader'
	       ]
	     },
	     {//处理图片资源
	       test: /\.(png|svg|jpg|gif)$/,
	       use: [
	         {
	         	loader:'url-loader',
	         	options:{
	         		limit: 10
	         	}
	         }
	       ]
	     }
	   	]
 	}
};