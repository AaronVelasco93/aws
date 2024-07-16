//LECTURA DE ARCHIVOS SINCRONO
/*
const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')
const text = fs.readFileSync('./archivo.txt','utf-8')
console.log('Haciendo cosas mientras lee el archivo')
console.log(text)


console.log('Leyendo el segunso archivo ...')
const Secondtext = fs.readFileSync('./archivo2.txt','utf-8')
console.log(Secondtext)
*/
//LECTURA DE ARCHIVOS ASINCRONOS (promesas)
const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')

fs.readFile('./archivo.txt','utf-8',(err, text)=>{
    console.log(text)
})

console.log('Haciendo cosas mientras lee el archivo')



console.log('Leyendo el segunso archivo ...')
 fs.readFile('./archivo2.txt','utf-8',(err ,Secondtext)=>{
    console.log(Secondtext)
    
 })
