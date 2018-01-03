var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Cow = sequelize.define('cow', {
  name: {
    type: Sequelize.STRING
  }
});

module.exports = Cow;
