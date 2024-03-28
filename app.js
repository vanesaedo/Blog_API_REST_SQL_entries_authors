
const config = require('./config.js');
const express = require('express');
const app = express();
const port = 3000;


console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get('/', (req, res) => {
  res.send('Hello world');
});
app.use('/', entries.entriesRoutes);
app.use('/', authors.authorsRoutes);


app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});





const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

//Middlewares
app.use(express.json()); // Para parsear el body de las peticiones

// http://localhost:3000/
    app.get("/", (req, res) => {
    res.status(200).send("Home. Welcome to backend!");
  });
  
  //API
  app.use('/api/authors',authorsRoutes);
  app.use('/api/entries',entriesRoutes);

  // http://localhost:3000
  app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`);
  });


