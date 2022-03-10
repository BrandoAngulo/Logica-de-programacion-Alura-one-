/* let titulo = document.querySelector(".titulo");
			console.log(titulo);
			console.log(titulo.textContent);
			//la funcion textContent muestra el contenido que hay en un objeto y tambien lo puede modificar por ejemplo;
			titulo.textContent = "sabrosa la vida";
			console.log(titulo.textContent); */

//acceder de javascript a html pero a un id
let paciente = document.querySelector("#paciente1");
let infoNombre = paciente.querySelector(".info-nombre");
let infoPeso = paciente.querySelector(".info-peso");
let infoAltura = paciente.querySelector(".info-altura");
let infoImc = paciente.querySelector(".info-imc");
let pesoCorrecto = true;
let alturaCorrecta = true;

let peso = infoPeso.textContent;
let altura = infoAltura.textContent;



if ((peso < 0) || (peso > 595)) {
	console.log("Digita un peso correcto");
	//modifica el contenido de la clase y le muestro al usuario que esta incorrecto algo
	infoImc.textContent = "Peso incorrecto";
	pesoCorrecto = false;
	
}

if ((altura < 0) || (altura > 2.51)) {
	console.log("Digita una altura correcta");
	//modifica el contenido de la clase y le muestro al usuario que esta incorrecto algo
	infoImc.textContent = "Altura incorrecta";
	alturaCorrecta = false;
}	

	console.log(alturaCorrecta+" "+pesoCorrecto);

	if ((pesoCorrecto === false) && (alturaCorrecta === false)) {
		
		infoImc.textContent = "Peso y altura incorrectos";
	} 


if ((pesoCorrecto === true) && (alturaCorrecta === true)) {
	//formula del imc peso/altura^2
	let imc = peso / Math.pow(altura, 2); //100 / 2 * 2 = 25 
	infoImc.textContent = imc;
} 
