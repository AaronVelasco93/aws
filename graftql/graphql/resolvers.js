const Book =require ('../models/book');
const Author =require('../models/author');
//Definiendo lo resolvers
const resolvers={
    Query:{
        hello:()=> 'hola mundo',
        books:async ()=>await Book.find(),
        bookByTitle:async (_,{title})=> await Book.findOne({title}),
        bookByAuthor: async (_,{author})=> await Book.find({author}),
        authors:()=> async() => await Author.find().populate('books'),
    },
    Mutation:{
        addBook:async (_,{title,author,anioPublicado})=>{
            let book = new Book({title,author,anioPublicado});
            await book.save();

            //Logica para agregar autores
            let authorObj= await Author({name:author,books:[]});
            if(!authorObj){
               authorObj = new Author({name:author,books:[]});
            }
            authorObj.books.push(book);
            await authorObj.save();

            return book;
        },
    },
};

module.exports = resolvers;