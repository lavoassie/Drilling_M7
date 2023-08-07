const db = require('../config/db.config');
const { DataTypes: dt } = require('sequelize');

const Bootcamp = db.define('bootcamp', {
    title: {
        type: dt.STRING,
        allowNull: false
    },
    cue: {
        type: dt.INTEGER,
        allowNull: false,
        validate: {
            min: 5,
            max: 20
        }
    },
    description: {
        type: dt.STRING,
        allowNull: false
    }
}, { timestamps: true});

module.exports = Bootcamp;