let paciente = document.querySelectorAll(".paciente");
console.log(paciente);

//se hace una ciclo con foreach y dentro de el hacemos una funcion anonima
//por cada ciclo voy a iterar cada paciente de la tabla
paciente.forEach(function(paciente){
    //se adiciona el escuchador de eventos en cada paciente, evento usado es el dblclick, se crea una funcion anonima y se indica la accion que va a realizar. cada ves que se le de doble click a algun paciente dentro de la tabla realizara la accion de eliminar
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});