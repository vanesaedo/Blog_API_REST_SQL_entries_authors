const queriesAuthors = {
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
    DROP TABLE authors`
}

module.exports = queriesAuthors;