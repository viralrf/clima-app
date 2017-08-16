
$(document).ready(function(){
	
	$(".list-group-item").click(function(){
		
		$.get("/getData")
			.then(x => {
				city.hora = x.hora;
			});
		
	});
		
	const city = mobx.observable({
		nombre: '',
		hora: '',
		temperatura: ''
	});

	mobx.autorun(function city_nombre () {
		$("#pCiudad").text(city.nombre);
		$("#pHora").text(city.hora);
		$("#pTemperatura").text(city.temperatura);
	});
	
	
});