const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

//http://localhost:3000/api/authors
router.get('/', authorsController.getAllAuthors);

//http://localhost:3000/api/authors?email=birja@thebridgeschool.es
router.get('/?', authorsController.getAuthor);

//http://localhost:3000/api/authors/ 
router.post('/', authorsController.createAuthor);

//http://localhost:3000/api/authors/name=Carla&surname=Abril&email=ca@mail.com&image=https://randomuser.me/api/portraits/thumb/men/75.jpg&old_email=muchelle@thebridgeschool.es
router.put('/?', authorsController.updateAuthor);

//http://localhost:3000/api/authors/9
router.delete('/?', authorsController.deleteAuthor);

module.exports = router;