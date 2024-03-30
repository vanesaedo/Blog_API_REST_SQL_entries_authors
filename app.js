
const config = require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');//from morgan tutorial
const logger = require('./logger');//Instructions from Bunyan requirements. This code require Bunyan modules
const app = express();
const port = 3000;

//Morgan settings: to manage petitions
//For morgan use. I wrote this after "npm install express-request-id". The request id is added to the req object and can be retrieved by calling req.id
const addRequestId = require('express-request-id')();
const morgan = require('morgan');


morgan.token('id', function getId(req) {
    return req.id
});

var loggerFormat = ':id [:date[web]]" :method :url" :status :responsetime';


app.use(addRequestId);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));




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

//Bunyan
/* 
From Bunyan config: We then add logger for requests and use the concept of a child logger to log the request id and body */

app.use(function (req, res, next){
  var log = logger.loggerInstance.child({
      id: req.id,
      body: req.body
  }, true)
  log.info({req: req})
  next();
});

/* We also add a logger for responses. We need the log to happen after a response has been sent, like an ‘after’ hook */

app.use(function (req, res, next) {
  function afterResponse() {
      res.removeListener('finish', afterResponse);
      res.removeListener('close', afterResponse);
      var log = logger.loggerInstance.child({
          id: req.id
      }, true)
      log.info({res:res}, 'response')
  }
  res.on('finish', afterResponse);
  res.on('close', afterResponse);
  next();
});

/* We also log the endpoint . Replaced stuff with entries*/

app.post("/entries", function (req, res) {
  var response = {
      fullname: `${req.body.firstname} ${req.body.lastname}`
  }
  logger.logResponse(req.id, response, 200);
  res.status(200).send(response);
});

//Morgan: 

app.set('port', process.env.PORT || 8081);
const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
});

// Buyan
// Defining streams in logger.js ( is basically a definition of where the log output should go). We define two streams here stdout and an external file. In the logger.js file we update the loggerInstance variable */

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

app.get("/entries", function (req, res) {//entries replace tutorial example table
  res.status(200).send();
});




app.listen(config.PORT, config.HOST, function () {
  console.log(`App listening on http://${config.HOST}:${config.PORT}`);
});




