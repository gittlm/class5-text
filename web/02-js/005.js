	function tobig(){
		document.getElementById('box1').style.width='200px';
		document.getElementById('box1').style.height='200px';
		document.getElementById('box1').style.background='green';
		document.getElementById('box1').style.borderRadius='50%';
	}
	function tosml(){
		document.getElementById('box2').style.width='100px';
		document.getElementById('box2').style.height='100px';
		document.getElementById('box2').style.background='green';
		document.getElementById('box2').style.borderRadius='50%';
	}
	var obox1 = document.getElementById('box1')
	obox1.onmouseover=function(){
		tobig()
	}
	var obox2 = document.getElementById('box2')
	obox2.onmouseover=function(){
		tosml()
	}