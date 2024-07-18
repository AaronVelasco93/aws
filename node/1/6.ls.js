/*
//Con callback (llamdas)
const fs = require('node:fs');

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
//APLICACION CON PROMESAS

const fs = require('node:fs/promises');

fs.readdir('.')
.then(files =>{
    files.forEach(file =>{
        console.log(file)
     })
    })
.catch(err => {
    if(err){
        console.error('Error en el directorio:',err)
        return;
    }
    })


