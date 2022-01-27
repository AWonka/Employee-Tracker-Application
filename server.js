const inquirer = require('inquirer');
const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
});

connection.connect(err => {
    if (err) {
        console.error('error connecting!');
        return;
    }
    console.log('connected as id ' + connection.threadId);
    promptUser();
});

const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            message: 'Please select an option.',
            name: 'choices',
            loop: false,
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'End Application']
        }
    ])
    .then((answer) => {
        switch(answer.choices) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRoles();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Update an employee role':
                updateEmployee();
                break;
            case 'End Application':
                console.log('Ending Application')
                connection.end();
                break;    
            default:
                console.log('Please select an option');
                promptUser();                            
        }
    });
};

const viewDepartments = () => {
    const dpt = `SELECT department.id AS ID, department.name AS Department FROM department`;

    connection.query(dpt, (err, info) => {
        if (err) throw err;
        console.table(info);
        promptUser();
    });
};

const viewRoles = () => {
    const rls = `SELECT role.id AS ID, role.title AS Job_Title, role.salary AS Salary, department.name AS Department FROM role
    INNER JOIN department ON role.department_id = department.id`;

    connection.query(rls, (err, info) => {
        if (err) throw err;
        console.table(info);
        promptUser();
    });
};

const viewEmployees = () => {
    const emp = `SELECT employee.id AS ID, employee.first_name AS First_Name, employee.last_name AS Last_Name, role.title AS Job_Title, department.name AS Department, role.salary AS Salary, CONCAT(manager.first_name, " ",manager.last_name) AS Manager FROM employee
    INNER JOIN role ON employee.role_id = role.id
    INNER JOIN department ON role.department_id = department.id
    INNER JOIN employee manager ON employee.manager_id = manager.id`;

    connection.query(emp, (err, info) => {
        if (err) throw err;
        console.table(info);
        promptUser();
    });
};

const addDepartment = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            message: 'Enter Department Name.',
            name: 'name',
            validate: name => {
                if (!name) {
                    console.log('Please enter a Department Name!');
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(answer => {
        const add = `INSERT INTO department (name) VALUES (?)`;

        connection.query(add, answer.name, (err, input) => {
            if (err) throw err;
            console.log(`Added ` + answer.name + ` to the Department list.`);
            viewDepartments();
        });
    });
};