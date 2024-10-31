import mysql.connector
from mysql.connector import Error
# pip install mysql-connector-python
def guardar_dato(dato):
    try:
        # Conectar a la base de datos MySQL
        conexion = mysql.connector.connect(
            host='localhost',
            user='root',  # Reemplaza con tu usuario de MySQL
            password='123456',  # Reemplaza con tu contraseña de MySQL
            database='mi_base_datos',# Reemplaza con tu base de datos
            port=3308  
        )

        if conexion.is_connected():
            cursor = conexion.cursor()

            # Insertar el dato en la tabla 'datos'
            query = "INSERT INTO datos (valor) VALUES (%s)"
            cursor.execute(query, (dato,))

            # Guardar los cambios
            conexion.commit()
            print(f"El dato '{dato}' ha sido guardado en la base de datos.")

            # Guardar el dato en un archivo de texto
            with open('datos_guardados.txt', 'a') as archivo:
                archivo.write(dato + '\n')
            print(f"El dato '{dato}' ha sido guardado en el archivo de texto.")

    except Error as e:
        print(f"Error al conectar a MySQL: {e}")
    
    finally:
        if conexion.is_connected():
            cursor.close()
            conexion.close()
            print("Conexión a MySQL cerrada.")

# Solicitar al usuario que ingrese un dato
dato_a_guardar = input("Ingresa el dato que deseas guardar: ")

# Guardar el dato ingresado
guardar_dato(dato_a_guardar)