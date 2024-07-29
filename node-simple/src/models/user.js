const mongoose = require('mongoose');

//Definicion del esquema del usuario

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,//Campo obligatorio
    },
    age:{
        type: Number,
        require: true, //Campo obligatorio
    },
});

//Crear el modelo de usuario basado en el esquema
const User = mongoose.model('User', userSchema);
module.exports = User;//Exportamos el modelo para usarlos en otros archivos