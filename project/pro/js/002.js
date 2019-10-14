;(function($){
	function Search($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.$txt = $elem.find('.txt');
		this.$btn = $elem.find('.btn');
		this.$layer = $('.layer-ul');
		this.$li = $('.layer-ul li');
		this.isLoaded = false;

		this.init();
		if(this.options.autocomplete){
			this.autocomplete();
		}
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
			return $.trim(this.$txt.val());
		},
		autocomplete:function(){
			this.showLayer();
			this.$txt.on('input',$.proxy(this.getData,this));
			$(document).on('click',$.proxy(this.hideLayer,this));
			this.$txt.on('focus',$.proxy(this.showLayer,this));
			this.$txt.on('click',function(ev){
				ev.stopPropagation();
			})
		},
		getData:function(){
			if(this.getValue() == ''){
				this.addHtml('');
				// this.hideLayer();
				return;
			};
			$.ajax({
				url:this.options.url + this.getValue(),
				dataType: 'jsonp',
				jsonp: 'callback'
			})
			.done(function(data){
				var html = '';
				for(var i=0;i<data.result.length;i++){
					html += '<li><a href="#">'+data.result[i][0]+'</a></li>';
				}
				this.addHtml(html);
				this.showLayer();

			}.bind(this))
		},
		hideLayer:function(){
			this.$layer.hide();
		},
		showLayer:function(){
			// if(!this.isLoaded) return;
			this.$layer.show();
		},
		addHtml:function(html){
			// this.isLoaded == !!html;
			this.$layer.html(html);
		}
	}
	Search.DEFAULTS = {
		autocomplete:true,
		url:'https://suggest.taobao.com/sug?q='
	}
	$.fn.extend({
		search:function(options){
			var $elem = $('.search');
			options = $.extend({},Search.DEFAULTS,options);
			var search = new Search($elem,options);
		}
	});
})(jQuery);