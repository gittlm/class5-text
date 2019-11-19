(function($){
	$('#logout').on('click',function(){
		$.ajax({
			url:'/user/logout',
			type:'get'
		})
		.done(function(data){
			if(data.code == 0){
				//返回首页
				window.location.href = '/'
				// window.location.reload()
			}
		})
		.fail(function(err){
			$('#user-info').find('.err').html('请求失败，请稍后再试')
		})
	})
	// $('.nav-sidebar li').on('click',function(){
	// 	console.log(this)
	// })
})(jQuery);