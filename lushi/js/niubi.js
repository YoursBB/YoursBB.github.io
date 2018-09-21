var box=document.querySelector('section .button .middle');
var boxY=box.offsetTop;
document.body.onscroll=function(){
	if(window.pageYOffset > boxY) {
					box.style.position = 'fixed';
				} else {
					box.style.position = 'absolute';
				}
}
