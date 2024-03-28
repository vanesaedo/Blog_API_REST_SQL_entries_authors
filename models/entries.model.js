const {Pool} = require('pg');
const pool = require('../config/db_pgsql');


const queries = require("../queries/entry.queries");




const getEntriesByEmail = async (email) => {
    let client, result;
    try {
      client = await pool.connect(); // Espera a abrir conexion
      const data = await client.query(queries.getEntriesByEmail, [email]);
      result = data.rows;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      client.release();
    }
    return result;
  };
  



const getAllEntries = async () => {
    let connectionState, result;
    try {
        connectionState = await pool.connect();//aquí pido que habra una conexión (socket)?
        const data = await connectionState.query(queries.getAllEntries);//si conecta (try) almacena 
        result = data.rows;
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        connectionState.release();
    } return result;
};

module exports = {
    queries
}
