/* const { escapeLiteral } = require('pg');
const author = require('../models/author.model');//importando modelos
const queries = require("../queries/authors.queries");//importando queries


const getAuthors = async (req, res) => {
    let authors = req.authors;
    if (req.author){
        authors = await author.createAuthors;
    } else {
        authors = await author.getAllAuthors();
    } 
    res.status(200).json(authors);
} 

module.exports = getAuthors; */
