;(function($){
	function Main($elem){
		this.$elem = $elem;
		this.$imgs = $elem.find('.main-img')
		this.$img = $elem.find('.main-img img');
		this.$left = $elem.find('.left-btn');
		this.$right = $elem.find('.right-btn');
		this.$lis = $elem.find('.li-btn li')
		this.now = 0;
		// console.log(this.$right)
		this.init();
	}
	Main.prototype = {
		constructor:Main,
		init:function(){
			// console.log(this.$elem)
			$(this.$img[this.now]).show();
			$(this.$lis[this.now]).css('background','gray');


			this.$right.on('click',function(){
				this.fadeOut();
				// $(this.$img[this.now]).fadeOut();

				this.now++;
				if(this.now >=this.$img.length){
					this.now = 0;
				}
				if(this.now == 0){
					$(this.$lis[this.$img.length-1]).css('background','#fff');
				}else{
					$(this.$lis[this.now-1]).css('background','#fff');
				}
				// $(this.$lis[this.now-1]).css('background','#fff');
				this.fadeIn();
				// $(this.$lis[this.now]).css('background','gray');
				// $(this.$img[this.now]).fadeIn();
			}.bind(this))


			this.$left.on('click',function(){
				// $(this.$img[this.now]).fadeOut();
				this.fadeOut();
				if(this.now <=0){
					this.now = this.$img.length;
				}
				this.now--;
				if(this.now == this.$img.length-1){
					$(this.$lis[0]).css('background','#fff');
				}else{
					$(this.$lis[this.now+1]).css('background','#fff');
				}
				// $(this.$lis[this.now+1]).css('background','#fff');
				this.fadeIn();
				// $(this.$img[this.now]).fadeIn();
				// $(this.$lis[this.now]).css('background','gray');
				// console.log(this.now)
			}.bind(this))

			// console.log(this.now)
			this.$lis.each(function(index,val){
				// console.log(index,val)
				this.now = index;
				console.log(this.now)
				$(val).on('click',function(){
					// console.log(this)
					$(this).css('background','gray');
				})

			})
			
		},
		fadeOut:function(){
			$(this.$img[this.now]).fadeOut();
		},
		fadeIn:function(){

			$(this.$lis[this.now]).css('background','gray');
			$(this.$img[this.now]).fadeIn();
		}
	}
	Main.DEFAULTS = {

	}
	$.fn.extend({
		main:function(){
			var $elem = $('.main-box');
			// options = $.extend({},Main.DEFAULTS,options);
			var search = new Main($elem);
		}
	});
})(jQuery);