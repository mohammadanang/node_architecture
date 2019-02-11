'use strict'
module.exports = (sequelize, DataTypes) => {
    const role = sequelize.define('role', {
        name: DataTypes.STRING,
        permissions: DataTypes.TEXT,
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        timestamps: false
    });

    role.associate = function (models) {
        // associations defined here
        role.belongsToMany(models.user, {
            through: models.role_user,
            foreignKey: 'role_id',
            otherKey: 'user_id'
        });
    };

    return role;
};