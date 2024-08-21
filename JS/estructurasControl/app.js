// Inicializamos un arreglo para almacenar los productos del inventario
let inventario = [];

// Función para mostrar el menú de opciones
function mostrarMenu() {
    return parseInt(prompt(
        "Opciones disponibles:\n" +
        "1. Agregar producto\n" +
        "2. Mostrar todos los productos\n" +
        "3. Buscar producto por nombre\n" +
        "4. Salir\n" +
        "Elige una opción: "
    ));
}

// Función para agregar un producto al inventario
function agregarProducto() {
    let nombre = prompt("Introduce el nombre del producto: ");
    let cantidad = parseInt(prompt("Introduce la cantidad del producto: "));
    let precio = parseFloat(prompt("Introduce el precio del producto: "));

    if (cantidad > 0 && precio > 0) {
        let producto = {
            nombre: nombre,
            cantidad: cantidad,
            precio: precio
        };
        inventario.push(producto);
        alert("Producto agregado exitosamente!");
    } else {
        alert("Cantidad y precio deben ser números positivos.");
    }
}

// Función para mostrar todos los productos en el inventario
function mostrarProductos() {
    if (inventario.length === 0) {
        alert("No hay productos en el inventario.");
    } else {
        let mensaje = "Productos en inventario:\n";
        for (let i = 0; i < inventario.length; i++) {
            mensaje += `Producto ${i + 1}:\n` +
                       `Nombre: ${inventario[i].nombre}\n` +
                       `Cantidad: ${inventario[i].cantidad}\n` +
                       `Precio: $${inventario[i].precio}\n` +
                       "-----------------------------\n";
        }
        alert(mensaje);
    }
}

// Función para buscar un producto por nombre
function buscarProducto() {
    let nombreBuscar = prompt("Introduce el nombre del producto que deseas buscar: ");
    let encontrado = false;
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombreBuscar.toLowerCase()) {
            alert(
                `Producto encontrado:\n` +
                `Nombre: ${inventario[i].nombre}\n` +
                `Cantidad: ${inventario[i].cantidad}\n` +
                `Precio: $${inventario[i].precio}`
            );
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        alert("Producto no encontrado.");
    }
}

// Función principal para manejar el menú
function iniciarPrograma() {
    let continuar = true;

    while (continuar) {
        let opcion = mostrarMenu();

        switch (opcion) {
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta de nuevo.");
        }
    }
    alert("Programa finalizado.");
}

// Iniciar el programa
iniciarPrograma();
