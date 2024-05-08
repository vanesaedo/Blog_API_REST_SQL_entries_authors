const queries = {
  getEntriesByEmail: `
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`,
  getAllEntries: `
        SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
        FROM entries AS e
        INNER JOIN authors AS a
        ON e.id_author=a.id_author
        ORDER BY e.title;
    `,
  createEntry: `INSERT INTO entries(title,content,id_author,category) 
    VALUES ($1,$2,
    (SELECT id_author FROM authors WHERE email=$3),$4)`,
  updateEntry: `UPDATE entries
    SET
        title=$1, 
        content=$2, 
        date=$3, 
        category=$4,
        id_author=(SELECT id_author FROM authors WHERE email = $5)
    WHERE 
        title = $6`,
  deleteEntryByTitle: `DELETE FROM entries
  WHERE title = $1;`,

  // AUTHORS

  getAuthorByEmail: `
    SELECT a.id_author,a.name,a.surname, a.email,a.image
    FROM authors AS a
    WHERE a.email=$1
    ORDER BY a.id_author;`,

  getAllAuthors: `
    SELECT a.id_author,a.name,a.surname, a.email,a.image, a.bio
    FROM authors AS a
    ORDER BY a.id_author;
    `,
  createAuthor: `
    INSERT INTO authors(name,surname,email,image,bio) 
    VALUES ($1,$2,$3,$4,$5)`,

  updateAuthorByEmail: `
    UPDATE author
    SET
        name=$1, 
        surname=$2, 
        email=$3, 
        image=$4,
        bio=$5
    WHERE 
        email = $6`,
  deleteAuthor: `DELETE FROM authors
  WHERE id_author = $1;`,

};
module.exports = queries;
