;(function(w){
	var kquery = function(selector){
		return new kquery.fn.init(selector);
	}
	kquery.fn = kquery.prototype = {
		constructor:kquery,
		init:function(selector){
			//1.false
			if(!selector){
				// return this;
			}else if(kquery.isFunction(selector)){//3.函数
				//执行函数的时间
				document.addEventListener('DOMContentLoaded',selector);
				this[0] = document;
				this.context = document;
				this.length = 1;
				// return this;
			}else if(kquery.isString(selector)){//2.字符串
				//2.1 html代码
				if(kquery.isHtml(selector)){
					var dom = document.createElement('div');
					dom.innerHTML = selector;
					for(var i=0;i<dom.children.length;i++){
						this[i] = dom.children[i];
					}
					this.length = dom.children.length;
					// return this;
				}else{//2.2 选择器
					var allEle = document.querySelectorAll(selector);
					for(var i=0;i<allEle.length;i++){
						this[i] = allEle[i];
					}
					this.context = document;
					// this.prevObject = this.init(allEle.parentNode);
					this.length = allEle.length;
					this.selector = selector;
				}
			}else if(kquery.isArray(selector)){//4.数组//4.1真数组//4.2伪数组
				var arr = [];
				for(var i=0;i<selector.length;i++){
					arr.push(selector[i])
				}
				return arr;
			}else{//5.对象及其他
				this[0] = selector;
				this.length = 1;
				// return this;
			}
		},
		get:function(num){
			// console.log(this.selector)
			var allEle = document.querySelectorAll(this.selector)
			// console.log(allEle)
			if(num){//有参数
				if(kquery.isNumber(num)){//参数是数字
					if(num>=0){//参数大于0
						return allEle[num];
					}else{//参数小于0
						// console.log(this)
						return allEle[num+this.length]
					}
				}//不是数字默认是undefined
			}else{//没参数
				var arr = [];
				for(var i=0;i<allEle.length;i++){
					arr.push(allEle[i])
				}
				return arr;
			}
		}
	}

	kquery.fn.extend = kquery.extend = function(options){
		for(attr in options){
			this[attr] = options[attr]
		}
	}
	kquery.extend({
		isFunction : function(fn){
			return typeof fn == 'function'
		},
		isString : function(str){
			return typeof str == 'string'
		},
		isHtml : function(str){
			return /<[^<>]+>$/.test(str)
		},
		isArray : function(arr){
			return typeof arr == 'object' && (length in arr);
		},
		isNumber : function(num){
			return typeof num == 'number';
		}
	})

	kquery.fn.init.prototype = kquery.prototype
	w.$ = w.kquery = kquery;
})(window);