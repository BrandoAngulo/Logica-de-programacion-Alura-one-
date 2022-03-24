var productos = document.querySelectorAll(".producto");

for( var i=0 ; i < productos.length ; i++){
    var producto  = productos[i];
    //para capturar el contenido hay que crear una variable y guardar la variable que se ah creado para traer la celda con su contenido y en la variable nueva que se crea se le hace un textcontent para capturar su contenido
    var nombreProducto = producto.textContent;
    console.log(nombreProducto);
}
