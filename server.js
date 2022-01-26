const inquirer = require('inquirer');
const mysql = require('mysql2');
const ctable = require('console.table');

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
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
};
