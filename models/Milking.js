const Sequelize = require('sequelize');
const sequelize = require('./sequelize');
const Cow = require('./Cow');

const Milking = sequelize.define('milking', {
  date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW
  },
  litres: {
    type: Sequelize.SMALLINT,
    allowNull: false,
    defaultValue: 0,
    notEmpty: true
  }
});

Cow.hasMany(Milking);
Milking.belongsTo(Cow);

module.exports = Milking;
