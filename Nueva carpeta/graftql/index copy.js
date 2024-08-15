const {ApolloServer, gql}= require ('apollo-server');

//Definir los esquemas
const typeDefs = gql`
     type Book{
        title: String
        author: String
        anioPublicado:Int
     }
    type Author{
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
        books:()=>books,
        bookByTitle:(_,{title})=>books.find(book=>book.title===title),
        bookByAuthor:(_,{author})=>books.filter(book=>book.author===author),
        authors:()=>authors,
    },
    Mutation:{
        addBook:(_,{title,author,anioPublicado})=>{
            const newBook ={title, author,anioPublicado};
            books.push(newBook);
            //Logica para agregar autores
            let authorObj=authors.find(a=> a.name === author);
            if(!authorObj){
                authorObj={name:author,books:[]};
                authors.push(authorObj);
            }
            authorObj.books.push(newBook);
            return newBook;
        },
    },
};

//creacion de instancia de Apollo Server
const server = new ApolloServer({typeDefs, resolvers});

server.listen().then(({url})=>{
    console.log(`Servidor listo desde ${url}`)
});