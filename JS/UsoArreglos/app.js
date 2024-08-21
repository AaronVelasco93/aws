// Inicializamos un arreglo vacío para almacenar los nombres
let nombres = [];

// Función para agregar un nombre al arreglo
function agregarNombre() {
    let nombre = prompt("Introduce un nombre:");
    if (nombre) {
        nombres.push(nombre);
        alert(`¡Nombre "${nombre}" agregado exitosamente!`);
    } else {
        alert("El nombre no puede estar vacío.");
    }
}

// Función para mostrar todos los nombres almacenados
function mostrarNombres() {
    if (nombres.length === 0) {
        alert("No hay nombres almacenados.");
    } else {
        let mensaje = "Nombres almacenados:\n";
        nombres.forEach((nombre, index) => {
            mensaje += `${index + 1}. ${nombre}\n`;
        });
        alert(mensaje);
    }
}

// Función para mostrar el menú de opciones
function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(
            "Opciones disponibles:\n" +
            "1. Agregar nombre\n" +
            "2. Mostrar nombres\n" +
            "3. Salir\n" +
            "Elige una opción:"
        );

        switch (opcion) {
            case '1':
                agregarNombre();
                break;
            case '2':
                mostrarNombres();
                break;
            case '3':
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    } while (opcion !== '3');
}

// Iniciar el programa
mostrarMenu();
