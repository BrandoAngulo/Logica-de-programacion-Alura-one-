""" Para comparar el desempeño escolar de un determinado alumno, el colegio decidió crear un gráfico para cada materia, como se muestra en el siguiente código:

import matplotlib.pyplot as plt

notas_matematica = ['Matemática',8,7,6,6,7,7,8,10]
notas_lenguaje = ['Lenguaje',9,9,9,8,5,6,8,5]
notas_geografia = ['Geografía',10,10,6,7,7,7,8,7]

notas = [notas_matematica, notas_lenguaje, notas_geografia]COPIA EL CÓDIGO
¿Cuál de las siguientes alternativas generará los gráficos respectivos para cada materia?

Imagen de las notas de Matemática

Imagen de las notas de Lenguaje

Imagen de las notas de Geografía

Alternativa correta
for nota in notas:
 x = list(range(1, 10))
 y = nota
 plt.plot(x, y, marker='o')
 plt.xlabel('Exámenes')
 plt.ylabel('Notas')
 plt.title(nota[0])
 plt.show()

Alternativa correta
for nota in notas:
 x = list(range(1, 9))
 y = nota[1:]
 plt.plot(x, y, marker='o')
 plt.xlabel('Exámenes')
 plt.ylabel('Notas')
 plt.show()

Alternativa correta
for nota in notas:
 x = list(range(1, 9))
 y = nota[1:]
 plt.plot(x, y, marker='o')
 plt.xlabel('Exámenes')
 plt.ylabel('Notas')
 plt.title(nota[0])
 plt.show()

¡Correcto! Observa que, la variable y almacenará la nota de cada materia a partir del índice 1, y, el título almacenado en el índice 0 será incluido en el gráfico. """
from matplotlib.markers import MarkerStyle
import matplotlib.pyplot as plt

notas_matematica = ['Matemática',8,7,6,6,7,7,8,10]
notas_lenguaje = ['Lenguaje',9,9,9,8,5,6,8,5]
notas_geografia = ['Geografía',10,10,6,7,7,7,8,7]

notas = [notas_matematica, notas_lenguaje, notas_geografia]


for nota in notas:
    x = list(range(1,9));#en las tres veces que entra grafica el eje X hasta el 8
    y = nota[1:] #arrayslice se le dice asi cuando iniciamos en un numero[1:]hasta : quiere decir el ultimo numero
    plt.plot(x,y,marker="o")
    plt.title(nota[0])#se llama desde el index 0 para mostrar el no,bre del array en el titulo de la grafica 
    plt.ylabel("Notas");
    plt.xlabel("Examenes");
    plt.show();
