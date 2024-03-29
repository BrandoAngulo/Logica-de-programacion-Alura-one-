//Función que encapsula la responsabilidad de capturar la lista de invitados
function obtenerListaInvitados(){
    var items = document.querySelectorAll('.invitado');
    return items
}
//Función para obtener las edades de los invitados
function obtenerEdades(listaInvitados){
    var edades = [];
    for(var i = 0; i < listaInvitados.length; i++) {
        var edad = listaInvitados[i].querySelector('.edad').textContent;
        edades.push(edad);    
    }
    return edades;    
}

//Función genérica que realiza la suma de los valores de uma lista de valores
function calcularTotalSuma(lista){
    var total = 0;
    for(var i = 0; i < lista.length; i++) {
        total +=parseInt(lista[i]);
    }
    return total;
}

//Función que imprime en el objeto DOM que tiene como clase "total" 
function imprimirTotalEdadades(total){
    document.querySelector('.total').textContent = total;
}

var listaInvitados = obtenerListaInvitados();
var edades = obtenerEdades(listaInvitados);
var totalEdades = calcularTotalSuma(edades);
imprimirTotalEdadades(totalEdades);