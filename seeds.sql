INSERT INTO department (id, name)
VALUES (0101, "Marketing");
INSERT INTO department (id, name)
VALUES (0201,"Sales");
INSERT INTO department (id, name)
VALUES (0301, "Accounting");
INSERT INTO department (id, name)
VALUES (0401, "Engineering");

INSERT INTO role (id, title, salary, department_id)
VALUES (10, "Advertising Strategy", 50000, 101);
INSERT INTO role (id, title, salary, department_id)
VALUES (20,"Acct Manager", 60000, 201);
INSERT INTO role (id, title, salary, department_id)
VALUES (30, "Accountant", 70000, 301);
INSERT INTO role (id, title, salary, department_id)
VALUES (40, "Software Engineer", 80000, 401);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Janet", "Smith", 10, 11);
INSERT INTO employee (id,  first_name, last_name, role_id, manager_id)
VALUES (2, "Alex","John", 20, 22);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Michael", "Edwin", 30, 33);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Jane", "Alice", 40, 44);

INSERT INTO manager (first_name, last_name, id)
VALUES ("Richard", "Jones",  44);
INSERT INTO manager ( first_name, last_name, id)
VALUES ("Michael", "Buble", 11);
INSERT INTO manager (first_name, last_name, id)
VALUES ( "Josh", "Brown", 22);
INSERT INTO manager ( first_name, last_name, id)
VALUES ( "Rico", "Smith", 33);
