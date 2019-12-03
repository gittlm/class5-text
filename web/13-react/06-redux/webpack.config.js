const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')//自动生成HTML
const {CleanWebpackPlugin} = require('clean-webpack-plugin');//自动清理无用文件

module.exports = {
	mode:'development',
	entry:{
		index:'./src/index.js'
	},
	output: {
  	path: path.resolve(__dirname, 'dist'),
		filename: '[name]-[hash].bundle.js'
	},
 	module: {
	   	rules: [
  	     {
  	       test: /\.css$/,
  	       use: [
  	         'style-loader',
  	         'css-loader'
  	       ]
  	     },
  	     {
  	       test: /\.(png|svg|jpg|gif)$/,
  	       use: [
  	         {
  	         	loader:'url-loader',
  	         	options:{
  	         		limit: 10
  	         	}
  	         }
  	       ]
  	     },
         {
            test:/\.js$/,
              exclude: /(node_modules)/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['env', 'react']
                  }
              }               
          }
	   	]
 	},
  plugins:[
      new htmlWebpackPlugin({
          template:'./src/index.html',
          filename:'index.html',
          // inject:'head',
          hash:true
      }),
      new CleanWebpackPlugin()
  ],
  devServer:{
    contentBase: './dist',
    port:9000
  }
};