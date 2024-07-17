const fs = require('node:fs/promises')

console.log('1 Leyendo el primer archivo ...')

fs.readFile('./archivo.txt','utf-8')
.then(text =>{
    console.log('Primer texto',text )

})

console.log(' --- Haciendo cosas mientras lee el archivo')



console.log(' 2 Leyendo el segunso archivo ...')
 fs.readFile('./archivo2.txt','utf-8')
 .then(secondText=>{
    console.log('Segundo texto',secondText)
 })
