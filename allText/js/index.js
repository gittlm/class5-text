;(function($){
	$('.content .father').on('click',function(){
		$('.content .son1-ul').slideDown();
		this.style.backgroundColor = 'red';
	})


	$('.JQuery').on('click',function(){
		$('.text-son2').slideDown();
		this.style.backgroundColor = 'red';
	})


	$('.text-son2 .no1').on('click',function(){
		$('.text-son3').slideDown();
		this.style.backgroundColor = 'red';
	})


	$('.text-son3 .no1').on('click',function(){
		$('.son3-1').slideDown();
		this.style.backgroundColor = 'red';
	})
	$('.text-son3 .no2').on('click',function(){
		$('.son3-2').slideDown();
		this.style.backgroundColor = 'blue';
	})
	$('.text-son3 .no3').on('click',function(){
		$('.son3-3').slideDown();
		this.style.backgroundColor = 'green';
	})
})(jQuery);