const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('profile', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        aboutMe: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        userPhoto: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        favCharacter: {
            type: DataTypes.STRING,
            allowNull: true
        },
        favEpisode: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
    return Profile;
}
