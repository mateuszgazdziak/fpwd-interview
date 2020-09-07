const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'server/sequelize/database.sqlite',
  logQueryParameters: true,
  benchmark: true,
});

require('./user')(sequelize);
require('./invoice')(sequelize);

module.exports = sequelize;
