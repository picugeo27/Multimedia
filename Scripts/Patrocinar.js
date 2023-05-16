var pagado = 0;
const fecha_max = new Date(2023, 5, 5);

var btn = document.getElementById('boton_patrocinar1');
btn.addEventListener('click', (e) =>{
	pagado = 10 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})
var btn = document.getElementById('boton_patrocinar2');
btn.addEventListener('click', (e) =>{
	pagado = 10 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})
var btn = document.getElementById('boton_patrocinar3');
btn.addEventListener('click', (e) =>{
	pagado = 10 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})
var btn = document.getElementById('boton_patrocinar4');
btn.addEventListener('click', (e) =>{
	pagado = 10 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})