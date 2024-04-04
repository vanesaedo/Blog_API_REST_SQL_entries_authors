const entryQueries = {
    
    /* -- Crear tabla entries */
    createEntriesTable: `
        CREATE TABLE entries (
        id_entry serial NOT NULL PRIMARY KEY,
        title varchar(100) NOT NULL UNIQUE,
        content text NOT NULL,
        date date DEFAULT CURRENT_DATE,
        id_author int,
        category varchar(15),
        FOREIGN KEY (id_author) REFERENCES authors(id_author)
        );`,
   
        /* -- Insertar datos en tabla entries */
    insertEntryValues: `
        INSERT INTO entries(title,content,id_author,category)
        VALUES
        ('Noticia: SOL en Madrid','Contenido noticia 1',(SELECT id_author FROM authors WHERE email='alejandru@thebridgeschool.es'),'Tiempo'),
        ('Noticia: Un panda suelto por la ciudad','El panda se comió todas las frutas de una tienda',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
        ('El rayo gana la champions','Victoria por goleada en la final de la champions',(SELECT id_author FROM authors WHERE email='albertu@thebridgeschool.es'),'Deportes'),
        ('Amanece Madrid lleno de arena','La calima satura Madrid de arena. Pérdidas millonarias',(SELECT id_author FROM authors WHERE email='birja@thebridgeschool.es'),'Sucesos'),
        ('Descubren el motor de agua','Fin de la gasolina. A partir de ahora usaremos agua en nuestros coches',(SELECT id_author FROM authors WHERE email='alvaru@thebridgeschool.es'),'Ciencia');`,
    
    /* -- Buscar entries por email usuario */
    searchAuthorByEmail: `
        SELECT * FROM entries WHERE id_author=(SELECT id_author FROM authors WHERE email='alejandro@thebridgeschool.es');`,
    
    /* -- Buscar datos por email de usuario y cruzar datos */
    searchByEmailJoining: `SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
        FROM entries AS e
        INNER JOIN authors AS a
        ON e.id_author=a.id_author
        WHERE a.email='alejandru@thebridgeschool.es'
        ORDER BY e.title;`,
    
    /* -- Buscar datos por email de 2 usuarios y cruzar datos */
    searchByTwoUsersEmailJoining: `SELECT entries.title,entries.content,entries.date,entries.category,authors.name,authors.surname,authors.image
        FROM entries
        INNER JOIN authors
        ON entries.id_author=authors.id_author
        WHERE authors.email='alejandru@thebridgeschool.es' OR authors.email='alvaru@thebridgeschool.es' OR authors.email='albertu@thebridgeschool.es'
        ORDER BY entries.title;`,
    
    searchEntriesNoIdReturn: `SELECT entries.title,entries.content,entries.date,entries.category,authors.name,authors.surname,authors.image
        FROM entries
        INNER JOIN authors
        ON entries.id_author=authors.id_author
        ORDER BY entries.title;`,
    /* -- Borrar tabla entries */
    borrarEntries: `DROP table entries;`,
    /* -- Borrar tabla authors */
    borrarAuthors: `DROP table entries;`,
    modfyEntry: `
        UPDATE entries 
        SET content = 'Noticia nueva', date = '2025-05-05', category = 'nueva categoría'
        WHERE title = 'Noticia: SOL en Madrid';`
    
}


module.exports = entryQueries;







