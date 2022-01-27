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
    const rls = `SELECT role.id AS ID, role.title AS Job_Title, role.salary AS Salary, role.department_id AS Department_ID FROM role`;

    connection.query(rls, (err, info) => {
        if (err) throw err;
        console.table(info);
        promptUser();
    });
};