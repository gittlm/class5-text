;(function($){
	//处理只渲染首页的article页面
	$.fn.extend({
		pagination:function(options){
			var $elem = this
			$elem.on('click','a',function(){
				var $this = $(this)
				//1.获取当前页面
				var currentPage = $elem.find('.active a').html()/1
				//2.根据当前页面找到要点击的页码
				var labelText = $this.attr('aria-label')
				var page = 0
				if(labelText == 'Next'){//前进一页
					page = currentPage + 1
				}else if(labelText == 'Previous'){//后退一页
					page = currentPage - 1
				}else{//直接点击页码
					page = $this.html()/1
				}
				if(page == currentPage){//点击的是当前页码
					return false;
				}
				//由于列表页面只要当前对应分类下的文章
				//所以要获取对应分类的ID
				var url = options.url+'?page='+page
				var id = $elem.data('id')
				if(id){
					url = url + '&id=' + id
				}
				//3.发送ajax请求
				$.ajax({
					url:url,
					type:'get',
					dataType:'json'
				})
				.done(function(result){
					$elem.trigger('get-data',result.data)
				})
				.fail(err=>{
					console.log(err)
				})
			})
		}
	})
})(jQuery);