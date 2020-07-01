module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define('comments', {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    })
    return Comments;
}
