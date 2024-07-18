const path = require('node:path');
//Barra separadores de carpetas segun SO
console.log(path.sep)

//Unir rutas con path.join
const filePath = path.join('content','subfolder','test.txt') 
console.log(filePath)

const base = path.basename('.temp/aaron/contraseñas.txt')
console.log(base)

const filename = path.basename('.temp/aaron/contraseña.txt','.txt')
console.log(filename)
const extension = path.extname('image.jpg')
console.log(extension)
