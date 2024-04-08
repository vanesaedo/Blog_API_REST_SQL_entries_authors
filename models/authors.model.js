const { Pool } = require("pg");
const queries = require("./queries"); // Queries SQL

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: "5432",
  database: "postgres",
  password: "123456",
});

// GET
const getAuthorsByEmail = async (email) => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAuthorsByEmail, [email]);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// GET
const getAllAuthors = async () => {
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.getAllAuthors);
    result = data.rows;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// CREATE
const createAuthor = async (author) => {
  const { name, surname, email, image } = author;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.createAuthor, [
      name,
      surname,
      email,
      image,
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

//UPDATE

/*
{
    name: "Carlos",
    surname: "Smith",
    email: "casmith@thebridgeschool.es",
    image: "https://randomuser.me/api/portraits/thumb/women/72.jpg"
}
*/

const updateAuthor = async (author) => {
  const { name, surname, email, image, old_email} = author;
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.updateAuthor, [
      name,
      surname,
      email,
      image,
      old_email
    ]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};

// DELETE

const deleteAuthor = async (id_author) => {
 
  let client, result;
  try {
    client = await pool.connect(); // Espera a abrir conexion
    const data = await client.query(queries.deleteAuthor, [id_author]);
    result = data.rowCount;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    client.release();
  }
  return result;
};


const authors = {
  getAuthorsByEmail,
  getAllAuthors,
  createAuthor,
  updateAuthor,
  deleteAuthor
};

module.exports = authors;

// Pruebas
/*
getEntriesByEmail("birja@thebridgeschool.es")
    .then(data=>console.log(data))
*/

/*
getAllEntries()
.then(data=>console.log(data))
*/

/* let newEntry = {
    title: "Se acabaron las mandarinas de TB",
    content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
    email: "guillermu@thebridgeschool.es",
    category: "sucesos"
}

createEntry(newEntry)
    .then(data => console.log(data)) */

/*
   const entry_to_update =  {
        title: "Nos vamos de tortillas",
        content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
        date: "2021-12-25",
        category: "sucesos",
        email: "alejandru@thebridgeschool.es",
        old_title: "Noticia: Un panda suelto por la ciudad"
    }

    updateEntry(entry_to_update)
    .then(data => console.log(data)) 
    */
