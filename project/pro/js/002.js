;(function($){
	var cache={
		data:{},
		count:0,
		addData:function(key,val){
			this.data[key] = val;
			this.count++;
		},
		getData:function(){
			return this.data[key];
		}
	}
	
	function Search($elem,options){
		this.$elem = $elem;
		this.options = options;
		this.$txt = $elem.find('.txt');
		this.$btn = $elem.find('.btn');
		this.$layer = $('.layer-ul');
		this.$layerLi = $('.layer-li');
		this.jqXHR = null;
		// this.isLoaded = false;
		this.timerIn = 0;
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
			this.$txt.on('input',function(){
				if(this.options.delay){
					clearTimeout(this.timerIn);
					this.timerIn = setTimeout(function(){
						this.getData();
					}.bind(this),this.options.delay);
				}else{
					this.getData();
				}
			}.bind(this));
			$(document).on('click',$.proxy(this.hideLayer,this));
			this.$txt.on('focus',$.proxy(this.showLayer,this));
			this.$txt.on('click',function(ev){
				ev.stopPropagation();
			})
			var _this = this;
			this.$layer.on('click','.layer-li',function(){
				var $li = $(this);
				console.log($li.text())
				_this.$txt.val($li.text());
				_this.$elem.submit();
			})
		},
		getData:function(){
			var inputVal = this.getValue();
			if(inputVal == ''){
				this.addHtml('');
				this.hideLayer();
				return;
			};
			if(this.jqXHR){
				this.jqXHR.abord();
			}
			if(cache.data[this.getValue()]){
				return;
			}
			console.log('00001')
			this.jqXHR = $.ajax({
				url:this.options.url + this.getValue(),
				dataType: 'jsonp',
				jsonp: 'callback'
			})
			.done(function(data){
				var html = '';
				for(var i=0;i<data.result.length;i++){
					html += '<li class="layer-li"><a href="#">'+data.result[i][0]+'</a></li>';
				}
				this.addHtml(html);
				cache.addData(this.getValue(),data);
				this.showLayer();
			}.bind(this))
			.always(function(){
				this.jqXHR = null;
			}.bind(this))
		},
		hideLayer:function(){
			this.$layer.hide();
		},
		showLayer:function(){
			this.$layer.show();
		},
		addHtml:function(html){
			this.$layer.html(html);
		}
	}
	Search.DEFAULTS = {
		autocomplete:true,
		url:'https://suggest.taobao.com/sug?q=',
		delay:200
	}
	$.fn.extend({
		search:function(options){
			var $elem = $('.search');
			options = $.extend({},Search.DEFAULTS,options);
			var search = new Search($elem,options);
		}
	});
})(jQuery);