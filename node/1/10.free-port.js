const net= require('node:net');

function findAvailablePort(desiredPort) {
    return new Promise((resolve, reject)=>{
        const server = net.createServer()
        server.listen(disiredPort,()=>{
            const {port}=server.address()
            server.close(()=>{
                resolve(port)
            })
        })

    server.on('erro',(err)=>{
        if(err.code === 'EADDRINUSE'){
            findAvailablePort(0).then(port=>resolve(port))
        }else{
            reject(err)
        }
    })
      
    })
}

module.exports={findAvailablePort}
