;(function($){
	function Main($elem){
		this.$elem = $elem;
		this.$imgs = $elem.find('.main-img')
		this.$img = $elem.find('.main-img img');
		this.$left = $elem.find('.left-btn');
		this.$right = $elem.find('.right-btn');
		this.$lis = $elem.find('.li-btn li')
		this.now = 0;
		this.timer = 0;


		this.init();
	}
	Main.prototype = {
		constructor:Main,
		init:function(){
			$(this.$img[this.now]).show();
			$(this.$lis[this.now]).css('background','gray');
			this.left();
			this.right();
			// setInterval(this.right,1000)
			this.$elem.hover(function(){
				this.$left.fadeIn();
				this.$right.fadeIn();
				// clearInterval();
			}.bind(this),function(){
				this.$left.fadeOut();
				this.$right.fadeOut();
				// setInterval();
			}.bind(this))
		},
		fadeOut:function(){
			$(this.$img[this.now]).fadeOut();
		},
		fadeIn:function(){

			$(this.$lis[this.now]).css('background','gray');
			$(this.$img[this.now]).fadeIn();
		},
		left:function(){
			this.$left.on('click',function(){
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

				this.fadeIn();
			}.bind(this))
		},
		right:function(){
			this.$right.on('click',function(){
				this.fadeOut();

				this.now++;
				if(this.now >=this.$img.length){
					this.now = 0;
				}
				if(this.now == 0){
					$(this.$lis[this.$img.length-1]).css('background','#fff');
				}else{
					$(this.$lis[this.now-1]).css('background','#fff');
				}

				this.fadeIn();
			}.bind(this))
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