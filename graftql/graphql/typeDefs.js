const {gql}=require('apollo-server');
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

module.exports = typeDefs;
