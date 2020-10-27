const config = require('./config');
const sequelize = require('./sequelize');
const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

server.use(bodyParser.json());
server.use(methodOverride('_method'));
server.use(express.static(__dirname + '/public'));

const invoicesRouter = require('./routes/api/invoices');
const authenticationRouter = require('./routes/api/authentication');

server.use('/api', authenticationRouter);
server.use('/api/invoices', invoicesRouter);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');

    await sequelize.sync();

    server.listen(config.port, () => {
      console.log(`Server listening at ${config.port}`);
    });
  } catch (err) {
    console.log('Unable to connect to the database');
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = startServer;
