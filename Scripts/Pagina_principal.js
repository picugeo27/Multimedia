const reaudacion_base=64550;
const patrocinadores_base=68;
const advertencia="Esta pagina utiliza cookies, si no está de acuerdo con ello por favor vayase a la mierda"

var patrocinadores = document.getElementById("patrocinadores");
var recaudacion = document.getElementById("recaudaciones");

var dinero = document.cookie;
console.log(document.cookie);

if (dinero !< 0){
	if (dinero >0){

	} else {
	alert(advertencia);
	document.cookie = "dinero=0"
	}
}
