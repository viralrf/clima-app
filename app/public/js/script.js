
$(document).ready(function(){
	
	$(".list-group-item").click(function(){ // Funcion normal, necesito el "this"
	
		const nombre = $(this).attr("val");
		data.nombre = nombre;
		
		$("body").addClass("modalLoading");
		
		$.post("/getData", {nombre})
			.then(x => {
				data.hora = x.hora;
				data.temperatura = x.temperatura;
				$("body").removeClass("modalLoading");
			})
			.catch(e => {
				console.log("Error al recibir datos");
			});
	});
		
	const data = mobx.observable({
		nombre: '',
		hora: '',
		temperatura: ''
	});

	mobx.autorun(function () {
		$("#pCiudad").text(data.nombre);
		$("#pHora").text(data.hora);
		$("#pTemperatura").text(data.temperatura);
	});
});
