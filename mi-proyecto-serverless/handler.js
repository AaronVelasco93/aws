// handler.js

// Ejemplo de función "hello" para Serverless Framework
const hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hola desde Serverless Framework! de forma local'
        })
    };
};

module.exports = {
    hello
};




// // Ejemplo de función "helloUser" para Serverless Framework
// module.exports.helloUser = async (event) => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({
//             message: `Hola ${event.pathParameters.name}`,
//             input: event,
//         }, null, 2), // Reemplazador nulo y espaciado de 2 espacios
//     };
// };
module.exports.helloUser = async (event) => {
    const name = event.pathParameters.name; // Capturar el valor de `name` desde la ruta
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: `Hola ${event.pathParameters.name}`,
            input: event,
        }),
    };
};
