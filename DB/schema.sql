CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(20),
    devoured BOOLEAN NOT NULL DEFAULT 0
);

