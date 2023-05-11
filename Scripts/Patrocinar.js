var pagado = 0;
const fecha_max = new Date(2023, 5, 5);

var btn1 = document.getElementById('btn1');
btn.addEventListener('click', (e) =>{
	pagado = 50 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})

/* Comentario uwu*/

var btn2 = document.getElementById('btn2');
btn.addEventListener('click', (e) =>{
	pagado = 150 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})