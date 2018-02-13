'use strict';
module.exports = (sequelize, DataTypes) => {
  var Opportunity = sequelize.define('Opportunity', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    customername: DataTypes.STRING(250),
    name: DataTypes.STRING(250),
    stage: DataTypes.STRING(250),
    address: DataTypes.STRING(250),
    industry: DataTypes.STRING(250),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
    timestamps: false
  });
  return Opportunity;
};
