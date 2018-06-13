	//	<img src="http://truck.vbrqx.com/img/trucks/truck_model_002_blue_left.svg" alt="truck">

var imgSelector = document.querySelector('.img_link');
var hostName = window.location.protocol + '//' + window.location.hostname; //current host

//if port is defined
var port = window.location.port;
if(port)
	hostName += ':' + port;

console.log('Current Domain',hostName);

var imgLink = imgSelector.src; // img string http://truck.vbrqx.com/img/trucks/truck_model_002_blue_left.svg

 var staticDomain = imgLink.split('.com/')[0]+'.com';

 console.log('Static Domain',staticDomain);

//if it's not the same domain
if(hostName !== staticDomain) {
	result = imgLink.replace(staticDomain, hostName);
	imgSelector.src = result;
	console.log(result);
}

 
