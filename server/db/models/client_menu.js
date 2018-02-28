/**
 * Created by Administrator on 2018-02-26.
 */
module.exports = (sequelize, DataTypes) => {
  var ClientMenu = sequelize.define('client_menu', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING(50),
    type: DataTypes.STRING(10),
    parentId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'client_menu',
        key: 'id',
      }
    },
    permission: DataTypes.STRING(50),
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  }, {
    timestamps: false
  });
  return ClientMenu;
};