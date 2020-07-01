const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('postgres database is connected'))
    .catch(err => console.log(err));

User = sequelize.import('./models/user');
Feed = sequelize.import('./models/feed');
Comments = sequelize.import('./models/comment');
Profile = sequelize.import('./models/profile')





module.exports = sequelize;