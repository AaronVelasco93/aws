/*
Ejemplo: Simulación de Descarga de Datos
Imaginemos que tenemos una función que simula la descarga de datos de un servidor. 
La descarga puede tener éxito o fallar, y queremos manejar ambos casos utilizando promesas.
*/

// Función que simula la descarga de datos desde un servidor
function descargarDatos(url) {
    return new Promise((resolve, reject) => {
      console.log(`Iniciando descarga desde ${url}...`);
  
      setTimeout(() => {
        const exito = Math.random() > 0.3; // 70% de probabilidad de éxito
  
        if (exito) {
          resolve(`Datos descargados correctamente desde ${url}`);
        } else {
          reject(`Error: No se pudo descargar desde ${url}`);
        }
      }, 3000); // Simula un retardo de 3 segundos
    });
  }
  
  // Uso de la promesa
  descargarDatos("https://api.ficticia.com/datos")
    .then((mensaje) => {
      console.log(mensaje); // Se ejecuta si la promesa se cumple
    })
    .catch((error) => {
      console.error(error); // Se ejecuta si la promesa es rechazada
    });
  