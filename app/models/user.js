'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    timestamps: false
  });

  user.associate = function (models) {
    // associations can be defined here
    // user.belongsToMany(models.role, {
    //   through: models.roleUser,
    //   foreignKey: 'user_id',
    //   otherKey: 'role_id'
    // });
  };

  return user;
};