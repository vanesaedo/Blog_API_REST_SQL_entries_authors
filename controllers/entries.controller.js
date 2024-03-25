const entry = require('../models/entry');

const getEntries = async (req,res) => {
    let entries;
    if (req.query.email) {
        entries = await entry.getEntriesByEmail(req.query.email);
               
    } else {
        entries = await entry.getAllEntires();
    }
    res.status(200).json(entries);

}

module.exports = getEntries;