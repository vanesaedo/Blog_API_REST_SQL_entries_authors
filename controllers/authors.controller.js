const author = require('../models/author.model');
const queries = require("../queries/authors.queries");


const getAuthors = async (req.res) => {
    let authors;
    if (req.author){
        authors = await author.createAuthors;
    } else {
        authors = await author.getAllAuthors();
    } 
    res.status(200).json(authors);

} 


module.exports = {};