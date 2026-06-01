const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const apiRoutes = require('./routes');

const createApp = () => {
  const app = express();
  const clientOrigin = process.env.CLIENT_ORIGIN || '*';

  app.use(cors({ origin: clientOrigin === '*' ? true : clientOrigin }));
  app.use(express.json());
  app.use(morgan('dev'));

  app.get('/', (req, res) => {
    res.json({
      service: 'florista-mern',
      status: 'ok',
    });
  });

  app.use('/api', apiRoutes);

  app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
  });

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  });

  return app;
};

module.exports = createApp;
