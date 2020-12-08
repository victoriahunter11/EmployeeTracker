INSERT INTO department (id, name)
VALUES (1, "Marketing");
INSERT INTO department (id, name)
VALUES (2,"Sales");
INSERT INTO department (id, name)
VALUES (3, "Accounting");
INSERT INTO department (id, name)
VALUES (4, "Engineering");

INSERT INTO role (id, title, salary, department_id)
VALUES (11, "Advertising Strategy", 50000, 1);
INSERT INTO role (id, title, salary, department_id)
VALUES (22,"Acct Manager", 60000, 2);
INSERT INTO role (id, title, salary, department_id)
VALUES (33, "Accountant", 70000, 3);
INSERT INTO role (id, title, salary, department_id)
VALUES (44, "Software Engineer", 80000, 4);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (97, "Janet", "Smith", 10, 1);
INSERT INTO employee (id,  first_name, last_name, role_id, manager_id)
VALUES (96, "Alex","John", 20, 2);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (98, "Michael", "Edwin", 30, 3);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (99, "Jane", "Alice", 40, 4);

