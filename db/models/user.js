'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Post, { foreignKey: 'userId' })
    User.belongsToMany(models.Subbreaddit, {
      foreignKey: 'userId',
      otherKey: 'subId',
      through: 'Subscription'
    })
  };
  return User;
};