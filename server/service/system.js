import db from '../db/models';
import logger from '../utils/logUtils';

class systemService {
  constructor() {
    var that = this;
    db.client_part_type.findAll().then((result) => {
      that.clientPartTypes = {};
      result.map((item) => {
        that.clientPartTypes[item.type] = item;
      });
      logger.info('获取client_part_type结束');
    }).error((error) => {
      logger.error(error);
    });
  }

  async getClientMenus() {
    try {
      var clientMenus = await db.client_menu.findAll();
      return clientMenus
    } catch (error) {
      logger.error(error);
    }
    return [];
  }

  async getClientListActionsByMenuId() {
    try {
      var clientListActions = await db.client_list_action.findAll({
        where: {
          menuId: menuId
        }
      });
      return clientListActions;
    } catch (error) {
      logger.error(error);
    }
    return [];
  }

  async getClientPartsByKey(key) {
    var clientPart = await db.client_part.findAll({
      where: {
        key
      }
    });
    return clientPart;
  }

  async getClientPartDetail(part) {
    var partType = this.clientPartTypes[part.type];
    var sqlStr = `SELECT * FROM ${partType.detailTableName} `+ 'WHERE `key` = $key';
    var result = db.sequelize.query(sqlStr, { bind: { key: part.id }, type: db.sequelize.QueryTypes.SELECT });
    return result;
  }
}

export default new systemService();
