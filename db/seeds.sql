INSERT INTO department (name)
VALUES ("Sales"),
       ("Accounting"),
       ("Design");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Associate", 50000.00, 1),
       ("Assitant Accountant", 45000.00, 2),
       ("Graphics Designer", 48000.00, 3);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Christenson", 1, NULL),
       ("John", "Jonnyson", 1, 1),
       ("Sadie", "McLadie", 2, NULL),
       ("Adam", "Adamson", 2, 3),
       ("Rich", "Richardson", 3, NULL),
       ("Sarah", "Sarahson", 3, 5);