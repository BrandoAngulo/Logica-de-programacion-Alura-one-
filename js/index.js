let input = document.getElementById("encrip");
let caracteres = /^[a-z\s?]+$/;

input.focus();

function enviarTexto() {

    text = document.getElementById("encrip").value;
    document.getElementById('textArea').value = text;

}

function enviarTexto2() {

    text = document.getElementById("desencrip").value;
    document.getElementById('textArea').value = text;
}

function encriptar() {
    //caracteres que se permiten digitar en el input = que inicie con letras solo minusculas que y \s= tenga espacios ?=que los espacios sean opcionales
    //let caracteres = /^[a-z\s?]+$/;
    //remplaza todas las coincidencias de palabras asignada por la bocal asignada
    //str =
    input.value = input.value
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("a", "ai")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

    //condicional solo para que ingrese letras minusculas
    if (caracteres.test(input.value)) {
        //console.log(input.value);
    } else {
        alert(
            "Las palabras Digitadas Contienen Mayusculas, Caracteres Especiales, Numeros o Acentos"
        );
    }

    enviarTexto();
    input.value = "";
    input.focus();
}



function desencriptar() {
    let input = document.getElementById("desencrip");
    //caracteres que se permiten digitar en el input = que inicie con letras solo minusculas que y \s= tenga espacios ?=que los espacios sean opcionales
    //let caracteres = /^[a-z\s?]+$/;
    input.focus();

    //remplaza todas las coincidencias de palabras asignada por la bocal asignada
    input.value = input.value
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ai", "a")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

    //se hace un condicional testeando lo que digita el usuario si esta dentro del rango de caracteres permitidos seria true.
    if (caracteres.test(input.value)) {
        //console.log(input.value);
    } else {
        alert(
            "Las palabras Digitadas Contienen Mayusculas, Caracteres Especiales, Numeros o Acentos"
        );
    }

    enviarTexto2();
    input.value = "";
    input.focus();
}

let button = document.getElementById("encriptar");
button.onclick = encriptar;
let button2 = document.getElementById("desencriptar");
button2.onclick = desencriptar;

//console.log(button.onclick);


//creacion de eventos para copiar texto
const $textArea = document.getElementById('textArea');
$btn = document.getElementById('btn');
$title = document.getElementById('title');

//evento para cambiar texto del boton 
$btn.addEventListener('click', e => {
    $textArea.select();
    document.execCommand('copy');
    //cambia el texto despues de haber hecho una accion
    $btn.innerHTML = 'Texto Copiado!!'
})