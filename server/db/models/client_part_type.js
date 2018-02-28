/**
 * Created by Administrator on 2018-02-26.
 */
module.exports = (sequelize, DataTypes) => {
  var ClientPartType = sequelize.define('client_part_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING(50),
    detailTableName: DataTypes.STRING(100),
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
  return ClientPartType;
};