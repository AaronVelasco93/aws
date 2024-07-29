Explicación del Código
src/config/db.js:

    Configura y establece la conexión a la base de datos MongoDB utilizando Mongoose.
src/models/user.js:

    Define el esquema y modelo de Mongoose para User.
    src/routes/userRoutes.js:

    Define las rutas para crear, leer, actualizar y eliminar usuarios.
    Utiliza los métodos de Mongoose para interactuar con la base de datos.
    src/views/index.ejs, src/views/create.ejs, src/views/edit.ejs:

    Plantillas EJS para las vistas de listar usuarios, crear usuarios y editar usuarios respectivamente.
src/app.js:

    Punto de entrada principal de la aplicación.
    Conecta a la base de datos, configura el motor de plantillas, define middleware, y establece las rutas.