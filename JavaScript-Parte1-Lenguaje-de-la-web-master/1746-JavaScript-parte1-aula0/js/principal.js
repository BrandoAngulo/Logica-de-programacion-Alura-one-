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

			let general = infoPeso.textContent;
			let peso = infoPeso.textContent;
			let altura = infoAltura.textContent;

			//formula del imc peso/altura^2
			let imc = peso / Math.pow(altura,2); //100 / 2 * 2 = 25 
			infoImc.textContent = imc;
			console.log(general);
			console.log(infoImc);
