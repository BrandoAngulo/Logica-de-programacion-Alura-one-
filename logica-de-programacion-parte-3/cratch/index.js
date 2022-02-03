let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

//ojos
pincel.fillStyle = "darkgreen";
pincel.fillRect(0,0,350,300);

pincel.fillStyle = "black";
pincel.fillRect(50,50,90,90);
pincel.fillRect(210,50,90,90);
pincel.fillRect(140,140,70,100);
pincel.fillRect(100,190,40,110);
pincel.fillRect(210,190,40,110);



