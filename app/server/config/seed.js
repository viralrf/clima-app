
const ciudades = [
	{
		nombre: "Santiago",
		lat: "-33.4488897",
		lon: "-70.6692655"
	},{
		nombre: "Zurich",
		lat: "47.3768866",
		lon: "8.541694000000007"
	},{
		nombre: "Auckland",
		lat: "-36.8484597",
		lon: "174.76333150000005"
	},{
		nombre: "Sydney",
		lat: "-33.8688197",
		lon: "151.20929550000005"
	},{
		nombre: "Londres",
		lat: "51.5073509",
		lon: "-0.12775829999998223"
	},{
		nombre: "Georgia",
		lat: "32.1656221",
		lon: "-82.90007509999998"
	}
];

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

module.exports = agregarCiudades;