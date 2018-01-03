var Sequelize = require('sequelize');

var sequelize = new Sequelize({
  database: 'mydb',
  user: 'bairei',
  password: null,
  dialect: 'sqlite'
});

module.exports = sequelize;
