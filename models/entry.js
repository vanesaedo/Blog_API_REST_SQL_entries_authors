/* const {Pool} = require('pg');
const pool = require('../utils/db_pgsql'); */

const {Pool} = require('pg');
const pool = require('../config/db_pgsql');
//ESO ESTÁ COMENTADO PORQUE HEMOS EXTERNALIZADO LOS DATOS DE CONEXIÓN ALL ARCHIVO config/db_pgsql
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

const getEntriesByEmail = async (email) => {
    
    let client, result;
    try {
    const data = await client.query(queries.getEntriesByEmail,[email]);
    result = data.rows;
        
} catch (err) {
        console.log(err);
        throw err;
    }finally {
        client.release();
    }
        return result;
};
    
    



const entries {
    getAllEntries,
    getEntriesByEmail
} 

module.exports = entries;
