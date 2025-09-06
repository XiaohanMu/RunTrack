const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');

const Friend = sequelize.define('Friend', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
    friendId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    timestamps: true,
});

User.belongsToMany(User, { through: Friend, as: 'Friends', foreignKey: 'userId', otherKey: 'friendId' });

module.exports = Friend;
