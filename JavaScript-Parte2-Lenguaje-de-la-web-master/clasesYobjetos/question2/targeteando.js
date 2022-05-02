
    /*Aprendimos que document.querySelectorAll acepta recibir un selector CSS. En este caso, usamos un selector de etiqueta que retornará todos los elementos que son etiquetas li. Como el resultado es siempre un conjunto de datos, podemos recorrer por cada elemento a través del clásico for. Para cada ítem, adicionamos un evento click.

Sin embargo, Larissa no sabe cómo hacer para que la función pasada en el evento click sea llamada, tomando en cuenta el elemento que fue clicado en la lista. Ella necesita referenciar el elemento asociado al evento para poder exhibir el texto a través de una alerta.

¿Cuál de las opciones de abajo completa en forma correcta el código de Larissa?*/
    var lista = document.querySelectorAll('li');

    for(var i = 0; i < lista.length; i++) {

        lista[i].addEventListener('click', function() {
            // exhibir el contenido de la lista al momento de hacer clic en el elemento
            //con this accedemos al objeto y con textContent obtenemos el contenido del objeto
            alert(this.textContent);
        });
    }
    //alert(this.textContent);
    /*Alternativa correcta..Todo evento disparado en JavaScript posee un contexto que es accesible a través de la función ejecutada cuando el evento es disparado. En la función, podemos acceder al contexto a través del objeto implícito this. Es una referencia para el elemento DOM que está recibiendo el evento. Su naturaleza es dinámica, si clicamos en el primer elemento de la lista el this será el primer elemento, se clicamos en el segundo, el this será el segundo, y así sucesivamente.*/