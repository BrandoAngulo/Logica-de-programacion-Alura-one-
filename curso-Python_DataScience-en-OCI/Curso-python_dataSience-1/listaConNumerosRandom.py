from random import randrange, seed;
# el modulo seed que esta dentro de la libreria random sirve para que despues que se genera una ves un numero aleatorio dentro de un for ya no vuelva a variar


listaRandom=[];
#agregar varios numeros aleatorios en una lista
# la funcion len() nos muestra el tamaño de una lista o array, la cantidad de elementos que contiene 
#con esta funcion nunca se van a cambiar los valores aleatorios despues de que lo haga la primer vez
seed(4)
def randomNum():
    for i in range(6):
        listaRandom.append(randrange(0,11))
    #print(f'{listaRandom} {len(listaRandom)}');
randomNum()