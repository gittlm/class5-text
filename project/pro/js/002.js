;(function($){
	function Search($elem,options){

		
		// console.log(options)
		console.log(this)
		// init();
	}
	Search.prototype = {
		constructor:Search,
		init:function(){
			console.log('init')
		},
		submit:function(){
			console.log('submit')
		},
		getValue:function(){
			console.log('value')
			// return this.val();
		}
	}

	// Search.defaults = {
	// 	name:'tanglimin'
	// }

	$.fn.extend({
		search:function(options){
			// console.log(this)
			var $elem = $(this);
			var search = new Search($elem,options);
		}
	});
})(jQuery);