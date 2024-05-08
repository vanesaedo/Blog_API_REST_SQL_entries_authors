const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

//getEntries
// if(hay email)
//     busca por mail
// else
//     busca todo


// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por email
const getEntries = async (req, res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
    }
    else {
        entries = await entry.getAllEntries();
    }
    res.status(200).json(entries); // [] con las entries encontradas
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

/*
{
        title: "Nos vamos de tortillas",
        content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
        date: "2021-12-25",
        category: "sucesos",
        email: "alejandru@thebridgeschool.es",
        old_title: "Noticia: Un panda suelto por la ciudad"
    }
*/

const updateEntry = async (req, res) => {
    const editEntryTitle = req.params.title;
    const modifiedEntry = req.body; // {title,content,date,category,email,old_title}
    const response = await entry.updateEntry(modifiedEntry, editEntryTitle);
    res.status(200).json({
        "items_updated": response,
        data: modifiedEntry
    });
}

const deleteEntryByTitle = async (req, res) => {
try{     
    if (req.params.title) {
        entryToDelete = await entry.deleteEntryByTitle(req.params.title);
        console.log(entryToDelete);
        res.status(200).json({message: `Se ha borrado la entry `}); // [] con las entries encontradas
    }
  
    else {
        res.status(400).json({message:"title don't recieved"})
    }
}
catch (error) {
    console.log(error.message)
    res.status(500).json({error:error.message});

}
}
module.exports = {
    getEntries,
    createEntry,
    updateEntry,
    deleteEntryByTitle
}