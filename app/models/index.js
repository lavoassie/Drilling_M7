const User = require('./user.model');
const Bootcamp = require('./bootcamp.model');
const db = require('../config/db.config');
const { insertData } = require('../utils/utils');

User.belongsToMany(Bootcamp, {
    through: 'user_bootcamp',
    as: 'bootcamps',
    foreignKey: 'user_id'
});

Bootcamp.belongsToMany(User, {
    through: 'user_bootcamp',
    as: 'users',
    foreignKey: 'bootcamp_id'
});

async function run() {
    try {
        await db.sync({force: true});
        await insertData();
    } catch (error) {
        console.error('Something went wrong with the SYNC of the table User', error);
    };
};

module.exports = run;