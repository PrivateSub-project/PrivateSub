const stoppable = require('stoppable');
const mongoose = require('mongoose');

const logger = require('./logger');

const app = require('./app');

const port = parseInt(process.env.PORT || 8000, 10);

const server = stoppable(
  app.listen(port, () => {
    logger.info({ port }, `Server started`);
    mongoose
      .connect(process.env.MONGODB_CONNECTION_STRING)
      .then(() => {
        logger.info('Connected to MongoDB');
      })
      .catch((err) => {
        logger.info(`Error connecting to MongoDB: ${err}`);
      });
  })
);

module.exports = server;
