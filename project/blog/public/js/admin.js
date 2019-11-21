;(function($){
	$('.del').on('click',function(){
		if(!window.confirm('请问您确定删除该条记录吗？')){
			return false;
		}
	})
})(jQuery);