
const miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const exito = false//Cambia a false para simular un error
        

        if(exito){
            resolve('La operacion fue un exito');
            

        }else{
            reject('hubo un problema en la operacion');
        }
    },2000);
});

//Manejo de la promesa

miPromesa
.then((resultado)=>{
    console.log(resultado);//Esto se ejecuta si la promesa se cumple
})
.catch((error)=>{
    console.error(error);//Esto se ejecuta si la promesa falla
});