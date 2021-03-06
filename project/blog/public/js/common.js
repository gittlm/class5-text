;(function($){
	var $login = $('#go-login')
	var $register = $('#go-register')
//1.注册登录页面
	//注册=>登录
	$login.on('click',function(){
		// console.log('login')
		$('#login').show();
		$('#register').hide();
	})
	//登录=>注册
	$register.on('click',function(){
		$('#login').hide();
		$('#register').show();
	})

//2.注册完成
	//点击注册发送请求
	$('#sub-register').on('click',function(){
		//获取用户数据
		var username = $('#register').find("[name='username']").val()
		var password = $('#register').find("[name='password']").val()
		var repassword = $('#register').find("[name='repassword']").val()
		//设置用户名以字母开头，字母和数字长度6-10位
		var usernameReg = /^[a-z][a-z0-9]{5,9}$/i
		//设置密码以字母开头，字母和数字长度6-8位
		var passwordReg = /^[a-z][a-z0-9]{5,7}$/i
		// console.log(usernameReg.test(username))
		// console.log(passwordReg.test(username))
		//验证用户名是否合法
		var errMsg = '';
		if(!usernameReg.test(username)){
			errMsg = '用户名请以字母开头,字母和数字长度6-10位'
		}else{//验证用户名通过
			errMsg = ''
			if(!passwordReg.test(password)){
				errMsg = '密码请以字母开头,字母和数字长度6-8位'
			}else{//验证密码通过
				errMsg = ''
				if(password !== repassword){
					errMsg = '您输入的密码不一致，请重新输入'
				}else{//验证重复密码通过
					errMsg = ''
				}
			}
		}
		//如果错误信息存在就显示信息，不存在就发送请求到后台
		if(errMsg){
			$('#register').find('.err').html(errMsg)
		}else{
			$.ajax({
				url:'/user/register',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){//注册成功
				if(data.code == 0){
					//返回登录页面
					$login.trigger('click')
					$('#login').find(".err").html('注册成功，请登录')
				}else{
					$('#register').find('.err').html(data.message)
				}
			})
			.fail(function(err){//注册失败
				$('#register').find('.err').html('请求失败,请稍后再试')
			})
		}
	})
//3.点击登录发送请求
//3.点击登录
	//点击登录发送请求
	$('#sub-login').on('click',function(){
		//获取用户数据
		var username = $('#login').find("[name='username']").val()
		var password = $('#login').find("[name='password']").val()
		//设置用户名以字母开头，字母和数字长度6-10位
		var usernameReg = /^[a-z][a-z0-9]{5,9}$/i
		//设置密码以字母开头，字母和数字长度6-8位
		var passwordReg = /^[a-z][a-z0-9]{5,7}$/i
		//验证用户名是否合法
		var errMsg = '';
		if(!usernameReg.test(username)){
			errMsg = '用户名请以字母开头,字母和数字长度6-10位'
		}else{//验证用户名通过
			errMsg = ''
			if(!passwordReg.test(password)){
				errMsg = '密码请以字母开头,字母和数字长度6-8位'
			}else{//验证密码通过
				errMsg = ''
			}
		}
		//如果错误信息存在就显示信息，不存在就发送请求到后台
		if(errMsg){
			$('#login').find('.err').html(errMsg)
		}else{
			$.ajax({
				url:'/user/login',
				type:'POST',
				dataType:'json',
				data:{
					username:username,
					password:password
				}
			})
			.done(function(data){
				if(data.code == 0){
					// $('#user-info').find('span').html(username);
					// $('#user-info').show();
					// $('#login').hide();
					window.location.reload()//刷新页面
				}else{
					$('#login').find('.err').html(data.message)
				}
				
			})
			.fail(function(err){
				$('#login').find('.err').html('登录失败,请稍后再试')
			})
		}
	})
	
//4.点击退出，退出登录(抽取公共样式到logout.js)
	// $('#logout').on('click',function(){
	// 	$.ajax({
	// 		url:'/user/logout',
	// 		type:'get'
	// 	})
	// 	.done(function(data){
	// 		if(data.code == 0){
	// 			//返回首页
	// 			window.location.href = '/'
	// 			// window.location.reload()
	// 		}
	// 	})
	// 	.fail(function(err){
	// 		$('#user-info').find('.err').html('请求失败，请稍后再试')
	// 	})
	// })
	//


	//5.首页分页逻辑
	var $articlePage = $('#article-page')
	function buildArticleHtml(articles){
		var html = ''
			articles.forEach(function(article){
				var createdTime = moment(article.createdAt).format('YYYY - MM - DD HH:mm:ss')
				html += `
					<div class="panel panel-default content-item">
				        <div class="panel-heading">
				          <h3 class="panel-title">
				            <a href="/detail/${article._id.toString()}" class="link" target="_blank">${article.title}</a>
				          </h3>
				        </div>
				        <div class="panel-body">
				          ${article.intro}
				        </div>
				        <div class="panel-footer">
				          <span class="glyphicon glyphicon-user"></span>
				          <span class="panel-footer-text text-muted">${article.user.username}</span>
				          <span class="glyphicon glyphicon-th-list"></span>
				          <span class="panel-footer-text text-muted">${article.category.name}</span>
				          <span class="glyphicon glyphicon-time"></span>
				          <span class="panel-footer-text text-muted">${createdTime}</span>
				          <span class="glyphicon glyphicon-eye-open"></span>
				          <span class="panel-footer-text text-muted"><em>${article.click}</em>已阅读</span>
				        </div>
				    </div>`
			})
		return html
	}
	function buildPaginationHtml(page,pages,list){
		var html = ''
		if(page == 1){
			html += `<li class="disabled">`
		}else{
			html += `<li>`
		}
		html += `<a href="javascript:;" aria-label="Previous">
			        <span aria-hidden="true">&laquo;</span>
			      </a>
			    </li>`
		list.forEach(function(i){
			if(page == i){
				html += '<li class="active"><a href="javascript:;">'+i+'</a></li>'
			}else{
				html += '<li><a href="javascript:;">'+i+'</a></li>'
			}
		})
		if(page == pages){
			html += `<li class="disabled">`
		}else{
			html += `<li>`
		}
		html += `<a href="javascript:;" aria-label="Next">
			        <span aria-hidden="true">&raquo;</span>
			      </a>
			    </li>`
		return html
	}
	$articlePage.on('get-data',function(ev,data){
		// console.log(data)
		//获取首页文章分页数据
		//构建文章列表结构
		$('#article-wrap').html(buildArticleHtml(data.docs))
		//构建分页器结构
		var $pagination = $articlePage.find('.pagination')
		if(data.pages > 1){
			$pagination.html(buildPaginationHtml(data.page,data.pages,data.list))
		}else{
			$pagination.html('')
		}
	})
	$articlePage.pagination({
		url:'/articles'
	})
})(jQuery);