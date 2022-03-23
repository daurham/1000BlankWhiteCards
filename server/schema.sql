DROP DATABASE IF EXISTS cardgame;

CREATE DATABASE cardgame;

USE cardgame;

CREATE TABLE cards (
  id int NOT NULL AUTO_INCREMENT,
  createdBy varchar(100) NOT NULL,
  dateCreated timestamp NOT NULL,
  cardRules varchar(500) NOT NULL,
  points int,
  image varchar(300) NOT NULL,
  tags varchar(300),
  position varchar(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE positions (
  id int NOT NULL AUTO_INCREMENT,
  position varchar(100) NOT NULL,
  PRIMARY KEY (id)
);