handleCarousel();
handleTopFix();
handleCart();
handleNavContent();
// tvfix();
handleClick();





//购物车交互功能
function handleCart(){
	//1.获取元素
	var oCart = document.querySelector('.top .cart');
	var oCartBox = document.querySelector('.top .cart .cart-box a');
	var oCartContent = document.querySelector('.top .cart .cart-content');
	var oLoader = oCartContent.querySelector('.loader');
	var oSpan = oCartContent.querySelector('span');
	//2.绑定事件
	oCart.onmouseenter = function(){
		oLoader.style.display = 'block';
		oCartBox.style.backgroundColor = '#fff';
		oCartBox.style.color = '#ff6700';
		// oCartContent.style.height = '100px';

		animation(oCartContent,{height:100},true,function(){
			oLoader.style.display = 'none';
			oSpan.style.display = 'block';
		});

		
	}
	oCart.onmouseleave = function(){
		oCartBox.style.backgroundColor = '#424242';
		oCartBox.style.color = '#b0b0b0';
		// oCartContent.style.height = '100px';
		animation(oCartContent,{height:0},true,function(){
			oSpan.style.display = 'none';
			oLoader.style.display = 'none';
		});
		
	}
}
//下拉菜单交互功能
function handleNavContent(){
	//1.获取元素
	var aNavtiem = document.querySelectorAll('.header .header-nav-item');
	var oNavContent = document.querySelector('.header .header-nav-content');
	var oNavContentBox = oNavContent.querySelector('.container')
	var hideTimer = 0,loadTimer = 0;
	for(var i=0;i<aNavtiem.length-2;i++){
		aNavtiem[i].index = i;
		aNavtiem[i].onmouseenter = function(){
			oNavContentBox.innerHTML = '<div class="loader"></div>'
			clearTimeout(hideTimer);
			oNavContent.style.border = '1px solid #ccc';
			animation(oNavContent,{height:200});
			var index = this.index;
			//加载数据
			clearTimeout(loadTimer)
			loadTimer = setTimeout(function(){
				loadData(index);
			},1000)
			
		}
		aNavtiem[i].onmouseleave = function(){
			handleHide();
			
		}
	}
	oNavContent.onmouseenter = function(){
		clearTimeout(hideTimer);
	}
	oNavContent.onmouseleave = function(){
		handleHide();
	}
	function handleHide(){
		hideTimer =setTimeout(function(){
			animation(oNavContent,{height:0},true,function(){
				oNavContent.style.borderTop = '';
			})
		},500)
	}
	function loadData(index){
		console.log(index)
		var data = aNavContentData[index];
		var html = '<ul>';
		for(var i=0;i<data.length;i++){
			html +=' <li>';
			html +='	<div class="img-box">';
			html +='		<a href="'+data[i].url+'"><img src="'+data[i].img+'" alt=""></a>';
			html +='	</div>';
			html +='	<p class="product-name">'+data[i].name+'</p>';
			html +='	<p class="product-price">'+data[i].price+'元起</p>';
			html +='</li>';
		}

		html += '</ul>';
		oNavContentBox.innerHTML = html;
	}
}
//顶部固定

