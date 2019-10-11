top1F();
top1S();
top1T();
top1L();
top2();


function top1F(){
	var oLi = document.querySelector('.top1-l .ul1 li #li1')
	var oBox = document.querySelector('.top1-l .ul1 li .top1-1')
	var aLi = oBox.querySelectorAll('.top1-l .ul1 li .top1-1 ul li')
	oLi.onmouseenter = function(){
		oBox.style.display = 'block'
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.backgroundColor = '#242424'
			}
			this.style.backgroundColor = '#000'
		}
		aLi[i].onmouseleave = function(){
			this.style.backgroundColor = '#242424'
		}
	}
	oBox.onmouseenter = function(){
		oBox.style.display = 'block'

	}
	oLi.onmouseleave = function(){
		oBox.style.display = 'none'
	}
	oBox.onmouseleave = function(){
		oBox.style.display = 'none'
	}
}
function top1S(){
	var aLi = document.querySelectorAll('.top1-l .ul1 li .top1-2 a')
	var oLi = document.querySelector('.top1-l .ul1 #li2')
	var oBox =  document.querySelector('.top1-l .ul1 li .top1-2')
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.color = '#fff';
			}
			this.style.color = '#1187ff';
		}
		aLi[i].onmouseleave = function(){
			this.style.color = '#fff';
		}
	}
	oLi.onmouseenter = function(){
		oBox.style.display = 'block'
	}
	oBox.onmouseenter = function(){
		oBox.style.display = 'block'
	}
	oLi.onmouseleave = function(){
		oBox.style.display = 'none'
	}
	oBox.onmouseleave = function(){
		oBox.style.display = 'none'
	}
}
function top1T(){
	var oLi = document.querySelector('.top1 .top1-l .ul1 li #li3')
	var oBox = document.querySelector('.top1-l .ul1 li .top1-3')
	var aLi = oBox.querySelectorAll('.top1-l .ul1 li .top1-3 ul li')
	oLi.onmouseenter = function(){
		oBox.style.display = 'block'
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.backgroundColor = '#242424'
			}
			this.style.backgroundColor = '#000'
		}
		aLi[i].onmouseleave = function(){
			this.style.backgroundColor = '#242424'
		}
	}
	oBox.onmouseenter = function(){
		oBox.style.display = 'block'

	}
	oLi.onmouseleave = function(){
		oBox.style.display = 'none'
	}
	oBox.onmouseleave = function(){
		oBox.style.display = 'none'
	}
}
function top1L(){
	var oLi = document.querySelector('.top1 .top1-r .top1-s2')
	var oBox = document.querySelector('.top1 .top1-r .top1-7')
	var aLi = oBox.querySelectorAll('.top1 .top1-r .top1-7 ul li')
	oLi.onmouseenter = function(){
		oBox.style.display = 'block'
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].onmouseenter = function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.backgroundColor = '#242424'
			}
			this.style.backgroundColor = '#000'
		}
		aLi[i].onmouseleave = function(){
			this.style.backgroundColor = '#242424'
		}
	}
	oBox.onmouseenter = function(){
		oBox.style.display = 'block'

	}
	oLi.onmouseleave = function(){
		oBox.style.display = 'none'
	}
	oBox.onmouseleave = function(){
		oBox.style.display = 'none'
	}
}
function top2(){
	var oBox = document.querySelector('.top2 .top2-d')
	var aBli = oBox.querySelectorAll('.top2 .top2-d li')
	console.log(aBli)
	var aLi = document.querySelectorAll('.top2 .top2-ul li')
	for(var i=0;i<aLi.length;i++){
		aLi[0].style.width = '25px';
		aLi[0].style.backgroundColor = 'rgba(255,255,255,0.8)';
		aLi[i].index = i;
		aLi[i].onclick = function(){
			for(var j=0;j<aLi.length;j++){
				aLi[j].style.width = '15px';
				aLi[j].style.backgroundColor = 'rgba(255,255,255,0.2)';
			}
			this.style.width = '25px';
			this.style.backgroundColor = 'rgba(255,255,255,0.8)';
			switch(this.index){
				case 0:
					oBox.style.left = '0px';
					break
				case 1:
					oBox.style.left = '-100%';
					break
				case 2:
					oBox.style.left = '-200%';
					break
			}
		}
	}
}