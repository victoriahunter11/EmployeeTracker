const mysql = require('mysql');
const inquirer = require('inquirer');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootroot',
    database: 'employee_trackerDB'

});

connection.connect((err) => {
    if (err) throw err;
    askQuestions();
});

/*function afterConnection() {
    connection.query('SELECT * FROM department',
    function (err,res) {
        if (err) throw err;
        console.table(res);
        connection.end();
    }
    )
}
*/

function askQuestions() {
    inquirer
    .prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: 
            [
                'View all Employees',
                'View all Employees by Department',
                'View all Employees by Manager',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Update Employee Manager',
                'Exit'
            ],
        },
     

    ])

.then((answer) => {
    switch (answer.choice) {
        case "View all Employees":
            viewAllEmployees();
            break;

         case "View all Employees by Department":
                viewAllEmployeesByDepartment();
                break;

         case "View all Employees by Manager":
                viewAllEmployeesByManager();
                break;

         case "Add Employee":
                 addEmployee();
                 break;

        case "Remove Employee":
                removeEmployee();
                 break;

         case "Update Employee Role":
                updateEmployeeRole();
                break;
                    
         case "Update Employee Manager":
                updateEmployeeManager();
                break;
        case "exit":
            connection.end();
           break;
                    
                              
                
    }

    }); 
}

function viewAllEmployees() {
    connection.query(
        'SELECT * FROM employee',
    function (err,res) {
        if (err) throw err;
        console.table(res);
    askQuestions();
    });
};


function viewAllEmployeesByDepartment() {
    connection.query(
    'SELECT department.name AS "department", first_name, last_name FROM ((Role INNER JOIN employee ON role.id=employee.role_id) INNER JOIN department ON role.department_id=department.id);',
    function (err, res) {
        if (err) throw err;
        console.table(res);
        askQuestions();
    })
}

function viewAllEmployeesByManager() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
        askQuestions();
    })
}

function addEmployee() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
        askQuestions();
    })
}

function removeEmployee() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
        askQuestions();
    })
}

function updateEmployeeRole() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
        askQuestions();
    })
}

function updateEmployeeManager() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
        askQuestions();
    })
}
