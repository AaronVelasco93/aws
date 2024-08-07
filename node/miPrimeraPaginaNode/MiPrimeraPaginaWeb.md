Estructura del Proyecto
1. Primero, organizaremos la estructura de nuestro proyecto para mantener un código limpio y modular.
    my-web-app/
    ├── public/
    │   ├── css/
    │   │   └── styles.css
    │   └── index.html
    ├── src/
    │   └── server.js
    ├── package.json
    └── .gitignore
2. Inicializar el Proyecto
Primero, crea la carpeta del proyecto y navega a ella:
    mkdir my-web-app
    cd my-web-app
Luego, inicializa el proyecto de Node.js:
    npm init -y
Esto generará un archivo package.json con la configuración básica del proyecto.

3. Instalar Express
Express es un marco minimalista para Node.js que facilita la creación de aplicaciones web y APIs.

    npm install express
4. Crear el Servidor (server.js)
Dentro de la carpeta src, crea el archivo server.js con el siguiente contenido:

    // Importamos el módulo express
    const express = require('express');

    // Creamos una instancia de una aplicación de Express
    const app = express();

    // Definimos el puerto en el que se ejecutará el servidor
    const PORT = process.env.PORT || 3000;

    // Middleware para servir archivos estáticos desde la carpeta 'public'
    app.use(express.static('public'));

    // Ruta principal que servirá la página web
    app.get('/', (req, res) => {
    // Enviamos el archivo HTML al cliente
    res.sendFile(__dirname + '/public/index.html');
    });

    // Iniciamos el servidor
    app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });

Explicación:
    express.static('public'): Middleware para servir archivos estáticos (HTML, CSS, imágenes) desde la carpeta public.
    app.get('/'): Define la ruta principal (/) que sirve el archivo HTML principal.
    app.listen(PORT, ...): Inicia el servidor en el puerto especificado.
5. Crear la Página HTML (index.html)
Dentro de la carpeta public, crea el archivo index.html:

    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Mi Página Web</title>
        <link rel="stylesheet" href="css/styles.css">
    </head>
    <body>
        <header>
            <h1>Bienvenido a Mi Página Web</h1>
        </header>
        <main>
            <p>Esta es una página simple servida desde un servidor Node.js con Express.</p>
        </main>
        <footer>
            <p>&copy; 2024 Mi Nombre</p>
        </footer>
    </body>
    </html>

Explicación:
    <link rel="stylesheet" href="css/styles.css">: Enlaza el archivo CSS para darle estilo a la página.
    Estructura HTML básica: Incluye un encabezado, un contenido principal y un pie de página.
6. Agregar Estilos CSS (styles.css)
Dentro de la carpeta public/css, crea el archivo styles.css:

    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
    }

    header {
        background-color: #333;
        color: white;
        padding: 10px 0;
        text-align: center;
    }
    main {
        padding: 20px;
        text-align: center;
    }
    footer {
        background-color: #333;
        color: white;
        padding: 10px 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
Explicación:
Estilos básicos para el cuerpo, encabezado, contenido principal y pie de página.

Diseño responsive: El pie de página se posiciona en la parte inferior de la página y ocupa todo el ancho de la pantalla.

Resumen de Buenas Prácticas:
Estructura del proyecto organizada: Separación del código del servidor, archivos estáticos y configuraciones.
Uso de express.static: Para servir archivos estáticos de manera eficiente.
Modularidad: Separación de responsabilidades (servidor, HTML, CSS).
Uso de variables de entorno: Para configurar el puerto de manera flexible.