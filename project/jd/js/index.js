;(function($){
		//共通只加载一次html
	function loadHtmlOnce($elem,cb){

		var $layer = $elem.find('.dropdown-layer');
		var dataUrl = $elem .data('url');
		if(!dataUrl) return;
		if($elem.data('isLoaded')) return;
		$.getJSON(dataUrl,function(data){
			$elem.data('isLoaded',true);
			/*
			var html = '';
			
			for(var i=0;i<data.length;i++){
				html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
			}
			//.模仿数据加载
			setTimeout(function(){
				$layer.html(html);
			},1000)
			*/
			typeof cb == 'function' && cb(data,$layer);
			
			
		})
	}



	function handleDropDown(){
		var $dropdown = $('.nav-side .dropdown');
		
		$dropdown.on('dropdown-show',function(ev){
			/*
			var $elem = $(this);
			var $layer = $elem.find('.dropdown-layer');
			var dataUrl = $elem .data('url');
			if(!dataUrl) return;
			if($elem.data('isLoaded')) return;
			$.getJSON(dataUrl,function(data){
				$elem.data('isLoaded',true);
				var html = '';
				for(var i=0;i<data.length;i++){
					html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
				}
				
				
			})
			*/
			loadHtmlOnce($(this),createMenuHtml)
			function createMenuHtml(data,$layer){
				var html = '';
				for(var i=0;i<data.length;i++){
					html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
				}
				//.模仿数据加载
				setTimeout(function(){
					$layer.html(html);
				},1000)
			}
		})
		$dropdown.dropdown({delay:200}); 
		/*
		$('.nav-side button').on('click',function(ev){
			// ev.stopPropagation();
			$('.nav-side .dropdown').dropdown('show');
		})
		*/
	}
	// function handleDropDown(){
	// 	var $dropdown = $('.top1 .dropdown')
	// 	$dropdown.dropdown({delay:200});

	// 	$dropdown.on('dropdown-show',function(ev){
	// 		var $elem = $(this);
	// 		var dataUrl = $elem.data('url');

	// 		if(!dataUrl) return;
	// 		if($elem.data('isLoaded')) return;
			
	// 		$.getJSON(dataUrl,function(data){
	// 			$elem.data('isLoaded',true);
	// 			var html = '';
	// 			for(var i=0;i<data.length;i++){
	// 				html += '<li class="menu-item"><a href="'+data[i].url+'">'+data[i].name+'</a></li>'
	// 			}
	// 			//模仿数据加载
	// 			setTimeout(function(){
	// 				$dropdown.find('.dropdown-layer').html(html)
	// 			},1000)
	// 		})
	// 	})
	// }
	handleDropDown();
	function handleSearch(){
		$('.search').search();
		$('.search').on('getData',function(ev,data){
			var html = createLayerHtml(data,10);
			$('.search').search('addHtml',html);
			$('.search').search('showLayer');
		})


		$('.search').on('getNoData',function(){
			$('.search').search('addHtml','');
			$('.search').search('hideLayer');
		})


		function createLayerHtml(data,itemNum){
			var html = '';
			for(var i=0;i<data.result.length;i++){
				if(i >= itemNum) break;
				html += '<li class="search-item">'+data.result[i][0]+'</li>';
			}
			return html;
		}
		
	}
	handleSearch();
		function handleCategory(){
		var $dropdown = $('.category .dropdown');
		
		$dropdown.on('dropdown-show',function(ev){
			/*
			var $elem = $(this);
			var $layer = $elem.find('.dropdown-layer');
			var dataUrl = $elem .data('url');
			if(!dataUrl) return;
			if($elem.data('isLoaded')) return;
			$.getJSON(dataUrl,function(data){
				$elem.data('isLoaded',true);
				var html = '';
				for(var i=0;i<data.length;i++){
					html += '<dl class="category-details"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">'
					for(var j=0;j<data[i].items.length;j++){
						html += '<a href="#" class="link">'+data[i].items[j]+'</a>'
					}
					html += '</dd></dl>'
				}
				//.模仿数据加载
				setTimeout(function(){
					 $layer.html(html);
				},1000)
				
			})
			*/
			loadHtmlOnce($(this),createCategoryHtml)
			function createCategoryHtml(data,$layer){
				var html = '';
				for(var i=0;i<data.length;i++){
					html += '<dl class="category-details"><dt class="category-details-title fl"><a href="#" class="category-details-title-link">'+data[i].title+'</a></dt><dd class="category-details-item fl">'
					for(var j=0;j<data[i].items.length;j++){
						html += '<a href="#" class="link">'+data[i].items[j]+'</a>'
					}
					html += '</dd></dl>'
				}
				//.模仿数据加载
				setTimeout(function(){
					$layer.html(html);
				},1000)
			}
		})
		$dropdown.dropdown({delay:200,js:true,mode:"fade"});
	}
	handleCategory();

	function handleCarousel(){
		var $carousel = $('.carousel-wrap');
		$carousel.carousel({});
	}
	handleCarousel();
})(jQuery);