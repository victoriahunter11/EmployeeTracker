CREATE DATABASE employee_trackerDB;

USE employee_trackerDB;
CREATE TABLE department (
id INT NOT NULL PRIMARY KEY,
name VARCHAR (30)
);

CREATE TABLE role (
id INT NOT NULL PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department_id INT
);

CREATE TABLE employee (
id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30),
role_id INT,
manager_id INT
);