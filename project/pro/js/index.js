;(function($){
	function navDropDown(){
		var $li = $('.nav .dropdown')
		var $layer = $('.nav .dropdown-layer');
		var timer = 0;
		$li.each(function(index,val){
			$(this).hover(function(){
				timer = setTimeout(function(){
					$(this).addClass('active');
					$(this).find('.dropdown-layer').slideDown(500);
					$(this).find('i').addClass('transform');



					var dataUrl = $(this).data('url');
					if($(this).data('isLoaded')) return;
					var _this = this 
					if(dataUrl){
						$.getJSON(dataUrl,function(data) {
							var html = '';
							for(var i=0;i<data.length;i++){
								html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
							}
							$(_this).data('isLoaded',true);
							setTimeout(function(){
								$(_this).find('.dropdown-layer').html(html);
							},1000)
						});
					}



				}.bind(this),300)
			},function(){
				clearTimeout(timer)
				$(this).removeClass('active');
				$(this).find('.dropdown-layer').slideUp(100);
				$(this).find('i').removeClass('transform');
			})
		})
	}
	navDropDown();
	function handleSearch(){
		$('.search').search();
	}
	handleSearch();
})(jQuery);