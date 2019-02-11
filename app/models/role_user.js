'use strict'

module.exports = (sequelize, DataTypes) => {
    const roleUser = sequelize.define('role_user', {
        user_id: DataTypes.INTEGER,
        role_id: DataTypes.INTEGER
    }, {
        timestamps: false
    });

    return roleUser;
}