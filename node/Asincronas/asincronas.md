Explicación del Código:
    Función obtenerUsuario(id):

    Devuelve una promesa que simula una operación asíncrona de obtener datos de un usuario.
    Tiene un 70% de probabilidad de éxito y un 30% de probabilidad de fallar, usando Math.random().
Función asíncrona mostrarUsuario(id):

    async: Declara la función como asíncrona, permitiendo el uso de await dentro de ella.

    await obtenerUsuario(id): Pausa la ejecución de la función hasta que la promesa devuelta por obtenerUsuario(id) se resuelva. Si la promesa es exitosa, devuelve el valor resuelto; si falla, lanza un error.

    try/catch: Maneja posibles errores que pueden ocurrir al resolver la promesa. Si la promesa es rechazada, el código dentro del bloque catch manejará el error.

Llamada a la función mostrarUsuario(1):

    Llama a la función asíncrona que intentará obtener y mostrar los datos del usuario con ID 