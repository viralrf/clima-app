const DarkSky = require('dark-sky');
const darksky = new DarkSky('7d8962171db99bc543ecb76851842296');

const getData = function(lat, lon){
	
	return darksky
		.latitude(lat)
		.longitude(lon)
		.exclude('minutely,hourly,daily,alerts,flags')
		.language('es')
		.units('ca')
		.get()
};

const setError = function(){
	
};

module.exports = {
	getData,
	setError
};