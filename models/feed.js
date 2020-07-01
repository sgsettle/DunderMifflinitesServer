const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Feed = sequelize.define('feed', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        link: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Feed;
} 

