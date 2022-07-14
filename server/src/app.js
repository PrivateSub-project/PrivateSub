const express = require('express');
const app = express();
const passport = require('passport');
const auth = require('./jwt');
const cors = require('cors');

const logger = require('./logger');
const pino = require('pino-http')({
  logger,
});

// App setup
passport.use(auth.strategy);
app.use(pino);
app.use(express.json());
app.use(cors());

// Controllers
const userController = require('./controllers/user-controller');
const creditCardController = require('./controllers/creditcard-controller');
const subscriptionController = require('./controllers/subscription-controller');

// Routes
app.use('/cc', creditCardController);
app.use('/user', userController);
app.use('/subscription', subscriptionController);

app.get('/', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).json({
    status: 'ok',
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    error: {
      message: 'not found',
      code: 404,
    },
  });
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'unable to process request';

  if (status > 499) {
    logger.error({ err }, `Error processing request`);
  }

  res.status(status).json({
    status: 'error',
    error: {
      message,
      code: status,
    },
  });
});

module.exports = app;
