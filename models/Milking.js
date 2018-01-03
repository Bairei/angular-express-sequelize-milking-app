var Sequelize = require('sequelize');
var sequelize = require('./sequelize');
var Cow = require('./Cow');

var Milking = sequelize.define('milking', {
  date: {
    type: Sequelize.DATEONLY,
    allowEmpty: false,
    defaultValue: Sequelize.NOW
  },
  litres: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    defaultValue: 0
  }
});

Cow.hasMany(Milking);
Milking.belongsTo(Cow);

module.exports = Milking;
