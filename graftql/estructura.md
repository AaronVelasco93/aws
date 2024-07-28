src/config/db.js: Archivo para la configuración de la conexión a MongoDB.
src/models/: Carpeta que contiene los modelos de Mongoose (book.js y author.js).
src/graphql/typeDefs.js: Archivo que define el esquema de GraphQL.
src/graphql/resolvers.js: Archivo que define los resolvers de GraphQL.
src/graphql/schema.js: Archivo que configura Apollo Server.
src/index.js: Archivo principal que conecta a la base de datos e inicia el servidor.


graphql-apollo-mongodb
├── src
│   ├── config
│   │   └── db.js
│   ├── models
│   │   ├── author.js
│   │   └── book.js
│   ├── graphql
│   │   ├── schema.js
│   │   ├── resolvers.js
│   │   └── typeDefs.js
│   └── index.js
├── package.json
└── README.md