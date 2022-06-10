//función contador.js

function actualizarCaracteres() {
    var mensaje = document.querySelector("#cuerpo-mensaje").value;
    var caracteres = mensaje.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
 
}