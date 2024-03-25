const queriesAll = {
    getAllEntries:`
        SELECT * FROM entries
        `,
    createEntry:`
        INSERT INTO entries(title,content,id_author,category)
        VALUES ($1,$2,
        (SELECT id_author FROM authors WHERE email=$3),$4)
        `,
    getEntriesByEmail:`
        SELECT e.title,e.content,e.id_author,e.category 
        FROM ENTRIES AS e 
        INNER JOIN authors AS a
        ON e.id_author=a.id_author
        WHERE a.e-mail = $1
        `,
    deleteEntry:`
        DELETE * 
        FROM Entries
        WHERE title = "S1"
        `,
    deleteAllEntries:`
        DELETE * 
        FROM entries
        `,
    deleteEntriesTable:`
        DROP TABLE entries
        `,
    createAuthor:`
        INSERT INTO authors (name,surname,email,image)
        VALUES ($1,$2,
        SELECT id_author FROM authors WHERE email=$3), $4`,
    deleteAuthor:`
        DELETE * 
        FROM authors
        WHERE email = "S1"
    `, 
    deleteAuthorsTable:`
        DROP TABLE authors`,
    }

    module.exports = queriesAll;
    
    //NOTA: Añadir también las queries para CREAR y BORRAR las tablas Author y Entry. 
    //Después, desde el fichero models/entry.js o models/author.js llamar a la query que necesitas importando el módulo.