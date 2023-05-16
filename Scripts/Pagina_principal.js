const reaudacion_base=64549;
const patrocinadores_base=68;
const advertencia="Esta pagina utiliza cookies, ¿quieres galletas?";

const fecha_max = new Date(2023, 5, 5);	// el mes empieza en 0, entonces enero es 0 y diciembre 11. 5 es junio
const fecha_actual = new Date();

/*  */
var patrocinadores = document.getElementById("patrocinadores");
var recaudacion = document.getElementById("recaudacion");
var dias_restantes = document.getElementById("dias restantes");
var dinero = document.cookie;

if (dinero == 0){

	alert(advertencia);
	document.cookie = "dinero=1; expires="+fecha_max+";"
	dinero = document.cookie;
	}

if (parseInt(document.cookie.split('=')[1]) > 1){
	patrocinadores.textContent = (patrocinadores_base + 1);
}else{
	patrocinadores.textContent = (patrocinadores_base);
}

recaudacion.textContent = (reaudacion_base + parseInt(dinero.split('=')[1])) + " €";


/* Cambio de la fecha */

var quedan = fecha_max - fecha_actual;						// resultado en milisegundos
quedan = quedan / (1000 * 60 * 60 * 24);					// quedan / 1000 es el resultado en segundos, despues /60 para minutos, /60 para horas 
															// y /24 porque el dia tiene 24h, así tenemos el resultado en segundos
dias_restantes.textContent = Math.ceil(quedan) + " dias"; 	// redondeamos hacia abajo



