const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    anioPublicado:{
        type:Number,
        required:true,
    },
});

const authorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Book',
    }],
});
const Book = mongoose.model('Book',bookSchema);
const Author = mongoose.model('Author',authorSchema);

module.exports = {Book,Author};