// Importar el modulo del servidor
const express = require('express');

//creamos una instancia de una aplicacion de Express
const app = express();
// Definimos el puerto en que se sejecutara el servidor
const PORT = process.env.PORT||3009;


/*Milddleware para servir archivos estaticos desde la carpeta public
Un middleware puede realizar una o varias de las siguientes acciones:

Ejecutar cualquier código.
Modificar los objetos de solicitud y respuesta (por ejemplo, agregando propiedades).
Finalizar el ciclo de solicitud-respuesta (enviando una respuesta al cliente).
Invocar el siguiente middleware en la pila (llamando a next()).
*/

app.use(express.static('public'));

//Ruta que principal que nos ayuda para la pagina web
app.get('/',(req,res)=>{
    //enviamos el archivos HTML al cliente
    res.sendFile(__dirname+'/public/index.html');
});

// Nueva ruta que sirve la página "Acerca de Nosotros"
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html');
  });
  
//Iniciamos el servidor
app.listen(PORT,()=>{
    console.log(`Servidor iniciando en http://localhost:${PORT}`);
});