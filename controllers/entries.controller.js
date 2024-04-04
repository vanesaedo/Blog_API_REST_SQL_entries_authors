const models = require('../models/entries.model')

const entryNoId = async function (req, res) {

    const result = await models.getEntriesNoId()

    res.json({ msg: result })
}

const hello = async function (req, res) {
    console.log('Hola')

    const result = await models.getEntriesByEmail()

    res.json({ msg: result })

}


module.exports = {
    hello,
    entryNoId
};