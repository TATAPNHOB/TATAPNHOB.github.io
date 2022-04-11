function slideChangeRight(sliderid) {
	var current = document.getElementById(sliderid);
	var imgs = current.getElementsByClassName('slider-image');
	var buttons = current.getElementsByClassName('slider-button');
	if (!buttons[1].classList.contains('slider-button-inactive')) {
		for (var i=0;i<imgs.length;i++) {
			if (imgs[i].classList.contains('slider-image-active')) {
				imgs[i].classList.remove('slider-image-active');
				imgs[i].classList.add('slider-image-inactive');
				if (i == imgs.length - 1) {
				imgs[0].classList.remove('slider-image-inactive');
				imgs[0].classList.add('slider-image-active');
				}
				else {
				imgs[i+1].classList.remove('slider-image-inactive');
				imgs[i+1].classList.add('slider-image-active');
				}
				break;
			}
		}
	}
}
function slideChangeLeft(sliderid) {
	var current = document.getElementById(sliderid);
	var imgs = current.getElementsByClassName('slider-image');
	var buttons = current.getElementsByClassName('slider-button');
	if (!buttons[0].classList.contains('slider-button-inactive')) {
		for (var i=0;i<imgs.length;i++) {
			if (imgs[i].classList.contains('slider-image-active')) {
				imgs[i].classList.remove('slider-image-active');
				imgs[i].classList.add('slider-image-inactive');
				if (i == 0) {
					imgs[imgs.length-1].classList.remove('slider-image-inactive');
					imgs[imgs.length-1].classList.add('slider-image-active');
				}
				else {
					imgs[i-1].classList.remove('slider-image-inactive');
					imgs[i-1].classList.add('slider-image-active');
				}
				break;
			}
		}
	}
}