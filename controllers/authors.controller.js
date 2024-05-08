const author = require('../models/authors.model'); // Importar el modelo de la BBDD


// GET http://localhost:3000/authors --> ALL
const getAllAuthors = async (req, res) => {
    authors = await author.getAllAuthors();
    res.status(200).json(authors);
}

// GET http://localhost:3000/authors?id_author=1 --> by email
const getAuthorByEmail = async (req, res) => {
    let authors;
    if (req.params.email) {
        authors = await author.getAuthorByEmail(req.params.email);
    }
    else {
        authors = await author.getAllAuthors();
    }
    res.status(200).json(authors); // [] con los autores encontrados
}

//createAuthor
// POST http://localhost:3000/api/authors
// let newAuthor = {
//     name:"Carmen",
//     surname:"González",
//     email:"carmen@thebridgeschool.es",
//     image:"https://randomuser.me/api/portraits/thumb/men/76.jpg"}

// Crear author por email
const createAuthor = async (req, res) => {
    try {
        const newAuthor = req.body; // {name,surname,email,image,bio}
        const response = await author.createAuthor(newAuthor);
        res.status(201).json({
            "items_created": response,
            data: newAuthor
        })

    }

    catch (error) {

        res.status(500).json("Can't create author");
    }

};



const updateAuthorByEmail = async (req, res) => {
    
        const editAuthorEmail = req.params.email;
        console.log(editAuthorEmail);
        const modifiedAuthor = req.body; // {name,surname,email,image,bio,old_email}
        const response = await author.updateAuthorByEmail(modifiedAuthor, editAuthorEmail);
        res.status(200).json({
            "usuario actualizado": response, data: modifiedAuthor
        });}
  

// updateAuthor = {
//     name:"Carmen",
//     surname:"Ramírez",
//     email:"cm@thebridgeschool.es",
//     image:"https://randomuser.me/api/portraits/thumb/men/76.jpg"}

const deleteAuthor = async (req, res) => {

    if (req.query.id_author) {
        authorToDelete = await author.deleteAuthor(req.query.id_author);
    }
    else {
        authors = await authorToDelete.getAllAuthors();
    }
    res.status(200).json({ message: `Se ha borrado el autor con email ${email}` }); // [] with authors found
}
module.exports = {
    getAuthorByEmail,
    getAllAuthors,
    createAuthor,
    updateAuthorByEmail,
    deleteAuthor
}