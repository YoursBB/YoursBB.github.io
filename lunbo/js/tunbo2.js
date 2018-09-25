var prev = document.getElementById("prev");
var next = document.getElementById("next");
var slider = document.getElementById("slider");
var sliderContent = document.getElementById("slider-content");
var imgs = slider.getElementsByTagName('img');
var current = 0;
var sliderPagination =document.getElementById("slider-pagination");
var iems = sliderPagination.getElementsByTagName('i');

var intItems = function (){
	for (var i = 0 ; i < iems.length ; i++){
		iems[i].style.background='orange';
	}
}
for(var a=0;a<iems.length;a++){
	iems[a].index=a;
}
for (var i = 0 ; i < iems.length ; i++){
	iems[i].onclick=function (){
	intItems();
	this.style.background='white';
	sliderContent.style.marginLeft = -800 * this.index + 'px';
	}
}

function nextPic() {
	current++;
	if(current > imgs.length - 1) {
		current = 0;
	}
	intItems();
	iems[current].style.background='white';
	sliderContent.style.marginLeft = -800 * current + 'px';
}


function prevPic() {
	current--;
	if(current < 0) {
		current = imgs.length - 1;
	}
	intItems();
	iems[current].style.background='white';
	sliderContent.style.marginLeft = -800 * current + 'px';
}
next.onclick = function() {
	nextPic();
}
prev.onclick = function() {
	prevPic();
}
