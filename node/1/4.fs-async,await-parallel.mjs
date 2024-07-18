import { readFile } from "fs/promises";
Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text,secondText])=>{
    console.log('Primer archivo',text)
    console.log('Segundo archivos',secondText)
})

/*
Promise.all([
    readFile('./archivo.txt','utf-8'),
    readFile('./archivo2.txt','utf-8')
]).then(([text,secondText])=>{
    console.log('Primer archivo',text)
    console.log('Segundo archivos',secondText)
})

*/