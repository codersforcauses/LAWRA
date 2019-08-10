'use strict';
module.exports = (sequelize, DataTypes) => {
  const dTree = sequelize.define('dTree', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    component: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    options: {
      type: Sequelize.JSONB,
      allowNull: true,
    },

    trigger: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    types: {
      type: DataTypes.STRING,
      allowNull: true,

    },
    isEnd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {});
  dTree.associate = function (models) {
    // associations can be defined here
  };
  return dTree;
};