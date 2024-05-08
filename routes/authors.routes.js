const express = require('express');
// Rutas de productos
const authorsController = require("../controllers/authors.controller");
const { createAuthor } = require('../models/queries');
const router = express.Router();

//http://localhost:3000/api/authors
router.get('/', authorsController.getAllAuthors);//OK

//http://localhost:3000/api/authors/birja@thebridgeschool.es
router.get('/:email', authorsController.getAuthorByEmail);//OK

//http://localhost:3000/api/authors/ 
router.post('/new', authorsController.createAuthor);//OK


//http://localhost:3000/api/authors/edit/birja@thebridgeschool.es
router.put('/edit/:email', authorsController.updateAuthorByEmail);


//http://localhost:3000/api/authors/9
router.delete('delete/:email', authorsController.deleteAuthor);

module.exports = router;

/* {
  "name":"Alicia",
  "surname": "Torres",
  "email":"alicia@mail.com",
  "image":"https://previews.123rf.com/images/maxpetrov/maxpetrov1804/maxpetrov180400003/100040135-retrato-al-aire-libre-de-una-hermosa-pelirroja-pelirroja-mujer-menop%C3%A1usica-roja.jpg",
  "bio":"This is Alicia Torres' bio."
} */

/* {
    "name":"Mary",
    "surname": "Brown",
    "email":"mary@mail.com",
    "image":"https://imgs.search.brave.com/3m9tz585zkSI8FjTGiOyi4MZAkk1xBSXryTPdB-_yeM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnN0eWxlY3JhemUu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDEzLzExL0JlYXV0/aWZ1bC1DaGluZXNl/LVdvbWVuMTcuanBn/LndlYnA",
    "bio":"This is Mary Brown´s bio.",
    "old_email":"rachel@email"
  } */