require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const routerAuthor = require('./routes/authors.routes')
const routerEntries = require('./routes/entries.routes')

app.use('/api', routerAuthor);


//http://localhost:3000/api/entries
app.use('/', routerEntries);




/* 
// requerimientos a Routes
const entriesRoutes = require('./routes/entries.routes')
const authorsRoutes = require('./authors/authors.routes')

app.get

app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
})

//Middlewares
app.use(express.json()) //Parsea el body de las peticiones

//Rutas
 */
app.listen(port, () => {
    console.log('All runing ok on port 3000')
})