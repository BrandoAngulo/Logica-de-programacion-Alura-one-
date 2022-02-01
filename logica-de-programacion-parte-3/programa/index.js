let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

//Accedemos a la propiedad para darle color
pincel.fillStyle= "blue";
//Accedemos a las dimensiones como X & Y
pincel.fillRect(0,0,600,400);
//va de 0 a 100 el ancho y el alto sigue igual 
pincel.fillStyle = "yellow";
pincel.fillRect(0,0,200,400);
//va de 100 a 200 el ancho y el alto sigue igual 
pincel.fillStyle ="red";
pincel.fillRect(400,0,200,400);
//posicionés
pincel.fillStyle = "black";
pincel.beginPath();//inicia un nuevo camino
pincel.moveTo(300,200);
pincel.lineTo(200,400);
pincel.lineTo(400,400);
pincel.fill();//rellena las coordenadas que se dieron con el color que se le dio arriba osea de negro

/* grafiar circunferencia */
pincel.fillStyle = "orange";
pincel.beginPath();//inicia un nuevo camino
pincel.arc(300, 200, 50, 0, 2*3.14); //funcion para graficar circunferencia se le da la posicion el radio, el angulo inicial y el angulo final.
pincel.fill(); //rellenar