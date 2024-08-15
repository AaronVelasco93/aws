// Crea un nuevo objeto vacío y lo asigna a la variable personaUno
const personaUno = new Object(); 

// Añade una propiedad 'nombre' al objeto 'personaUno' y le asigna el valor "Ignacio"
personaUno.nombre = "Ignacio"; 

// Añade un método 'saludar' al objeto 'personaUno'
// Este método devuelve un saludo que incluye el nombre de la persona
personaUno.saludar = function() {
    return `${this.nombre} dice hola!`; // 'this.nombre' se refiere a la propiedad 'nombre' del objeto 'personaUno'
};

// Muestra el objeto 'personaUno' completo en la consola
console.log(personaUno); 

// Muestra el valor de la propiedad 'nombre' del objeto 'personaUno' en la consola
console.log(personaUno.nombre); 

// Llama al método 'saludar' del objeto 'personaUno' y muestra el resultado en la consola
console.log(personaUno.saludar()); 
