const express = require('express');


// 2. Rutas de entries
// Llamand a entriesControlers
const entriesController = require("../controllers/entries.controller");
// LLamando al objeto Router de express para que haga lo propio con sus métodos cuando los llamemos abajo
const router = express.Router();


router.get('/api/entries', entriesController.entryNoId);



module.exports = router;