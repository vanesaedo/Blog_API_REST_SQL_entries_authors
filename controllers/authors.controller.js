const author = require('../models/authors.model'); // Importar el modelo de la BBDD


// GET http://localhost:3000/authors --> ALL
const getAllAuthors = async (req, res) => {
   authors = await author.getAllAuthors();
   res.status(200).json(authors);
}

// GET http://localhost:3000/authors?id_author=1 --> by email
const getAuthor = async (req, res) => {
    let authors;
    if (req.query.email) {
        authors = await author.getAuthorsByEmail(req.query.email);
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
    const newAuthor = req.body; // {name,surname,email,image}
    const response = await author.createAuthor(newAuthor);
    res.status(201).json({message: `usuario creado: ${req.body.email}.`,
    //data:newAuthor
    })
        
    };



const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {name,surname,email,image,old_email}
    const response = await author.updateAuthor(modifiedAuthor);
    res.status(200).json({message: `usuario actualizado: ${req.body.email}.`});
}


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
    res.status(200).json({message: `Se ha borrado el autor con email ${email}`}); // [] with authors found
}
module.exports = {
    getAuthor,
    getAllAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}