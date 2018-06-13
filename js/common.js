// brightness
const brightness = document.querySelectorAll('.img_link');
brightness.forEach((curent) => {
	curent.addEventListener('mouseenter', removeFilter);
});
brightness.forEach((curent) => {
	curent.addEventListener('mouseleave', addFilter);
});

function removeFilter() {
	this.classList.remove('brightness');
}
function addFilter() {
	this.classList.add('brightness');
}

// cloud
document.querySelector('.cloud_flag').addEventListener('mouseover', showLayer);
let cloud_language = document.querySelector('.cloud_language');
function showLayer() {
		 cloud_language.style.opacity = 1;
		 cloud_language.style.visibility = 'visible';
		 cloud_language.style.transition = '2s';
}
cloud_language.addEventListener('click', hideLayer);
function hideLayer(e) {
	if(e.target.className === 'cloud_language') {
		 cloud_language.style.opacity = 0;
		 cloud_language.style.visibility = 'hidden';
		 cloud_language.style.transition = '1s';
	}
}

// select all flag
const cloud = document.querySelectorAll('.cloud');
cloud.forEach((flag) => {
	flag.addEventListener('mouseenter', showLightFlag);
});
function showLightFlag() {
	this.classList.remove('brightness');
	this.classList.add('flag_brightness');
}
cloud.forEach((flag) => {
	flag.addEventListener('mouseleave', showDarkFlag);
});
function showDarkFlag() {
	this.classList.add('brightness');
	this.classList.remove('flag_brightness');
}

// social section
document.getElementById('facebook_icon').addEventListener('mouseover', function(e) {
	e.preventDefault();
	document.querySelector('.facebook').style.display = 'block';
	document.querySelector('.linkedin').style.display = 'none';
	document.querySelector('.twitter').style.display = 'none';
	document.getElementById('social_close').style.display = 'block';
});
document.getElementById('linkedin_icon').addEventListener('mouseover', function(e) {
	e.preventDefault();
	document.querySelector('.linkedin').style.display = 'block';
	document.querySelector('.facebook').style.display = 'none';
	document.querySelector('.twitter').style.display = 'none';
	document.getElementById('social_close').style.display = 'block';
});
document.getElementById('twitter_icon').addEventListener('mouseover', function(e) {
	e.preventDefault();
	document.querySelector('.linkedin').style.display = 'none';
	document.querySelector('.facebook').style.display = 'none';
	document.querySelector('.twitter').style.display = 'block';
	document.getElementById('social_close').style.display = 'block';
});
document.getElementById('social_close').addEventListener('mouseover', function(e) {
	e.preventDefault();
	document.querySelector('.linkedin').style.display = 'none';
	document.querySelector('.facebook').style.display = 'none';
	document.querySelector('.twitter').style.display = 'none';
	this.style.display = 'none';
});