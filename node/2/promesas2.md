Explicación del Código:
Función descargarDatos(url):

    new Promise((resolve, reject) => {...}): Crea una nueva promesa.
    
    setTimeout: Simula un retardo de 3 segundos para la descarga.
    
    Math.random() > 0.3: Hay un 70% de probabilidad de que la descarga tenga éxito (valor aleatorio mayor que 0.3).
    
    resolve(): Se llama si la descarga tiene éxito, y se pasa un mensaje de éxito.
    
    reject(): Se llama si la descarga falla, y se pasa un mensaje de error.

Uso de la promesa:
    descargarDatos("https://api.ficticia.com/datos"): Llama a la función con una URL ficticia.
    
    .then(mensaje => {...}): Se ejecuta si la promesa se cumple, y muestra el mensaje de éxito.
    
    .catch(error => {...}): Se ejecuta si la promesa es rechazada, y muestra el mensaje de error.