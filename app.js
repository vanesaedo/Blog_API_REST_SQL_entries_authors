
const config = require('./config.js');
const express = require('express');
const bodyParser = require('body-parser');//from morgan tutorial
const app = express();
const port = 3000;

//Morgan settings: to manage gets

const addRequestId = require('express-request-id')();
const morgan = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/entries", function (req, res) {//entries replace tutorial example table
  res.status(200).send();
});

app.use(addRequestId);

morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]] ":method :url" :status :response-time';

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode < 400
    },
    stream: process.stderr
}));

app.use(morgan(loggerFormat, {
    skip: function (req, res) {
        return res.statusCode >= 400
    },
    stream: process.stdout
}));

app.post("/stuff", function (req, res) {

    var response = {
        fullname: `${req.body.firstname} ${req.body.lastname}`
    }
    res.status(200).send(response);
});

app.set('port', process.env.PORT || 8081);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});
//----------------end of morgan code
//console.log(`NODE_ENV=${config.NODE_ENV}`);


const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

app.use(express.json());//parsea el body de las peticiones

// http//locallhost:3000/
app.get('/', (req, res) => {
  res.send('Hello world');
});

//API
app.use('/api/authors',authorsRoutes);
app.use('/api/entries',entriesRoutes);


//For morgan use. I wrote this after "npm install express-request-id". The request id is added to the req object and can be retrieved by calling req.id
const addRequestId = require('express-request-id')();
app.use(addRequestId);

const morgan = require('morgan');
morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]]" :method :url" :status :responsetime';



app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});



