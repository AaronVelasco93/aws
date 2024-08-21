Explicación del Código:
Arreglo nombres:
    Este es un arreglo vacío que se utilizará para almacenar los nombres que ingrese el usuario.
Función agregarNombre:
    Esta función solicita al usuario que ingrese un nombre mediante prompt.
    Si el nombre no está vacío, se agrega al arreglo nombres usando push.
Función mostrarNombres:
    Esta función revisa si el arreglo nombres está vacío.
    Si hay nombres en el arreglo, los muestra en una lista numerada utilizando alert.
    Utiliza forEach para iterar sobre cada nombre en el arreglo.
Función mostrarMenu:
    Esta función presenta un menú de opciones al usuario.
    Dependiendo de la opción seleccionada, llama a agregarNombre, mostrarNombres, o termina el programa.
Ciclo do-while:
    El ciclo do-while mantiene el menú activo hasta que el usuario elige salir (opción 3).