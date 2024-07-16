const os = require ('node:os')

console.log('informacion del sistema operativo')
console.log('________________________________')
console.log('Nombre del sistema operativo',os.platform())
console.log('Version del sistema operativo',os.release())
console.log('Arquitectura',os.arch())
console.log('CPs',os.cpus())//Tipos de procesadores
console.log('Memoria libre',os.freemem()/1024/1024)
console.log('Memoria total',os.totalmem()/1024/1024)
console.log('uptime',os.uptime()/60/60)