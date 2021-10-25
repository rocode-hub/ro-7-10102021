-- Création de la base de données / schéma
CREATE DATABASE IF NOT EXISTS `gpmania` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `gpmania`;

-- Suppression de la table user
DROP TABLE IF EXISTS `users` ;
-- Création de la table user
CREATE TABLE `users` (
    `id` BIGINT AUTO_INCREMENT  PRIMARY KEY ,
    `email` VARCHAR(255)  NOT NULL  UNIQUE ,
    `pwd` VARCHAR(255)  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Suppression de la table subject
DROP TABLE IF EXISTS `subjects` ;
-- Création de la table subject
CREATE TABLE `subjects` (
    `id` BIGINT AUTO_INCREMENT  PRIMARY KEY ,
    `title` VARCHAR(255)  NOT NULL ,
    `photo` VARCHAR(255)  NOT NULL ,
    `description` LONGTEXT CHARACTER SET ucs2 ,
    `userid` BIGINT  NOT NULL  DEFAULT 0,
    `createat` TIMESTAMP  NOT NULL ,
    `updateat` TIMESTAMP  NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE INDEX `IDX_subjects_userid` ON `subjects` (`userid`);
CREATE INDEX `IDX_subjects_updateat` ON `subjects` (`updateat`);

-- Suppression de la table comment
DROP TABLE IF EXISTS `comments` ;
-- Création de la table comment
CREATE TABLE `comments` (
    `id` BIGINT AUTO_INCREMENT  PRIMARY KEY ,
    `mycomment` LONGTEXT CHARACTER SET ucs2 ,
    `userid` BIGINT NOT NULL DEFAULT 0,
    `subjectid` BIGINT NOT NULL DEFAULT 0,
    `createat` TIMESTAMP NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
CREATE INDEX `IDX_comments_userid` ON `comments` (`userid`);
CREATE INDEX `IDX_comments_subjectid` ON `comments` (`subjectid`);

-- Contraintes d'intégrité
ALTER TABLE `subjects` ADD FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `comments` ADD FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE CASCADE;
ALTER TABLE `comments` ADD FOREIGN KEY (`subjectid`) REFERENCES `subjects` (`id`) ON DELETE CASCADE;
