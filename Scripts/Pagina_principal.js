const reaudacion_base=64549;
const patrocinadores_base=68;
const advertencia="Esta pagina utiliza cookies, si no está de acuerdo con ello por favor vayase a la mierda"

var patrocinadores = document.getElementById("patrocinadores");
var recaudacion = document.getElementById("recaudacion");

var dinero = document.cookie;
console.log(document.cookie);

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

console.log(recaudacion.textContent);
recaudacion.textContent = (reaudacion_base+parseInt(dinero.split('=')[1]));
