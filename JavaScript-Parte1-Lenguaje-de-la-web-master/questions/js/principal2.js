/* let titulo = document.querySelector(".titulo");
			console.log(titulo);
			console.log(titulo.textContent);
			//la funcion textContent muestra el contenido que hay en un objeto y tambien lo puede modificar por ejemplo;
			titulo.textContent = "sabrosa la vida";
			console.log(titulo.textContent); */

//acceder de javascript a html pero a un id
let dia = document.querySelector("#viernes");
//let viernes = dia.textContent; 
let ensalada = dia.querySelector(".ensalada");
let principal = dia.querySelector(".principal").textContent;
let acompanamiento = dia.querySelector(".acompanamiento").textContent;
//console.log(viernes);

ensalada.textContent = "Verdura";
let ensalada1 = ensalada.textContent;

console.log("¡Plato Del Dia!");

console.log(ensalada1);
console.log(principal);
console.log(acompanamiento); 
