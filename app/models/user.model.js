const { DataTypes: dt } = require('sequelize');
const db = require('../config/db.config');

const User = db.define('user', {
    firstName: {
        type: dt.STRING,
        allowNull: false
    },
    lastName: {
        type: dt.STRING,
        allowNull: false
    },
    email: {
        type: dt.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    }
}, {timestamps: true});

module.exports = User;