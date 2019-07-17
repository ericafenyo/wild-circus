
CREATE DATABASE `circus`;

USE `circus`

CREATE TABLE `spectator`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `birthDate` VARCHAR(125) NOT NULL
);

CREATE TABLE `event`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `description` TEXT NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `image` TEXT NOT NULL,
  `price` INT NOT NULL,
   `createdAt` datetime DEFAULT NOW()
);

CREATE TABLE `booking`
(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `eventId` INT NOT NULL,
  `spectatorId` INT NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `price` INT NOT NULL,
  `code` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`eventId`) REFERENCES `event` (`id`),
  FOREIGN KEY (`spectatorId`) REFERENCES `spectator` (`id`)
);

DROP TABLE IF EXISTS `booking`;
DROP TABLE IF EXISTS `event`;
DROP TABLE IF EXISTS `spectator`;