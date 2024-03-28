const queriesEntries = {
    createEntry:`
        INSERT INTO entries(title,content,id_author,category)
        VALUES ($1,$2,
        (SELECT id_author FROM authors WHERE email=$3),$4)
        `,
    getAllEntries:`
        SELECT * FROM entries
        `,
    getEntriesByEmail:`
        SELECT e.title,e.content,e.id_author,e.category 
        FROM ENTRIES AS e
        INNER JOIN authors AS a
        ON e.id_author=a.id_author
        WHERE a.e-mail = $1
        `,
    getEntriesByIdAuthor:`
        SELECT title, content, id_author, category 
        FROM ENTRIES 
        WHERE id_author = $1
         `
        ,
    updateEntry:`
        UPDATE entries 
        SET title = $2, content = $3, date = S4, id_author = $5, category = S6
        WHERE id_entry = $1
        `
        ,
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
        SELECT id_author FROM authors WHERE email=$3), $4`
        ,
    deleteAuthor:`
        DELETE * 
        FROM authors
        WHERE email = "S1"
        `, 
    deleteAuthorsTable:`
        DROP TABLE authors` 
    }

module.exports = queriesEntries;

/* Evita inseción de registros duplicados
ALTER TABLE `table` ADD UNIQUE (
`CODIGO` ,
`VALOR` ,
`FECHA`
);
*/




