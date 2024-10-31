const express = require('express'); //Importacion del modulo de express
const app = express(); // Crea una instancia de un aplicacion de express
const PORT =3000;//Definimos el puerto que vamos a ocupar

const routes = require('./routes');//importa las rutas definidas

//Middleware
//El Milddleware es una funcion que se ejecuta durante el ciclo de vida de una solicitud del servidor
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);//Imprime el metodo y la URL de cada solicitud
    next();//Pasa a el siguiente middleware o ruta
});

//Manejo de datos con Formato JSON
app.use(express.json()); // Middleware para parsear JSON
app.post('/data', (req, res) => {
  const data = req.body; // Obtiene los datos del cuerpo de la solicitud
  res.send(`Datos recibidos: ${JSON.stringify(data)}`); // Envía una respuesta con los datos recibidos
});


app.use('/', routes);//usamos las ruras importadas


//Servidor
// Inicia el servidor y escucha en el puerto especificado
app.listen(PORT,()=>{
 console.log(`El servidor esta en funcionamiento: http://localhost:${PORT}`);
});

