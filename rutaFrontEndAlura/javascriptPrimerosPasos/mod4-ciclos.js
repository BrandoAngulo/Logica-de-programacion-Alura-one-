let ciudadesDisponibles = ["Bogota","Lima","Cali"];
let ciudadDestino = "Medellin";
let estado = false
i=0;
while (i < ciudadesDisponibles.length) {
    if (ciudadesDisponibles[i]==ciudadDestino) {
        estado = true;
        break;
        
    }
    i++;
} 
console.log("ciudad "+ciudadDestino+"\nestado disponible: ",estado);
