
$(document).ready(function(){
	
	$(".list-group-item").click(function(){ // Esta funcion no es del tipo arrow
	
		const nombre = $(this).attr("val");
		data.nombre = nombre;
		
		$("body").addClass("modalLoading");
		
		$.post("/getData", {nombre})
			.then(x => {
				data.hora = x.hora;
				data.temperatura = x.temperatura;
				$("body").removeClass("modalLoading");
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