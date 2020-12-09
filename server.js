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
    connection.query(
        'SELECT manager.first_name AS "Manager first name", manager.last_name AS "Manager last name", employee.first_name,  employee.last_name FROM manager INNER JOIN employee ON manager.id=employee.manager_id;',
    function (err, res) {
        if (err) throw err;
        console.table(res);
        askQuestions();
    })
}

const addEmployee = () => {
    inquirer
    .prompt([
        {
            name: 'firstName',
            type: 'input',
            message: 'Enter employees first name.'
        },
        {
            name: 'lastName',
            type: 'input',
            message: 'Enter employees last name.'
        },
        {
            name: 'empID',
            type: 'input',
            message: 'Enter employees id #.'
        },
        {
            name: 'empRoleID',
            type: 'input',
            message: 'Enter employees role ID.'
        },
        {
            name: 'empManagerID',
            type: 'input',
            message: 'Enter employees manager ID.'
        }

    ])
    .then((answer) => {
        connection.query( 'INSERT INTO employee SET ?',
        {
            first_name: answer.firstName,
            last_name: answer.lastName,
            id: answer.empID,
            role_id: answer.empRoleID,
            manager_id: answer.empManagerID
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have added another employee! Select where you want to go next.")
            
        }
        );
        askQuestions();


    });
};





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
