  const fs = require('node:fs/promises');
  const path = require('node:path');
  const folder = process.argv[2]?? '.';
  
  async function ls (folder){
    let files;
    try{
        files = await fs.readdir(folder)
  
    }catch{
        console.error(`No se pudo leer el directorio ${folder}`);
        process.exit(1);
    }

    const filesPromises = files.map( async file =>{
         const filePath=path.join(folder, file)
         let stats
         try{
             stats = await fs.stat(filePath) //informacion del archivos
         }catch{
            console.error(`No se pudo leer el archivo ${filePath}`);
            process.exit(1);
         }
         const isDirectory = stats.isDirectory()
         const fileType = isDirectory ? 'd': 'f ';
         const fileSize = stats.size;
         const fileModified = stats.mtime.toLocaleString() ;
         return `${fileType} ${file.padEnd(20)} ${fileSize.toString().padStart(10)} ${fileModified}`
    })

   const filesInfo = await Promise.all(filesPromises)
    
    filesInfo.forEach(fileInfo => console.log(fileInfo))
   
  }
  
ls(folder)

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


  /*
  
   .then(files =>{
        files.forEach(file =>{
            const filePath = path.join(folder, file)
            fs.stat(filePath)
        })
    })
    .catch(err =>{
        if(err){
            console.error('Error leyendo directorio: ',err)
            return;
        }
    })
  */