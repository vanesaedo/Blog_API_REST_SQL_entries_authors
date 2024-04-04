const express = require('express');
const router = express.Router();
const controllers = require('../controllers/entries.controller')

router.get('/authors/all', controllers.hello);

module.exports = router;