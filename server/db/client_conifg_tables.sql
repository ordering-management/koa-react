CREATE TABLE `client_part_types` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `type` VARCHAR(50),
    `detailTableName` VARCHAR(100),
    `description` VARCHAR(255),
    `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `client_part_types` (`type`, `detailTableName`, `description`) VALUES ('TABLE_SCENARIOS', 'client_part_form_items', '列表搜索条件');
INSERT INTO `client_part_types` (`type`, `description`) VALUES ('TABLE', '表格');

CREATE TABLE `client_parts` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `key` INT,
    `sort` INT,
    `type` VARCHAR(50),
	`title` VARCHAR(100),
    `action` VARCHAR(255),
    `description` VARCHAR(255),
    `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `client_part_relation` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `mainPartId` INT,
    `relationPartId` INT
    `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- type: list, detail, edit,view
CREATE TABLE `client_menus` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(50),
    `type` VARCHAR(10),
    `parentId` INT,
    `permission` VARCHAR(50),
    `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `client_list_actions` (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(50),
    `type` VARCHAR(10),
    `menuId` INT,
    `action` VARCHAR(100),
    `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)
