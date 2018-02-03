'use strict';
module.exports = (sequelize, DataTypes) => {
  var Customer = sequelize.define('Customer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(250),
    age: DataTypes.STRING(10),
    phone: DataTypes.STRING(30),
    birthday: DataTypes.DATE,
    address: DataTypes.STRING(250)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
    timestamps: false
  });
  return Customer;
};
