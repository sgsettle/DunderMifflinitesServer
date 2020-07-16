const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, process.env.DATABASE_URL, {
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => console.log('postgres database is connected'))
    .catch(err => console.log(err));

User = sequelize.import('./models/user');
Feed = sequelize.import('./models/feed');
Comments = sequelize.import('./models/comments');
Profile = sequelize.import('./models/profile')

User.hasOne(Profile);
Profile.belongsTo(User);

Feed.belongsTo(User);
User.hasMany(Feed);

Comments.belongsTo(Feed);
Feed.hasMany(Comments);
  
module.exports = sequelize;