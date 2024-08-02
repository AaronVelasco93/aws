const mongoose = require('mongoose');

    mongoose.connect('mongodb://localhost:27017/usuariosDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    });

    const User = mongoose.model('User', userSchema);

    const usuarios = [
    { name: 'Cinthya', age: 34 },
    { name: 'Carlos', age: 29 },
    { name: 'Ana', age: 25 }
    ];

    User.insertMany(usuarios)
    .then(() => {
        console.log('Usuarios agregados');
        mongoose.connection.close();
    })
    .catch(err => {
        console.error('Error al agregar usuarios:', err);
        mongoose.connection.close();
    });