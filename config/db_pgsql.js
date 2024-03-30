/* const pool = new Pool({
    host: "localhost",
    user: "postgres",
    port: "5432",
    database: "postgres",
    password: "123456",
}); */

//con variables de entorno
const pool = new Pool({ 
    user: process.env.USER, 
    host: process.env.HOST, 
    database: process.env.DATABASE, 
    password: process.env.PASSWORD 
});