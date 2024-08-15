// Función que simula una petición a una API para obtener datos de un usuario
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
      console.log(`Obteniendo datos del usuario con ID: ${id}...`);
  
      setTimeout(() => {
        const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
  
        if (exito) {
          resolve({ id: id, nombre: "Juan", edad: 30 });
        } else {
          reject(`Error: No se pudo obtener el usuario con ID: ${id}`);
        }
      }, 2000); // Simula un retardo de 2 segundos
    });
  }
  
  // Función asíncrona que usa `await` para manejar la promesa
  async function mostrarUsuario(id) {
    try {
      const usuario = await obtenerUsuario(id); // Espera a que se resuelva la promesa
      console.log("Usuario obtenido:", usuario);
    } catch (error) {
      console.error(error); // Captura y maneja cualquier error
    }
  }
  
  // Llamada a la función asíncrona
  mostrarUsuario(1);
  