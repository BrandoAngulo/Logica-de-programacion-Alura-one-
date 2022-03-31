//cuando haya un click agregueme lo que esta dentro del input
let botonAgregar = document.querySelector('#adicionar-paciente');

//capturador de eventos con el click, y creamos una function anonima 
botonAgregar.addEventListener("click", function (event) {
    //ponemos el event dentro de la function anonima como un parametro para que quitemos el actualizado automatico que viene por defecto
    //y llamamos al evento como defaultPrevented();
    event.preventDefault();
    //creamos la variable para capturar atraves del querySelector nuestro formulario
    let formuladrio = document.querySelector('#form-agregar');
    // de esta forma guardamos en cada variable lo que digitamos en el atributo del objeto formulario de HTML
    //con VALUE accedemos a lo que estamos ingresando dentro de cada input y lo estamos guardando en las variables 
    let nombre = formuladrio.nombre.value;
    let peso = formuladrio.peso.value;
    let altura = formuladrio.altura.value;
    let gordura = formuladrio.gordura.value;

    //creamos variable para acceder al id de la tabla para guardar nuestros datos nuevos a la tabla
    let tabla = document.querySelector('#tabla-pacientes')

    //creando etiquetas  <tr>fila y columna<td> para agregar a la tabla la tabla 
    let pacienteTr = document.createElement('tr');
    let nombreTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let gorduraTd = document.createElement('td');
    let imcTd = document.createElement('td');

    //accedemos al contenido de cada input para asociarlo a cada etiqueta
    nombreTd.textContent = nombre
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    //accesamos a la funcion creada del calculaImc para accesar a ella y pasamos los parametros ingresados de peso y altura
    imcTd.textContent = calcularImc(peso, altura)

    //Asociando nuestra etiquetas creadas para los nuevos pacientes que se van a agregar a tabla
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    //designamos a la tabla el dato nuevo del paciente
    tabla.appendChild(pacienteTr);

    console.log(pacienteTr);
});