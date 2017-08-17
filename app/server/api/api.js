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

const setError = function(client, errorMsg){
	client
		.hmsetAsync("api.errors", "error", errorMsg)
		.then(d => console.log("Error escrito con exito: " + errorMsg))
		.catch(e => console.log("Falla al escribir el error: " + errorMsg));
};

const agregarCiudades = function(client){
	
	ciudades.map(ciudad => {
		client
			.hmsetAsync(ciudad.nombre, "lat", ciudad.lat, "lon", ciudad.lon)
			.then(d => {
				console.log(d);
			})
			.catch(e => {
				console.log(e);
				return;
			});
	});
};

module.exports = {
	getData,
	setError
};