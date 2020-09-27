DROP DATABASE IF EXISTS passport_demo;
CREATE DATABASE passport_demo;
USE passport_demo;

SELECT * FROM passport_demo.users;

CREATE TABLE datainput (
  id INT NOT NULL AUTO_INCREMENT,
  expensed VARCHAR(45) NULL,
  expenset VARCHAR(100) NULL,
  expensea DECIMAL (10,2) NULL,
  PRIMARY KEY (id)
);

INSERT INTO datainput (expensed, expenset, expensea)
