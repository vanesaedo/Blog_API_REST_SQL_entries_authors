const pool = require('../config/db_pgsql');
const entries = require('../queries/entries.queries')

// Consulta sin el dato que queremos
const getEntriesNoId = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        console.log(client)
        const data = await client.query(entries.searchEntriesNoIdReturn)/* queries.getEntriesByEmail, [email] */
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};
//-------
const getEntriesByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        console.log(client)
        const data = await client.query("SELECT * FROM authors;"/* queries.getEntriesByEmail, [email] */);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
};


const models= {
    getEntriesByEmail,
    getEntriesNoId
}


module.exports = models;