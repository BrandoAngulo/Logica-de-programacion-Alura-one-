let campoFiltro = document.querySelector("#filtrar-tabla");
//console.log(campoFiltro);
//relacionar un evento capturando el texto escrito en el input del filtro, 
//ponemos el escuchador de eventos y le decimos que capture todo lo que digitan en el campo imput, ponemos una funcion anonima, y dentro de ella le ponemos lo que va hacer que es capturar todo
campoFiltro.addEventListener("input", function () {
    //console.log("digito algo");//este console es para probar si muestra lo que se digita en el input
    //para acceder al texto que se esta digitando dentro del input necesitamos acceder a la propiedad value
    // y como me estoy refiriendo ya dentro del objeto campo filtro oseq que ya se esta escuchando se puede hacer con this.value this significa a este objeto que es campofiltro.
    //osea que con esta propiedad podemos acceder a cualquier caracter digitado en el input
    //console.log(this.value);
    //capturar todos los pacientes a traves de una variable se utiliza queryselectroAll para traer todos los pacientes de la clase.solo nos faltaria acceder a la propiedad nombre del tr para campturarlo
    let pacientes = document.querySelectorAll(".paciente");
    //solo para ver lo que capturamos
    //console.log(pacientes);

    //se crea variable para usar expresiones regulares y revisar las letras escritas en el input "i" = insensitive a las mayusculas o minusculas
    let expresion = new RegExp(this.value, "i");
   
    if (this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            //se crea una variable paciente para iterar dentro de la clase pacientes que es la que tiene los td de los pacientes de la tabla
            let paciente = pacientes[i];
            //acceder al la clase del tr a traves de paciente.querySelector para obtener la clase info-nombre del td
            //acceder al td de la clase infombre
            let tdNombre = paciente.querySelector(".info-nombre");
            //acceder al contenido del td
            let nombre = tdNombre.textContent;
            //imprimimos para ver el contenido del td-nombre
            //console.log(nombre);
            //buscamos con las expresiones regulares si no hay una letra parecida de algun nombre buscado en el filtro que se desaparezca
            //if (this.value != nombre) {
             if (!expresion.test(nombre)) {
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }; 

        };

    } else {
        for (let i = 0; i < pacientes.length; i++) {
            let paciente = pacientes[i];
            paciente.classList.remove("invisible");
        };
    };

});

