// Definimos algunas variables
const pi = 3.1416;
let radioCirculo = 5;
let baseRectangulo = 10;
let alturaRectangulo = 7;

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
    return pi * radio * radio;
}

// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// Llamamos a las funciones y guardamos los resultados en variables
let areaCirculo = calcularAreaCirculo(radioCirculo);
let areaRectangulo = calcularAreaRectangulo(baseRectangulo, alturaRectangulo);

// Mostramos los resultados en la consola
console.log(`El área del círculo con radio ${radioCirculo} es: ${areaCirculo}`);
console.log(`El área del rectángulo con base ${baseRectangulo} y altura ${alturaRectangulo} es: ${areaRectangulo}`);
