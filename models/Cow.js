var Sequelize = require('sequelize');
var sequelize = require('./sequelize');

var Cow = sequelize.define('cow', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  gender: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Female',
    notEmpty: true
  },
  birthdate: {
    type: Sequelize.DATE,
    require: true,
    defaultValue: Sequelize.NOW
  }
});

module.exports = Cow;
