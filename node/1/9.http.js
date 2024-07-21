const http = require('node:http');

const server = http.createServer((req,res)=>{
    console.log('request received')
    res.end('hola mundo')

})

//Asignando un puerto
// server.listen(1234,()=>{
//     console.log('server listening on port 1234')
// })

//Busqueda de un puerto disponible
server.listen(0,()=>{
    console.log(`server listening on port ? http://localhost:${server.address().port}`)
})
