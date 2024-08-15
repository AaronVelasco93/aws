pip install mysql-connector-python
Explicación del Código:
Conexión a MySQL:

Usamos la biblioteca mysql.connector para conectarnos a MySQL.
En la función mysql.connector.connect(), se proporcionan los parámetros host, user, password y database para establecer la conexión.
Función guardar_dato(dato):

Conexión y Comprobación: Se establece la conexión a MySQL y se verifica si la conexión ha sido exitosa.
Inserción de Datos: Se define una consulta SQL (INSERT INTO datos (valor) VALUES (%s)) y se ejecuta con el valor proporcionado.
Guardar y Cerrar: Los cambios se guardan (conexion.commit()) y la conexión se cierra.
Guardar en Archivo: Se escribe el dato en un archivo de texto datos_guardados.txt.
Manejo de Errores: Si ocurre algún error durante la conexión o la ejecución de la consulta, se captura y muestra el error.
Ejemplo de Uso:

Se define un dato ("Este es un dato de prueba en MySQL") y se llama a la función guardar_dato().
Resumen:
Este código realiza las siguientes acciones:

Conexión a MySQL: Se conecta a un servidor MySQL y a la base de datos especificada.
Inserción de Datos: Guarda un dato en la tabla datos.
Archivo de Texto: Además, guarda el mismo dato en un archivo de texto para una copia adicional.
Manejo de Errores: Se asegura de cerrar la conexión y manejar cualquier error que pueda ocurrir.
Asegúrate de reemplazar 'localhost', 'tu_usuario', 'tu_contraseña', y 'mi_base_datos' con los valores que correspondan a tu entorno de MySQL.