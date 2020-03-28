var factor1, factor2, operacion;

function init(){
	//varialbes
	
	var resultado = document.getElementById("resultado");
	var reset = document.getElementById('reset');
	var suma = document.getElementById('suma');
	var resta = document.getElementById('resta');
	var multiplicacion = document.getElementById('multiplicacion');
	var division = document.getElementById('division');
	var igual = document.getElementById('igual');
	var uno = document.getElementById('1');
	var dos = document.getElementById('2');
	var tres = document.getElementById('3');
	var cuatro = document.getElementById('4');
	var cinco = document.getElementById('5');
	var seis = document.getElementById('6');
	var siete = document.getElementById('7');
	var ocho = document.getElementById('8');
	var nueve = document.getElementById('9');
	var cero = document.getElementById('cero');
	
	//Eventos para botones de numeros
	uno.onclick = function (e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function (e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function (e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function (e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function (e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function (e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function (e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function (e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function (e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function (e){
		resultado.textContent = resultado.textContent + "0";
	}

	// Eventos para boton de reset
	reset.onclick = function(e){
		resetear();
	}
	// Eventos para botones de operaciones 
	suma.onclick = function(e){
		factor1 = resultado.textContent;
		operacion = "+";
		limpiar();
	}
	resta.onclick = function(e){
		factor1 = resultado.textContent;
		operacion = "-";
		limpiar();
	}
	multiplicacion.onclick = function(e){
		factor1 = resultado.textContent;
		operacion = "*";
		limpiar();
	}
	division.onclick = function(e){
		factor1 = resultado.textContent;
		operacion = "/";
		limpiar();
	}
	//Boton para obtener resultados
	igual.onclick = function(e){
		factor2 = resultado.textContent;
		resolver();
	}	
}
//-----------------------------------------------
//Otras funciones y eventos importantes
function limpiar(){
	resultado.textContent = "";
}

function resetear() {
	resultado.textContent = "";
	factor1 = 0;
	factor2 = 0;
	operacion = "";
}

function resolver(){
	var res = 0;
	switch(operacion){
		case "+":
			res = parseFloat(factor1) + parseFloat(factor2);
		break;

		case "-":
			res = parseFloat(factor1) - parseFloat(factor2);
		break;

		case "*":
			res = parseFloat(factor1) * parseFloat(factor2);
		break;

		case "/":
			res = parseFloat(factor1) / parseFloat(factor2);
		break;
	}
	resetear();
	resultado.textContent = resultado.textContent + res;
	//alert(res);
}