const ciudades = ["Bogotá","Cali","Medellin","Bucaramanga"];
//console.log(ciudades);
const ciudades2 = [];
const ciudades3 = [];
ciudades2.push("Cali");
ciudades2.push("Bogota");
ciudades2.push("Medellin");
console.log(ciudades2);
for (let i = 0; i < ciudades2.length; i++) {
    ciudades3.push(ciudades2[i]);
}
ciudades3.splice(1)
console.log(ciudades3,ciudades3.length);