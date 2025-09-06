const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const RunSession = sequelize.define('RunSession', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  distance: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  duration: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = RunSession;
