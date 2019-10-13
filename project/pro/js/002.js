;(function($){
	function Search($elem){
		this.$elem = $elem;
		this.$txt = $elem.find('.txt');
		this.$btn = $elem.find('.btn');

		this.init();
	}
	Search.prototype = {
		constructor:Search,
		init:function(){
			this.$btn.on('click',$.proxy(this.submit,this));
		},
		submit:function(){
			var val = this.getValue();
			if(val == ''){
				console.log('none...')
			}
			this.$elem.submit();
		},
		getValue:function(){
			return this.$txt.val();
		}
	}

	// Search.defaults = {
	// 	name:'tanglimin'
	// }

	$.fn.extend({
		search:function(){
			var $elem = $('.search');
			var search = new Search($elem);
		}
	});
})(jQuery);