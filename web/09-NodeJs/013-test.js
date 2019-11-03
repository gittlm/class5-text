;(function($){
	var $input = $('.todo-in')
	$input.on('keydown',function(ev){
		if(ev.keyCode == 13){
			$.ajax({
				url:url,
				type:'POST',
				dataType:'json',
				data:$input.val(),
				success:function(data){
					console.log(data)
				},
				error:function(jqXHR,statusMsg){
					console.log(statusMsg)
				}
			})
		}
	})
})(jQuery);