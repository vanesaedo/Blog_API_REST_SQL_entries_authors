import { Pool } from 'pg';

//con variables de entorno
const pool = new Pool({ 
    user: process.env.USER, 
    host: process.env.HOST, 
    database: process.env.DATABASE, 
    password: process.env.PASSWORD 
})

