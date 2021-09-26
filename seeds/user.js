const { User } = require('../models');

const userData = [{
        username: 'maamek',
        password: 'konadu17'

    },
    {
        username: 'russ_d',
        password: 'himpsum'
    },
    {
        username: 'dorits',
        password: 'ddoritss'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;