/**
 * Created by Administrator on 2018-02-26.
 */
module.exports = (sequelize, DataTypes) => {
  var ClientListAction = sequelize.define('client_list_action', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING(50),
    type: DataTypes.STRING(10),
    menuId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'client_menu',
        key: 'id',
      },
    },
    action: DataTypes.STRING(100),
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
      }
    }
  }, {
    timestamps: false
  });
  return ClientListAction;
};