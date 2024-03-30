
const config = require('./config.js');
const express = require('express');
const app = express();
const port = 3000;

//console.log(`NODE_ENV=${config.NODE_ENV}`);


const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

app.use(express.json());//parsea el body de las peticiones

// http//locallhost:3000/
app.get('/', (req, res) => {
  res.send('Hello world');
});

//API
app.use('/api/authors',authorsRoutes);
app.use('/api/entries',entriesRoutes);


app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});






//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones

// http://localhost:3000/
    app.get("/", (req, res) => {
    res.status(200).send("Home. Welcome to backend!");
  });
  


// http://localhost:3000
app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});


