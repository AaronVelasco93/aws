function hacerOperacionAsincrona() {
    return new Promise((resolve, reject) => {
      console.log('Iniciando operación...');
  
      setTimeout(() => {
        const exito = Math.random() > 0.5; // Aleatoriamente simula éxito o error
  
        if (exito) {
          resolve('Operación completada exitosamente');
          console.log(exito);
        } else {
          reject('Operación fallida');
          console.log(exito);
        }
      }, 3000);
    });
  }
  
  hacerOperacionAsincrona()
    .then((mensaje) => {
      console.log(mensaje);
    })
    .catch((error) => {
      console.error(error);
    });