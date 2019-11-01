;(function($){
	$('.father').on('click',function(){
		$('.content .son1-ul').slideDown();
		this.style.backgroundColor = 'gray'
	})

/*大纲分类*/
	function son(){
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
				$('.text-son3').hide();
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
	}
	son();
	
/*要点分类*/
	function son2(){
		const $elem21 = $('.son2-jquery .no1')
		const $elem22 = $('.son2-jquery .no2')
		const $elem23 = $('.son2-jquery .no3')
		const $elem24 = $('.son2-jquery .no4')
		const $elem25 = $('.son2-jquery .no5')
		const $elem26 = $('.son2-jquery .no6')
		const $elem27 = $('.son2-jquery .no7')
		const $elem28 = $('.son2-jquery .no8')
		const $elem29 = $('.son2-jquery .no9')
		function son21($elem,num){
			$elem.on('click',function(){
				$('.text-son2-jquery .son2-btn').css('background','#ccc')
				$('.text-son2-jquery').css('borderTop','1px solid #ccc')
				$('.text-son3').hide();
				$('.text-son3-'+num+'-jquery').slideDown();
				$elem.css('background','gray')
			})
		}
		son21($elem21,'1');
		son21($elem22,'2');
		son21($elem23,'3');
		son21($elem24,'4');
		son21($elem25,'5');
		son21($elem26,'6');
		son21($elem27,'7');
		son21($elem28,'8');
		son21($elem29,'9');
	}
	son2();

/*详细分类*/
	function son31(){
		const $elem311 = $('.text-son3-1-jquery .son3-1-jquery .no1')
		const $elem312 = $('.text-son3-1-jquery .son3-1-jquery .no2')
		const $elem313 = $('.text-son3-1-jquery .son3-1-jquery .no3')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-1-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-1-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem311,'1')
		son3($elem312,'2')
		son3($elem313,'3')
	}
	son31();

	function son32(){
		const $elem321 = $('.text-son3-2-jquery .no1')
		const $elem322 = $('.text-son3-2-jquery .no2')
		const $elem323 = $('.text-son3-2-jquery .no3')
		const $elem324 = $('.text-son3-2-jquery .no4')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-2-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-2-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem321,'1')
		son3($elem322,'2')
		son3($elem323,'3')
		son3($elem324,'4')
	}
	son32();

	function son33(){
		const $elem331 = $('.text-son3-3-jquery .no1')
		const $elem332 = $('.text-son3-3-jquery .no2')
		const $elem333 = $('.text-son3-3-jquery .no3')
		const $elem334 = $('.text-son3-3-jquery .no4')
		const $elem335 = $('.text-son3-3-jquery .no5')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-3-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-3-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem331,'1')
		son3($elem332,'2')
		son3($elem333,'3')
		son3($elem334,'4')
		son3($elem335,'5')
	}
	son33();

	function son34(){
		const $elem341 = $('.text-son3-4-jquery .no1')
		const $elem342 = $('.text-son3-4-jquery .no2')
		const $elem343 = $('.text-son3-4-jquery .no3')
		const $elem344 = $('.text-son3-4-jquery .no4')
		const $elem345 = $('.text-son3-4-jquery .no5')
		const $elem346 = $('.text-son3-4-jquery .no6')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-4-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-4-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem341,'1')
		son3($elem342,'2')
		son3($elem343,'3')
		son3($elem344,'4')
		son3($elem345,'5')
		son3($elem346,'6')
	}
	son34();

	function son35(){
		const $elem351 = $('.text-son3-5-jquery .no1')
		const $elem352 = $('.text-son3-5-jquery .no2')
		const $elem353 = $('.text-son3-5-jquery .no3')
		const $elem354 = $('.text-son3-5-jquery .no4')
		const $elem355 = $('.text-son3-5-jquery .no5')
		const $elem356 = $('.text-son3-5-jquery .no6')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-5-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-5-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem351,'1')
		son3($elem352,'2')
		son3($elem353,'3')
		son3($elem354,'4')
		son3($elem355,'5')
		son3($elem356,'6')
	}
	son35();

	function son36(){
		const $elem361 = $('.text-son3-6-jquery .no1')
		const $elem362 = $('.text-son3-6-jquery .no2')
		const $elem363 = $('.text-son3-6-jquery .no3')
		const $elem364 = $('.text-son3-6-jquery .no4')
		const $elem365 = $('.text-son3-6-jquery .no5')
		const $elem366 = $('.text-son3-6-jquery .no6')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-6-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-6-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem361,'1')
		son3($elem362,'2')
		son3($elem363,'3')
		son3($elem364,'4')
		son3($elem365,'5')
		son3($elem366,'6')
	}
	son36();

	function son37(){
		const $elem371 = $('.text-son3-7-jquery .no1')
		const $elem372 = $('.text-son3-7-jquery .no2')
		const $elem373 = $('.text-son3-7-jquery .no3')
		const $elem374 = $('.text-son3-7-jquery .no4')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-7-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-7-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem371,'1')
		son3($elem372,'2')
		son3($elem373,'3')
		son3($elem374,'4')
	}
	son37();

	function son38(){
		const $elem381 = $('.text-son3-8-jquery .no1')
		const $elem382 = $('.text-son3-8-jquery .no2')
		const $elem383 = $('.text-son3-8-jquery .no3')
		const $elem384 = $('.text-son3-8-jquery .no4')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-8-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-8-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem381,'1')
		son3($elem382,'2')
		son3($elem383,'3')
		son3($elem384,'4')
	}
	son38();

	function son39(){
		const $elem391 = $('.text-son3-9-jquery .no1')
		const $elem392 = $('.text-son3-9-jquery .no2')
		function son3($elem,num){
			$elem.on('click',function(){
				$('.text-son3-9-jquery .son3-btn').css('background','#ccc')
				$('.text-son4').css('borderTop','1px solid #ccc');
				$('.son4').hide();
				$('.son4-9-'+num+'').slideDown();
				$elem.css('background','gray')
			})
		}
		son3($elem391,'1')
		son3($elem392,'2')
	}
	son39();

})(jQuery);