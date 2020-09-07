require('dotenv').config();

module.exports = {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT || 4000,
  secret_key: process.env.SECRET_KEY,
};
