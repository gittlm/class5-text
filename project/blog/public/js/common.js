;(function($){
	var $login = $('#go-login')
	var $register = $('#go-register')
	$login.on('click',function(){
		console.log('login')
		$('#login').show();
		$('#register').hide();

	})
	$register.on('click',function(){
		$('#login').hide();
		$('#register').show();

	})
})(jQuery);