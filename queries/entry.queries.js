const queriesEntries = {
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
        `
    }

    module.exports = queriesEntries;