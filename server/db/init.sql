CREATE DATABASE `test`;

USE `test`;

CREATE TABLE customers (
	`id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `age` VARCHAR(5),
    `phone` VARCHAR(30),
    `birthday` DATE,
    `address` VARCHAR(255),
    `createdAt` datetime NOT NULL,
    `updatedAt` datetime NOT NULL
)