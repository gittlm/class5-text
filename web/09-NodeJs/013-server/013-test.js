(function($){
	var $input = $('.todo-in')
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:'/add',
				type:'POST',
				dataType:'json',
				data:$input.val(),
				success:function(data){
					console.log(data)
				},
				error:function(err){
					console.log(err)
				}
			})
		}
	})
})(jQuery);