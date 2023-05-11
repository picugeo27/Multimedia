var cookie = document.cookie;
var pagado = 0;

var btn1 = document.getElementById('btn1');
btn1.addEventListener('click', (e) =>{
	pagado = 100000 + parseInt(cookie.split('=')[1]);
	cookie = "dinero=" + pagado + ";";
	console.log(cookie);
})