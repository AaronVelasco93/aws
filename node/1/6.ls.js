/*
//Con callback (llamdas)
/* Importa el módulo fs (file system) que permite interactuar con el sistema de archivos.
 Este módulo proporciona funciones para trabajar con archivos y directorios (crear, leer, escribir, etc.).*/
//const fs = require('node:fs');
//Esta es una función del módulo fs que lee el contenido de un directorio.
/*
fs.readdir('.',(err,files)=>{ 
     if(err){
         console.error('Error en el directorio:',err)
         return;
     }
     files.forEach(file => {
        console.log(file)
     })
 
})
*/


const fs = require('node:fs/promises');
fs.readdir('.')
    .then(files => {
        files.forEach(file => {
            console.log(file)
        })
    })
    .catch(err => {
        if (err) {
            console.error('Error en el directorio:', err)
            return;
        }
    });


