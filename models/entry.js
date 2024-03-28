const {Pool} = require('pg');
const pool = require('../config/db_pgsql');


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
    
    



const entries = {
    getAllEntries,
    getEntriesByEmail
} 

module.exports = entries;
