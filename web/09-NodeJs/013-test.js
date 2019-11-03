;(function($){
	var $input = $('.todo-in')
	$input.on('keydown',function(ev){


		$.ajax({
			url:url,
			type:'POST',
			dataType:'json',
			success:function(data){
				console.log(data)
			},
			error:function(jqXHR,statusMsg){
				console.log(statusMsg)
			}
		})
		if(ev.keyCode == 13){
			
		}
	})
})(jQuery);