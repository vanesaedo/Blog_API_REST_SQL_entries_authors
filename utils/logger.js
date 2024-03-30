//To config Bunyan, part of Morgan needs. 
/* We need the custom serializer to handle the differences between the Node core req object (http.IncomingMessage) and the Express req object. Specifically, to log req.originalUrl. */

//We create a new file named logger.js and instantiate the logger.

var bunyan = require('bunyan')
exports.loggerInstance = bunyan.createLogger({
    name: 'transaction-notifier',
    serializers: {
        req: require('bunyan-express-serializer'),
        res: bunyan.stdSerializers.res,
        err: bunyan.stdSerializers.err
    },
    level: 'info'
});

/* Bunyan intentionally forgoes logging the body of requests and responses. If you want to add this and other fields to the logs, you can do so with the use of a child logger. We’ll be using this to add the fields ‘id’, ‘body’ and ‘statusCode’ to a custom log. */

exports.logResponse = function (id, body, statusCode) {
    var log = this.loggerInstance.child({
        id: id,
        body: body,
        statusCode: statusCode
    }, true)
    log.info('response')
}

/* We now add the bunyan logger to our middleware

In app.js we first require the logger module

const logger = require('./logger'); */

/* Defining a stream ( is basically a definition of where the log output should go). We define two streams here stdout and an external file. In the logger.js file we update the loggerInstance variable */
exports.loggerInstance = bunyan.createLogger({
  name: 'transaction-notifier',
  serializers: {
      req: require('bunyan-express-serializer'),
      res: bunyan.stdSerializers.res,
      err: bunyan.stdSerializers.err
  },
  level: 'info',
  streams: [
      {
          path: './foo.log'
      },
      {
          stream: process.stdout
      }
  ]
});
    