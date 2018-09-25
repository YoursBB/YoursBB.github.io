			var next = document.getElementById("next");
			var prev = document.getElementById("prev");
			var slider = document.getElementById("slider");
			var imgs = slider.getElementsByTagName('img');
			var current = 0;

			var intImgs = function() {
				for(var i = 0; i < imgs.length; i++) {
					imgs[i].style.opacity = '0';
				}
			}
			var nextPic = function() {
				current++;
				if(current > imgs.length - 1) {
					current = 0;
				}
				intImgs();
				imgs[current].style.opacity = '1';
			}
			var prevPic = function() {
				current--;
				if(current < 0) {
					current = imgs.length - 1;
				}
				intImgs();
				imgs[current].style.opacity = '1';
			}

			next.onclick = function() {
				nextPic();
			}

			prev.onclick = function() {
				prevPic();
			}