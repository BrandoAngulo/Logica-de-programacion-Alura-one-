let tabla = document.querySelector("#tabla-pacientes");

//se adiciona el escuchador de eventos con el evento click y una funcion anonima.
//dentro de la funcion anonima se le pasa como parametro el event y se utiliza el even.target en la accion es el lugar donde se esta haciendo especificamente donde esta el click
//este evento es llamado como event bubbling.
tabla.addEventListener("dblclick",function(event){
    console.log(event.target);
    //con el target selecciona lo que especificamente se clickea, pero con parnetNode sube una escala y selecciona la fila por que sube de acuerdo al padre.
    //y con el remove(); eliminamos lo que estamos seleccionando

    //agregamos la clase de css con nuestro event bubblng. la agregamos con .classList.add("clase"); 
    event.target.parentNode.classList.add("fadeOut");
    //se usa setTimeout(la accion a realizar,la cantidad de tiempo en milisegundos); para dar un intervalo de tiempo en js y dentro se crea una funcion anonima e indicar la accion, por si hay una accion antes de que esta realice su accion.
    setTimeout(function(){
        event.target.parentNode.remove();
    },500);//1000 milisegundos es igual a 1 segundo entonces 500 milisegundos es = medio segundo 
    
});

