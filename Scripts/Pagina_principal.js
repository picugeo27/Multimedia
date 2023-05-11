const reaudacion_base=64550;
const patrocinadores_base=68;
const advertencia="Esta pagina utiliza cookies, si no está de acuerdo con ello por favor vayase a la mierda"

var patrocinadores = document.getElementById("patrocinadores");
var recaudacion = document.getElementById("recaudaciones");

document.cookie = "miCookie=valorDeMiCookie";
console.log(document.cookie;

var dinero = document.cookie;
console.log(document.cookie);

if (dinero == null || dinero == undefined){
	alert(advertencia);
	document.cookie = "dinero=0; expires=2023-06-01"
}
