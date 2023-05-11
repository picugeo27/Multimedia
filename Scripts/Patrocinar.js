var pagado = 0;

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', (e) =>{
	pagado = 100000 + parseInt(document.cookie.split('=')[1]);
	document.cookie = "dinero=" + pagado + ";";
	console.log(document.cookie);
	recaudacion.textContent = (reaudacion_base + parseInt(document.cookie.split('=')[1]));

})