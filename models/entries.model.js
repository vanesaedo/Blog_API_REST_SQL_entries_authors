const {Pool} = require('pg');
const pool = require('../config/db_pgsql');

//const {pool} = require("pg");
//const queries = require("./queries/entry.queries.js");
//Esto se comenta porque se externaliza esta información a config/db_pgsql.js.
/* const pool = new Pool ({
    host: "localhost",
    user:"postgres",
    port: "5432",
    database: "postgres",
    password: "123456"
}); */

const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllEntries);
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    } return result;
};


const entries {
    getAllEntries,
}
module.exports = entries;