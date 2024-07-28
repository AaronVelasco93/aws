const {ApolloServer, gql}= require ('apollo-server');
const connectDB = require('./db');
const {Book,Author} =require('./models');

//coneccion con la base de datos
connectDB();

//Definir los esquemas
const typeDefs = gql`
     type Book{
        id:ID!
        title: String
        author: String
        anioPublicado:Int
     }
    type Author{
        id:ID!
        name:String
        books:[Book]
    }

    type Query{
        hello: String
        books:[Book]
        bookByTitle(title:String!):Book
        bookByAuthor(author:String!):[Book]
        authors: [Author]
    
    }
    #Agregando mutaciones
    type Mutation{
        addBook(title:String!, author:String!,anioPublicado:Int!):Book
    }

`;
//Datos de Ejemplo
let books=[
    {
        title:'Lo cuatro acuerdos',
        author:'Don Miguel Ruiz',
        anioPublicado:2016,

    },
    {
        title:'El alquimista',
        author: 'Paulo Coelho',
        anioPublicado:1993,
    },
];


const authors =[
    {
        name:'Kate Chopin',
        books:[books[0]],
    },
    {
        name:'Paul Auster',
        books:[books[1]],
    },
]
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

//creacion de instancia de Apollo Server
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Servidor listo desde ${url}`)
});