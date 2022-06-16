//cuando haya un click agregueme lo que esta dentro del input
let botonAgregar = document.querySelector('#adicionar-paciente');

//capturador de eventos con el click, y creamos una function anonima 
botonAgregar.addEventListener("click", function (event) {
    //ponemos el event dentro de la function anonima como un parametro para que quitemos el actualizado automatico que viene por defecto
    //y llamamos al evento como defaultPrevented();
    event.preventDefault();

    //creamos la variable para capturar atraves del querySelector nuestro formulario
    let formulario = document.querySelector('#form-agregar');
    // de esta forma guardamos en cada variable lo que digitamos en el atributo del objeto formulario de HTML
    //con VALUE accedemos a lo que estamos ingresando dentro de cada input y lo estamos guardando en las variables 
    let paciente = capturarPaciente(formulario);
    
    //variable creada para llamar a la funcion creada para errores
    let errores = validarPaciente(paciente);
    //si hay un error o si la funcion q esta con la variable errores es mayor que cero va entrar al condicional para validar
    if (errores.length > 0) {
        //llamamos la funcion de errores que creamos...
        mostrarMensajeErrores(errores);
        //mensajeError.textContent = "error paciente";
        //mensajeError.textContent = errores;
        //retornamos vacio para que no envie datos a la tabla es como si fuera un break;
        //este return hace referencia a nuestra function anonima, por que un if no lleva return
        return;
    }
    //llamo funcion para construir un tr dentro de la tabla con un paciente
    adicionarPaciente(paciente);
    //resetear valores y dejar en blanco los input cada ves que enviemos a la tabla los datos, es igual q un value="";
    formulario.reset();
    //se crea variable para acceder a la clase (ul) lista de errores que se ah creado y asi poner vacio
    let resetErrores = document.querySelector("#mensaje-errores");
    //la propiedad innerHTML se utiliza para acceder al texto de html y cambiarlo por otro o dejarlo vacio cuando se actualiza la pagina
    resetErrores.innerHTML ="";

});
function adicionarPaciente(paciente) {
    let pacienteTr = construirTr(paciente);
     //creamos variable para acceder al id de la tabla para guardar nuestros datos nuevos a la tabla
     let tabla = document.querySelector('#tabla-pacientes')
     //designamos a la tabla el dato nuevo del paciente
     tabla.appendChild(pacienteTr);
};

//se crea una funcion para el tr y los tds
function construirTr(paciente) {

    //creando etiquetas  <tr>fila y columna<td> para agregar a la tabla la tabla 
    let pacienteTr = document.createElement('tr');
    //creando clase de un tr para HTML
    pacienteTr.classList.add("paciente");

    //se inserta la funcion dentro del appenChild y como parametros se les pasa el dato del objeto paciente, y la clase HTML
    //appenchild lo que hace es llamar e insertar el nodo creado osea la lista o tabla etc. va de la mano con createElement y textContent
    pacienteTr.appendChild(constriurTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(constriurTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(constriurTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(constriurTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(constriurTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//se crea una funcion como performance del codigo para el ingreso de cada paciente
function capturarPaciente(formulario) {
    //se crea un objeto para captura de datos del formulario
    let paciente = {
        nombre: formulario.nombre.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        //creamos la caracteristica imc y llamamos la funcion de calcularImc y le asignamos los valores con la instancia formulario
        imc: calcularImc(formulario.peso.value, formulario.altura.value)
    }
    return paciente;
}

//funcion para pasar el dato del paciente y crear la clase
function constriurTd(dato, clase) {
    let td = document.createElement('td');
    //clase creada para agregarla generica del html
    td.classList.add(clase);
    //dato contenido por el input q se va enviar a la tabla
    td.textContent = dato;
    return td;
}
//funcion que valida true o false si el peso ingresado en el input es incorrecto
function validarPaciente(paciente) {
    //hacemos un array vacio para insertarle algn error si depronto se genera y lo retornamos..
    let errores = [];
    
    //Validadores de campos vacios
    if ( paciente.nombre.length === 0) {
        errores.push("Rellenar el campo del nombre");
    }
    if ( paciente.peso.length === 0) {
        errores.push("Rellenar el campo del peso");
    }
    if ( paciente.altura.length === 0) {
        errores.push("Rellenar el campo de altura");
    }
    if ( paciente.gordura.length === 0) {
        errores.push("Rellenar el campo del porcentaje de gordura");
    }
    //validacion de paciente, cuando el valor sea negativo osea que entra a la validacion por que negativo es verdadero
    if (!validarPeso(paciente.peso)) {
        errores.push("peso del paciente incorrecto");
    }

    if (!validarAltura(paciente.altura)) {
        errores.push("altura del paciente incorrecta");
    }
    return errores
}

function mostrarMensajeErrores(errores) {
    //variable para acceder a la lista
    let ul = document.querySelector("#mensaje-errores");
    //propiedad para añadir lo que sea en un mensaje al actualizar la pagina
    ul.innerHTML = "";
    //se crea un foreach para q recorra y cree cada li cada ves que hay un error
    errores.forEach(function (error) {
        //variable para ir creando cada error y una li de una lista ul
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}