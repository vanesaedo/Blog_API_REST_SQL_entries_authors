// ENTRIES ROUTES

const express = require('express');
const routes = express.Router();

const entriesController = require("../controllers/entries.controller");

// POST: localhost:3000/api/entries/new
// create and add new entry
routes.post('/', entriesController.createEntry);

// GET ALL: localhost:3000/api/entries
// return all entries
routes.get('/', entriesController.getAllEntries);

// GET ENTRIES BY EMAIL: http://localhost:3000/api/entries?email=hola@gmail.com 
// return entry by email
routes.get('/', entriesController.getEntriesByEmail);

// GET ENTRIES BY EMAIL: http://localhost:3000/api/entries?id_author=1 
// return entry by email
routes.get('/', entriesController.getEntriesByIdAuthor);

// UPDATE: http://localhost:3000/api/entries?id_entry=1
// Modifies an entry
routes.put('/', entriesController.updateEntry)

// DELETE: http://localhost:3000/api/entries?id_entry=2
// remove the entry with id_entry = 2
routes.delete('/', entriesController.deleteEntry)

// DELETE: http://localhost:3000/api/entries/all
// remove all entries
routes.delete('/', entriesController.deleteAllEntries)

// DELETE: http://localhost:3000/api/entries
// remove entries table
routes.delete('/', entriesController.deleteEntriesTable)

// GET http://localhost:3000/api/entries?category=[?]
// return all entries wich category contents [this]

module.exports = routes;

