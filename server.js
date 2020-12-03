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

const askQuestions = () => {
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
        case "View All Employees":
            viewAllEmployees();
            break;

         case "View All Employees By Department":
                viewAllEmployeesByDepartment();
                break;

         case "View All Employees By Manager":
                viewAllEmployeesByManager();
                break;

         case "Add Employees":
                 addEmployee();
                 break;

        case "Remove Employees":
                removeEmployees();
                 break;

         case "Update Employee Role":
                updateEmployeeRole();
                break;
                    
         case "Update Employee Manager":
                updateEmployeeManager();
                break;
        case "exit":
            connection.end()
           break;
                    
                              
                
    }

    }); 
}

function viewAllEmployees() {
    connection.query("SELECT * FROM department",
    function (err,res) {
        if (err) throw err;
        
    askQuestions();
    });
};

function viewAllEmployeesByDepartment() {
    connection.query("SELECT * FROM",
    function (err, res) {
        if (err) throw err;
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
