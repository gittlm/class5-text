;(function(win,doc){
	var oRoot = doc.getElementsByTagName('html')[0]
	console.log(oRoot)
	console.log(oRoot)
	function refresh(){
		var width=doc.body.clientWidth || doc.documentElement.clientWidth;
		var oFontSize = width/10;
		oRoot.style.fontSize = oFontSize + 'px';
	}
	win.addEventListener('DOMContentLoaded',refresh,false)
	win.addEventListener('load',refresh,false)
	win.addEventListener('resize',refresh,false)
})(window,document);