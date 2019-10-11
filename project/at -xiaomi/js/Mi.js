var aImg = document.querySelectorAll('.use-nav span img');
var aBtns = document.querySelectorAll('.carousel-btns li');
var oCarousel = document.querySelector('.use-nav')
	var now = 0;//默认显示的下标
	var timer = 0;
	function tab(){
		for(var i=0;i<aImg.length;i++){
			aImg[i].style.zIndex = '0';
			aImg[i].style.opacity = '0';
			aBtns[i].className = '';
		}
		aImg[now].style.zIndex = '99';
		aImg[now].style.opacity = '1';
		aBtns[now].className = 'active';
	}
	var oRightBtn = 0
	var oLeftBtn = 0
	oRightBtn.onclick = function(){
		now++;
		if(now>=aImg.length){
			now=0;
		}
		tab();
	}
	oLeftBtn.onclick = function(){
		now--;
		if(now < 0){
			now = aImg.length -1;
		}
		tab();
	}
	for(var i=0;i<aBtns.length;i++){
		aBtns[i].index = i;//存i值
		aBtns[i].onclick = function(){
			now = this.index;
			tab();
		}
	}
	timer = setInterval(oRightBtn.onclick,5000)
	oCarousel.onmouseover = function(){
		clearInterval(timer)
	}
	oCarousel.onmouseout = function(){
		timer = setInterval(oRightBtn.onclick,5000)
	}
	
	