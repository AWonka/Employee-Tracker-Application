INSERT INTO department (name)
VALUES ("Manager Placeholder"),
       ("Sales"),
       ("Accounting"),
       ("Design");

INSERT INTO role (title, salary, department_id)
VALUES ("Managers", 1, 1),
       ("Sales Associate", 50000.00, 2),
       ("Assitant Accountant", 45000.00, 3),
       ("Graphics Designer", 48000.00, 4);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES ("ReservedFor", "Managers", 1, NULL),
       ("Chris", "Christenson", 2, 1),
       ("John", "Jonnyson", 2, 2),
       ("Sadie", "McLadie", 3, 1),
       ("Adam", "Adamson", 3, 4),
       ("Rich", "Richardson", 4, 1),
       ("Sarah", "Sarahson", 4, 6);