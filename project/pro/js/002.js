;(function($){
	function Search($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.$txt = $elem.find('.txt');
		this.$btn = $elem.find('.btn');
		this.dataUrl = this.options.src + this.getValue();


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
				return false;
			}
			this.$elem.submit();
		},
		getValue:function(){
			return this.$txt.val();
		},
		getData:function(){
			this.$txt.on('input',function(){
				var dataUrl = this.$txt.data('src')+this.getValue();
			})
		}
	}
	Search.DEFAULTS = {
		autocomplete:true,
		src:'https://suggest.taobao.com/sug?q='
	}
	$.fn.extend({
		search:function(options){
			var $elem = $('.search');
			options = $.extend({},Search.DEFAULTS,options);
			var search = new Search($elem,options);
		}
	});
})(jQuery);