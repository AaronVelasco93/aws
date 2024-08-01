Las promesas en JavaScript son una forma de manejar operaciones asíncronas. Te permiten ejecutar código cuando una operación se completa (ya sea con éxito o con un error), lo que es útil para tareas como llamadas a APIs, operaciones de lectura/escritura de archivos, y otras tareas que toman tiempo.

- ¿Qué es una Promesa?
Una promesa es un objeto que representa la eventual finalización (o falla) de una operación asíncrona. Tiene tres estados posibles:

Pending (pendiente): La operación aún no se ha completado.
Fulfilled (cumplida): La operación se completó con éxito.
Rejected (rechazada): La operación falló.
Creando una Promesa
Para crear una promesa, se utiliza el constructor Promise, que toma una función de callback con dos argumentos: resolve (para indicar que la promesa se completó con éxito) y reject (para indicar que falló).

- Consumiendo una Promesa
Una vez que tienes una promesa, puedes usar los métodos .then() y .catch() para manejar los resultados cuando la operación se complete: