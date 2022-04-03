/* let titulo = document.querySelector(".titulo");
			console.log(titulo);
			console.log(titulo.textContent);
			//la funcion textContent muestra el contenido que hay en un objeto y tambien lo puede modificar por ejemplo;
			titulo.textContent = "sabrosa la vida";
			console.log(titulo.textContent); */

//acceder de javascript a html pero a un id
//con querySelectorAll escogemos toda la informacion que esta dentro de los tr con la clase paciente
let pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);
//con el for recorremos toda la informacion que tiene la clase paciente 
for (let i = 0; i < pacientes.length; i++) {

	let paciente = pacientes[i];
	//let infoNombre = paciente.querySelector(".info-nombre");
	let infoPeso = paciente.querySelector(".info-peso");
	let infoAltura = paciente.querySelector(".info-altura");
	let infoImc = paciente.querySelector(".info-imc");

	let peso = infoPeso.textContent;
	let altura = infoAltura.textContent;

	let pesoCorrecto = validarPeso(peso);
	let alturaCorrecta = validarAltura(altura);


	if (!pesoCorrecto) {
		//console.log("Digita un peso correcto");
		//modifica el contenido de la clase y le muestro al usuario que esta incorrecto algo
		infoImc.textContent = "Peso incorrecto";
		pesoCorrecto = false;
		//propiedad para adicionar y darle color al fondo de la celda desde el archivo css llamando la clase creada en css
		//para cambiar el estilo de una propiedad en javascript es pacientestyle.backgroundColor = "blue";
		paciente.classList.add("paciente-incorrecto");
	}

	if (!alturaCorrecta) {
		//console.log("Digita una altura correcta");
		//modifica el contenido de la clase y le muestro al usuario que esta incorrecto algo
		infoImc.textContent = "Altura incorrecta";
		alturaCorrecta = false;
		paciente.classList.add("paciente-incorrecto");
	}

	console.log(alturaCorrecta + " " + pesoCorrecto);

	if ((pesoCorrecto === false) && (alturaCorrecta === false)) {

		infoImc.textContent = "Peso y altura incorrectos";
		paciente.classList.add("paciente-incorrecto");
	}


	if ((pesoCorrecto === true) && (alturaCorrecta === true)) {
		//formula del imc peso/altura^2
		 
		infoImc.textContent = calcularImc(peso, altura);
	}
}

function calcularImc(peso,altura) {

	let imc = peso / Math.pow(altura, 2); //100 / 2 * 2 = 25

	//retorno un valor
	return imc.toFixed(); //tofixed decide poner el numero de digitos decimalesdespues del punto
}

function validarPeso(peso) {
	if (peso >= 0 && peso < 595){
		return true;
	}else{
		return false;
	}
	
}

function validarAltura(altura) {
	if (altura >= 0 && altura < 2.51){
		return true;
	}else{
		return false;
	}
	
}