 // Función para realizar el ordenamiento por burbuja
 function ordenarBurbuja() {
    // Obtener el valor del input
    let input = document.getElementById('numeros').value;

    // Convertir la cadena de entrada en un arreglo de números
    let arr = input.split(',').map(Number);

    // Implementación del algoritmo de burbuja
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Intercambiar los elementos si están en el orden incorrecto
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    // Mostrar el arreglo ordenado en la consola
    console.log(`Lista ordenada: ${arr.join(', ')}`);
}