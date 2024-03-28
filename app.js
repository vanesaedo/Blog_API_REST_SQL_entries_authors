const express = require("express");
const app = express();
const port = 3000;

const authorsRoutes = require("./routes/authors.routes")
const entriesRoutes = require("./routes/entries.routes")

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


