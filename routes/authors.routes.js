// AUTHORS ROUTES

const express = require('express');
const routes = express.Router();


const authorsController = require("../controllers/authors.controller");

// POST: localhost:3000/api/entries/new
// Add new author
routes.post('/', authorsController.createAuthor);

// DELETE: http://localhost:3000/api/entries?id_author=1
// Delete author by id
routes.post('/', authorsController.deleteAuthor);

// DELETE: http://localhost:3000/api/authors
// delete authors table
routes.delete('/', authorsController.deleteAuthorsTable)

module.exports = routes;