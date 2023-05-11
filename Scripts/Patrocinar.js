var pagado = 0;
const fecha_max = new Date(2023, 5, 5);

var btn = document.getElementById('btn');
btn.addEventListener('click', (e) =>{
	pagado = 100000 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + "; expires:" + fecha_max + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})