/*
Ejemplo de Promesa
    Imaginemos una operación asíncrona que simula una
    consulta a una base de datos para obtener información de un usuario.
*/
// Función que devuelve una promesa
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
      console.log("Consultando base de datos...");
  
      // Simulamos una operación asíncrona con setTimeout
      setTimeout(() => {
        const numeroAleatorio = Math.random();
        const exito = numeroAleatorio >0.5;
        
        if (exito) {
          resolve({ id: id, nombre: "Juan", edad: 30 , numeroAleatorio});
          
        } else {
          reject(`Error: No se pudo conectar a la base de datos: ${numeroAleatorio}`);
        }
      }, 2000); // Simula un retardo de 2 segundos
    });
  }
  
  // Uso de la promesa
  obtenerUsuario(2)
    .then((usuario) => {
      console.log("Usuario obtenido:", usuario);
      
    })
    .catch((error) => {
      console.error(error);
    });
  