function handleTopFix(){
	window.onload = function(){
	var oBody = document.querySelector('body');
	// console.log(getScrollTop())
	// animate2(oBody,'scrollTop',93,true)


	}
	var oCar = document.getElementById('carousel');
	var issShow = false;
	var oNav = document.getElementById('intro-intro');
	// console.log(oNav)
	var isShow = false;
	window.onscroll = function(){
		if(getScrollTop() >= 200){
			// console.log(getScrollTop())
			if(!isShow){
				oNav.style.zIndex = "100";
				oNav.style.top ="0px";
				oNav.style.position = "fixed";
				oNav.style.backgroundColor = "#ffffff";
				oNav.style.width = "100%";
				oNav.style.height = "0px";
				oNav.style.width = oNav.offsetWidth;
				oNav.style.height = oNav.offsetHeight;
				animate2(oNav,'height',63,true);
				oCar.style.position = "fixed";
				oCar.style.top ="0px";
				animate2(oCar,'top',64,true);
				isShow = true;
				// oNav.style.left = "100px";
				
			}
			if(getScrollTop() >= 1150){
				oCar.style.position = "relative";
				oCar.style.top ="1150px";
			}else{
				oCar.style.position = "fixed";
				oCar.style.top ="0px";
			}
		}else{
			if(isShow){
				// console.log('bbb')
				oNav.style.position = "relative";
				oCar.style.position = "relative";
				// oCar.style.top ="0px";
				// animate2(oNav,'height',0,true);
				isShow = false;
			}
		}

	}
}
// 点击事件
 function handleClick(){
 	var aXiu = document.querySelectorAll('.home-xiu-box-item');
 	var aXiuA = document.querySelectorAll('.home-xiu-box-item a');
 	var aZhuang = document.querySelectorAll('.home-zhuang-box-item');
 	var aVip = document.querySelectorAll('.home-vip-box-item');
 	var aYuan= document.querySelectorAll('.xiu-yuan');
 	var zYuan= document.querySelectorAll('.zhuang-yuan');
 	var aFang= document.querySelectorAll('.xiu-fang');
 	var oYuan = document.querySelectorAll('.vip-yuan');
 	var aZhibao = document.querySelectorAll('.zhibao');
 	var aZhibao2 = document.querySelectorAll('.home-zhuang-right .zhibao');
 	var aZhibao3 = document.querySelectorAll('.home-vip-right .zhibao');
 /*
 	console.log(aYuan)
 	console.log(aFang)
 	console.log(oYuan)
 */
 	var isAndy = true
 	for(var i=0;i<aXiuA.length;i++){
	 	aXiuA[i].index = i
	 	aXiuA[i].onclick = function(){
	 		if(isAndy) {
	 			for (var j = 0; j < aXiuA.length; j++) {
					aXiu[j].className = 'home-xiu-box-item'
		 			aXiu[j].style.zIndex = 1
					aYuan[j].innerHTML = '<em class = "iconfont"></em>';
					aYuan[j].className = 'yuan xiu-yuan';
					aFang[j].innerHTML = '<em class = "iconfont"></em>';
					aFang[j].className = 'fang xiu-fang';
					aZhibao[j].style.color = '#000';
	 			}
				aXiu[this.index].className = 'home-xiu-box-item home-active'
	 			aXiu[this.index].style.zIndex = 2
				aYuan[this.index].className = 'yuan xiu-yuan';
				aYuan[this.index].innerHTML = '<em class = "iconfont">√</em>';
				aYuan[this.index].className = 'yuan xiu-yuan active-yuan';
				aFang[this.index].className = 'fang xiu-fang';
				aFang[this.index].innerHTML = '<em class = "iconfont">√</em>';
				aFang[this.index].className = 'fang xiu-fang active-yuan';
				aZhibao[this.index].style.color = '#ff6700';
	 			isAndy = false
	 		}else{
				aXiu[this.index].className = 'home-xiu-box-item'
	 			aXiu[this.index].style.zIndex = 1
				aYuan[this.index].innerHTML = '<em class = "iconfont"></em>';
				aYuan[this.index].className = 'yuan xiu-yuan';
				aFang[this.index].innerHTML = '<em class = "iconfont"></em>';
				aFang[this.index].className = 'fang xiu-fang';
				aZhibao[this.index].style.color = '#000';
		 		isAndy = true
 			}
 		}
 	}
 	for(var h=0;h<aZhuang.length;h++){
 		aZhuang[h].index = h
 		aZhuang[h].onclick = function(){
 			for (var l = 0; l < aZhuang.length; l++) {
				aZhuang[l].className = 'home-zhuang-box-item'
	 			aZhuang[l].style.zIndex = 1
				zYuan[l].innerHTML = '<em class = "iconfont"></em>';
				zYuan[l].className = 'yuan zhuang-yuan';
				aZhibao2[l].style.color = '#000';
 			}
			aZhuang[this.index].className = 'home-zhuang-box-item home-active'
 			aZhuang[this.index].style.zIndex = 2
			zYuan[this.index].className = 'yuan zhuang-yuan';
			zYuan[this.index].innerHTML = '<em class = "iconfont">√</em>';
			zYuan[this.index].className = 'yuan zhuang-yuan active-yuan';
			aZhibao2[this.index].style.color = '#ff6700';
 		}
 	}
 	for(var k=0;k<aVip.length;k++){
 		aVip[k].index = k
 		aVip[k].onclick = function(){
 			for (var m = 0; m < aVip.length; m++) {
				aVip[m].className = 'home-vip-box-item'
	 			aVip[m].style.zIndex = 1
				oYuan[m].innerHTML = '<em class = "iconfont"></em>';
				oYuan[m].className = 'yuan vip-yuan';
				aZhibao3[m].style.color = '#000';
 			}
 			console.log('aaa')
			aVip[this.index].className = 'home-vip-box-item home-active'
 			aVip[this.index].style.zIndex = 2
			oYuan[this.index].className = 'yuan vip-yuan';
			oYuan[this.index].innerHTML = '<em class = "iconfont">√</em>';
			oYuan[this.index].className = 'yuan vip-yuan active-yuan';
			aZhibao3[this.index].style.color = '#ff6700';
 		}
 	}
 }
	
	











//实现轮播图
function handleCarousel(){
	new Carousel({
		id:'carousel',
		aImg:['https://i8.mifile.cn/a1/pms_1567935169.62181956.jpg','https://i8.mifile.cn/a1/pms_1567935171.32086880.jpg','https://i8.mifile.cn/a1/pms_1567935173.10444115.jpg','https://i8.mifile.cn/a1/pms_1567935174.64561506.jpg'],
		width:552,
		height:552,
		autoPlayTime:4000
	})
}



























