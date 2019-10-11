function toBOOM(){
	var obox1 = document.getElementById('box1')
	obox1.style.width='200px';
	obox1.style.height='200px';
	obox1.style.backgroundColor='blue';
}
function tohome(){
	var obox1 = document.getElementById('box1')
	obox1.style.width='100px';
	obox1.style.height='100px';
	obox1.style.backgroundColor='red';
}
function toall(){
	var obox1 = document.getElementById('box1')
	obox1.style.width='300px';
	obox1.style.height='300px';
	obox1.style.backgroundColor='green';
}
var obox1 = document.getElementById('box1')
obox1.onmouseover=toBOOM;
obox1.onmouseout=tohome;
obox1.onclick=toall;