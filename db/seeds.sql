INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Accounting"),
       (3, "Design");

INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Sales Associate", 50000.00, 1),
       (002, "Assitant Accountant", 45000.00, 2),
       (003, "Graphics Designer", 48000.00, 3);

INSERT INTO  employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Chris", "Christenson", 001, NULL),
       (2, "John", "Jonnyson", 002, 1),
       (3, "Sadie", "McLadie", 003, 2); 