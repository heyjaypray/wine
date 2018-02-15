DROP DATABASE IF EXISTS wine_db;

CREATE DATABASE wine_db;
USE wine_db;

CREATE TABLE wine
(
	id int NOT NULL AUTO_INCREMENT,
	wine_name varchar(255) NOT NULL,
	drank boolean,
	PRIMARY KEY (id)
);