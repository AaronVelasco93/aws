const express = require('express');
const app= express();
const port = 3010;

//configuracion EJS como motor de plantillas

app.set('view engine', 'ejs');
//datos de ejemplo
const users = [
    { name: 'Cinthya', age: 34, _id: '1' },
    { name: 'Carlos', age: 29, _id: '2' },
    { name: 'Ana', age: 25, _id: '3' }
  ];

  //ruta principal para renderizar una vista usando EJS
  app.get('/',(req,res)=>{
        res.render('index',{users:users});
  });

  app.listen(port,()=>{
    console.log(`Servidor ejecutandose en http://localhost:${port}`);
  });