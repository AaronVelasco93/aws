const http = require('node:http');

const server = http.createServer((req,res)=>{
    console.log('request received')
    res.end('hola mundo')

})

//Asignando un puerto
 server.listen(4568,()=>{
     console.log(`Escuhamos desde el puerto: 6666 http://127.0.0.1:${server.address().port}`)
 })

//Busqueda de un puerto disponible
/*
server.listen(0,()=>{
    console.log(`server listening on port ? http://localhost:${server.address().port}`)
})
*/