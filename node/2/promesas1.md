¿Qué es una Promesa?
Una promesa en JavaScript es un objeto que representa la eventual finalización (o fallo) de una operación asíncrona. Una promesa puede estar en uno de estos tres estados:

Pending (pendiente): La operación aún no ha terminado.
Fulfilled (cumplida): La operación se completó con éxito.
Rejected (rechazada): La operación falló.


Explicación del Código:
Función obtenerUsuario(id):

new Promise((resolve, reject) => {...}): Crea una nueva promesa. Dentro de esta función proporcionas dos argumentos: resolve (que llamas si la operación es exitosa) y reject (que llamas si la operación falla).
setTimeout: Simula una operación asíncrona que tarda 2 segundos en completarse.
exito: Simula aleatoriamente si la operación es exitosa o no.
resolve({ ... }): Si la operación es exitosa, se llama a resolve con un objeto que representa al usuario.
reject("Error: ..."): Si la operación falla, se llama a reject con un mensaje de error.
Uso de la promesa:

obtenerUsuario(1): Llamamos a la función que devuelve una promesa.
.then(usuario => {...}): Si la promesa se cumple (es exitosa), se ejecuta la función pasada a then, recibiendo el valor pasado a resolve.
.catch(error => {...}): Si la promesa es rechazada (falla), se ejecuta la función pasada a catch, recibiendo el valor pasado a reject.

Resumen:
Las promesas permiten manejar operaciones asíncronas de manera más legible y manejable que con callbacks anidados.
Puedes usar .then() para manejar la resolución exitosa de la promesa y .catch() para manejar los errores.
Este es un ejemplo simple, pero ilustra cómo las promesas pueden usarse para gestionar el flujo de código asíncrono en JavaScript.