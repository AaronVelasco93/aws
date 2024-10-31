// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile) 


const {readFile}= require('node:fs/promises');
//funcion auto-invocable

(
    async()=>{
        
        console.log('1 Leyendo el primer archivo ...')
        const text = await readFile('./archivo.txt','utf-8')
        console.log('Primer text',text)

        console.log(' ---> Haciendo cosas mientras lee el archivo')

        console.log(' 2 Leyendo el segunso archivo ...')
        const secondText= await readFile('./archivo2.txt','utf-8')
        console.log('Segundo texto',secondText)
 
    }
)
();
