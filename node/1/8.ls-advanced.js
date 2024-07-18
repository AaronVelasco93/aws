  const fs = require('node:fs/promises');
  const folder = process.argv[2]?? '.';
  
  
  fs.readdir(folder)
  .then(files =>{
      files.forEach(file =>{
          console.log(file)
      })
  })
  .catch(err =>{
      if(err){
          console.error('Error leyendo directorio: ',err)
          return;
      }
  })
  
/*
const fs = require('fs').promises;
const folder = process.argv[2] ?? '.';

fs.readdir(folder)
  .then(files => {
    files.forEach(file => {
      console.log(file);
    });
  })
  .catch(err => {
    console.error('Error leyendo directorio:', err);
  });
  */