;(function($){
	function Main($elem){
		this.$imgs = $elem.find('.main-img img');
		this.$left = $elem.find('.left-btn');
		this.$right = $elem.find('.right-btn');
		this.$lis = $elem.find('.li-btn li')
		// console.log(this.index)
		this.init();
	}
	Main.prototype = {
		constructor:Main,
		init:function(){
			this.$left.on('click',function(){
				this.$imgs.each(function(index,val){
					for(var i=0;i<this.$imgs.length;i++){
						this.$imgs.show();
					}
				}.bind(this))
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