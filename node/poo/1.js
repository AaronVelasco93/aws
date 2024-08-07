function Persona (nombre){
    this.nombre = nombre;
    this.saludar=function(){
        return `${this.nombre} Dice hola`;
    };
}


const personaUno = new Persona("Ignacio");
const personaDos = new Persona("Nacho");

console.log(personaUno);
console.log(personaDos);


console.log(personaUno.nombre);
console.log(personaUno.saludar());