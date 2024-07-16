import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'
//import os from 'node'

console.log('informacion del sistema operativo')
console.log('________________________________')
console.log('Nombre del sistema operativo',platform())
console.log('Version del sistema operativo',release())
console.log('Arquitectura',arch())
console.log('CPs',cpus())//Tipos de procesadores
console.log('Memoria libre',freemem()/1024/1024)
console.log('Memoria total',totalmem()/1024/1024)
console.log('uptime',uptime()/60/60)