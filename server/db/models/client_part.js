/**
 * Created by Administrator on 2018-02-26.
 */
module.exports = (sequelize, DataTypes) => {
  var ClientPart = sequelize.define('client_part', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    key: DataTypes.INTEGER,
    sort: DataTypes.INTEGER,
    type: DataTypes.STRING(50),
    title: DataTypes.STRING(100),
    action: DataTypes.STRING(255),
    description: DataTypes.STRING(255),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
    timestamps: false
  });
  return ClientPart;
};