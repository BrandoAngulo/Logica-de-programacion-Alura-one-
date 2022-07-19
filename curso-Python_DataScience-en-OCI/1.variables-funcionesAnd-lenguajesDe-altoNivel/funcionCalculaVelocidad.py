""" Una función para calcular la velocidad
PRÓXIMA ACTIVIDAD

Una persona va a la panadería todos los días. La distancia de su casa hasta el lugar es de 100 metros y todo el recorrido se realiza en 20 segundos.

Para calcular la velocidad promedio y encontrar la relación entre el espacio y el tiempo, podemos dividir el espacio recorrido por el tiempo.

Sabiendo esto, la persona desea crear una función llamada velocidad, que reciba 2 parámetros llamados espacio y tiempo, que realice el cálculo respectivo y que muestre una salida semejante al siguiente ejemplo: """

def calcular_velocidad(metros,segundos):
    velocidad = metros/segundos;
    print(f"La Velocidad es {velocidad} m/s");

#calcular_velocidad(100,20);
edad = 19

def verificar_si_puede_conducir(edad):
    if edad >= 18:
        print("Tiene edad suficiente para conducir");
    else:
        print("No puede conducir");

#verificar_si_puede_conducir(edad);
""" Descubriendo el NPS de un curso
PRÓXIMA ACTIVIDAD

Las sentencias condicionales son recursos que nos ayudan a ejecutar acciones donde tenemos diferentes opciones o caminos que seguir en función a reglas o condiciones. Evalúa la siguiente expresión condicional hecha en Python para descubrir cómo se interpreta la nota de NPS (Net Promoter Score) dada por un alumno a un curso de Alura. """

def clasificar_nps(nota):
  if nota <= 6:
    print('El alumno es considerado Detractor')
  else:
    if nota <= 8: 
      print('El alumno es considerado Neutro')
    else:
      print('El alumno es considerado Promotor')

#clasificar_nps(9)

a=2

if a < 2:
 a = a + 1
else:
 a = a + 2
if a < 4:
 a = a - 4
else:
 a = a + 6

print(a)
 