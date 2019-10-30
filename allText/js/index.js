;(function($){
	$('.father').on('click',function(){
		$('.content .son1-ul').slideDown();
		this.style.backgroundColor = 'gray'
	})

/*大纲分类*/
	const $jq = $('.JQuery')
	const $ht = $('.HTML')
	const $css = $('.CSS')
	const $git = $('.GIT')
	const $js = $('.JS')
	const $bs = $('.BootStrap')
	const $es = $('.ES678')
	const $wl = $('.WLine')
	const $no = $('.NodeJs')
	const $db = $('.MongoDB')


	function son1($elem,name){
		$elem.on('click',function(){
			$('.son1-btn').css('background','#ccc')
			$('.text-son2').css('borderTop','1px solid #ccc')
			$('.text-son2').hide();
			$('.text-son2-'+name+'').slideDown();
			$elem.css('background','gray')
		})
	}


	son1($jq,'jquery')
	son1($ht,'html')
	son1($css,'css')
	son1($git,'git')
	son1($js,'js')
	son1($bs,'bootstrap')
	son1($es,'es678')
	son1($wl,'wline')
	son1($no,'nodejs')
	son1($db,'mongodb')


/*要点分类*/
	$('.son2-jquery .no1').on('click',function(){
		$('.text-son2-jquery .son2-btn').removeClass('active')
		$('.text-son3').hide();
		$('.text-son3-1-jquery').slideDown();
		$('.son2-jquery .no1').addClass('active');
	})
	$('.son2-jquery .no2').on('click',function(){
		$('.text-son2-jquery .son2-btn').removeClass('active')
		$('.text-son3').hide();
		$('.text-son3-2-jquery').slideDown();
		$('.son2-jquery .no2').addClass('active');
	})

/*详细分类*/
	$('.text-son3-1-jquery .no1').on('click',function(){
		$('.text-son4').css('borderTop','1px solid #ccc');
		$('.son4').hide();
		$('.son4-1').slideDown();
		this.style.backgroundColor = 'gray';
	})
	$('.text-son3-1-jquery .no2').on('click',function(){
		$('.text-son4').css('borderTop','1px solid #ccc');
		$('.son4').hide();
		$('.son4-2').slideDown();
		this.style.backgroundColor = 'gray';
	})
	$('.text-son3-1-jquery .no3').on('click',function(){
		$('.text-son4').css('borderTop','1px solid #ccc');
		$('.son4').hide();
		$('.son4-3').slideDown();
		this.style.backgroundColor = 'gray';
	})
})(jQuery);