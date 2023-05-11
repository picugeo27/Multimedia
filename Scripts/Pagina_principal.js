const reaudacion_base=64549;
const patrocinadores_base=68;
const advertencia="Esta pagina utiliza cookies, si no está de acuerdo con ello por favor vayase a la mierda";
const fecha_max = new Date(2023, 5, 5);	// el mes empieza en 0, entonces enero es 0 y diciembre 11. 5 es junio
const fecha_actual = new Date();

var patrocinadores = document.getElementById("patrocinadores");
var recaudacion = document.getElementById("recaudacion");
var dias_restantes = document.getElementById("dias restantes");
var dinero = document.cookie;

if (dinero == 0){

	alert(advertencia);
	document.cookie = "dinero=1"
	dinero = document.cookie;
	}

if (dinero>1){
	patrocinadores.textContent = (patrocinadores_base + 1);
}	else{
	patrocinadores.textContent = (patrocinadores_base);
}

recaudacion.textContent = (reaudacion_base + parseInt(dinero.split('=')[1]));

var quedan = fecha_max - fecha_actual;		// resultado en milisegundos
quedan = quedan / (1000 * 60 * 60 * 24);	// quedan / 1000 es el resultado en segundos, despues /60 para minutos, /60 para horas 
											// y /24 porque el dia tiene 24h, así tenemos el resultado en segundos
dias_restantes.textContent = Math.floor(quedan) + " dias"; // redondeamos hacia abajo

var cookie = document.cookie;
var pagado = 0;

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', (e) =>{
	pagado = 100000 + parseInt(cookie.split('=')[1]);
	cookie = "dinero=" + pagado + ";";
	console.log(cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(dinero.split('=')[1]));

})
