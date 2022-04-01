/* function buscarElemento(selector) {
    return document.querySelector(selector);
}

function multiplicacion(numero1,numero2) {
    return document.querySelector(selector);
}

let boton = buscarElemento(".boton");
let numero1 = buscarElemento(".numero1");
let numero2 = buscarElemento(".numero2");
let resultado = buscarElemento(".resultado");

boton.addEventListener('click', function () {
    console.log(multiplicacion(numero1, numero2)) ; 
});
 */

function bucarElemento(selector){
    return document.querySelector(selector);
}
//ponemos los value para accesar directamente a los numeros ingresados en cada input y obtener el contenido   
function multiplicacion(numero1, numero2){
    let calculo = numero1.value * numero2.value;
    return calculo; 
    
}

var boton = bucarElemento('.boton');
var numero1 = bucarElemento('.numero1');
var numero2 = bucarElemento('.numero2');
var resultado = bucarElemento('.resultado');


 boton.addEventListener('click', function () {
    resultado.textContent = multiplicacion(numero1, numero2); 
   
 });





