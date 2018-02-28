-- client_menus
INSERT INTO  `client_menus` ( `name`, `type`, `createdAt`, `updatedAt`) VALUES ( '客户报备', 'list', NOW(), NOW());
INSERT INTO  `client_menus` ( `name`, `type`, `createdAt`, `updatedAt`) VALUES ( '商机管理', 'list', NOW(), NOW());

-- client_list_actions
INSERT INTO `client_list_actions` (`title`, `type`, `menuId`, `createdAt`, `updatedAt`) VALUES ('浏览', 'view', 1, NOW(), NOW());
INSERT INTO `client_list_actions` (`title`, `type`, `menuId`, `createdAt`, `updatedAt`) VALUES ('新增', 'add', 1, NOW(), NOW());
INSERT INTO `client_list_actions` (`title`, `type`, `menuId`, `createdAt`, `updatedAt`) VALUES ('修改', 'edit', 1, NOW(), NOW());

-- client_part
INSERT INTO `client_parts` (`key`, `sort`, `type`, `title`, `description`, `createdAt`, `updatedAt`) VALUES (1, 1, 'TABLE_SCENARIOS', '客户过滤', '客户列表搜索条件', NOW(), NOW());
INSERT INTO `client_parts` (`key`, `sort`, `type`, `title`, `description`, `createdAt`, `updatedAt`) VALUES (1, 2, 'TABLE', '客户列表', '客户列表', NOW(), NOW());