'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subbreaddit = sequelize.define('Subbreaddit', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Subbreaddit.associate = function(models) {
    // associations can be defined here
    Subbreaddit.belongsToMany(models.User, {
      foreignKey: 'subId',
      otherKey: 'userId',
      through: 'Subscription'
    })

    Subbreaddit.hasMany(models.Post, {foreignKey: 'subId'})
  };
  return Subbreaddit;
};