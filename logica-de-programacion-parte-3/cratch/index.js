let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

//ojos
pincel.fillStyle = "darkgreen";
pincel.fillRect(0,0,350,300);

pincel.fillStyle = "black";
pincel.fillRect(70,90,90,90);
pincel.fillRect(210,90,90,90);



