const connectDB = require('./config/db');
const server = require('./graphql/schema');

//coneccion con la base de datos
connectDB();





server.listen().then(({url})=>{
    console.log(`Servidor listo desde ${url}`)
});