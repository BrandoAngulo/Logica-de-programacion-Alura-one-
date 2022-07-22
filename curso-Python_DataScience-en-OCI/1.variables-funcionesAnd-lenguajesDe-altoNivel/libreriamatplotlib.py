# math es una libreria que contiene funciones matematicas y usando el modulo pyplot podemos hacer graficos.
from matplotlib import markers
import matplotlib.pyplot as plt;
from random import randrange,seed;
#importamos el modulo listaConNumerosRandom para sacar la funcion randomNum que hice 
import listaConNumerosRandom; 
#list crea una lista y range da un rango de numeros de donde hasta que numero donde el ultimo numero no se cuenta
x = list(range(1,7));
y = listaConNumerosRandom.listaRandom;
print(y);

#graficar 
plt.plot(x,y,marker = "o"); #plot() se le da x,y para graficar los array en el cuadro cartesiano la funcion marker marca los puntos de los ejes solicitados 
plt.title("Grafico de Notas"); #Con la funcion plt.title Nombramos el titulo
plt.xlabel("Pruebas"); #se le pone titulo a el eje X
plt.ylabel("Notas"); # se le pone titulo a el eje Y
plt.show();#muestra los graficos en una ventana emergente