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
                'View all Employees by Role',
                'Add Employee',
                'Remove Employee',
                'Update Employee Role',
                'Add Department',
                'Remove Department',
                'Add Role',
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

            
         case "View all Employees by Role":
            viewAllEmployeesByRole();
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
                    
         case "Add Department":
                addDepartment();
                break;
        
         case "Remove Department":
                 removeDepartment();
                break;
                
        case "Add Role":
                addRole();
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


function viewAllEmployeesByRole() {
    connection.query(
    '  SELECT department.name, first_name, last_name, role.title  AS "Role" FROM ((Role INNER JOIN employee ON role.id=employee.role_id) INNER JOIN department ON role.department_id=department.id);',
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


const removeEmployee = () => {
    inquirer
    .prompt([
        {
            name: 'empID',
            type: 'input',
            message: 'Enter employees ID number.'
        }
        

    ])
    .then((answer) => {
        connection.query( 'DELETE FROM employee WHERE ?',
        {
            id: answer.empID,
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have removed an employee! Select where you want to go next.")
            
        }
        );
        askQuestions();


    });
};

//update employee's role

const updateEmployeeRole = () => {
    inquirer
    .prompt([
        {
            name: 'empID',
            type: 'input',
            message: 'Enter employees ID number for whose role you want to update.'
        },
        {
            name: 'updateRoleID',
            type: 'input',
            message: 'Enter employees new role ID.'

        }
        

    ])
    .then((answer) => {
        connection.query( 'UPDATE employee SET role_id= ?  WHERE id=?;',
        {
            
            role_id: answer.updateRoleID,
            id: answer.empID,
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have updated an employee! Select where you want to go next.")
            
        }
        );
        askQuestions();


    });
};

//add department
const addDepartment = () => {
    inquirer
    .prompt([
        {
            name: 'deptID',
            type: 'input',
            message: 'Enter department ID.'
        },
        {
            name: 'deptName',
            type: 'input',
            message: 'Enter department name.'
        },
    ])
    .then((answer) => {
        connection.query( 'INSERT INTO department SET ?',
        {
            id: answer.deptID,
            name: answer.deptName
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have added another department! Select where you want to go next.")
            
        }
        );
        askQuestions();


    });
};

//remove department

const removeDepartment = () => {
    inquirer
    .prompt([
        {
            name: 'deptID',
            type: 'input',
            message: 'Enter department ID.'
        },
        {
            name: 'deptName',
            type: 'input',
            message: 'Enter department name.'
        },

    ])
    .then((answer) => {
        connection.query( 'DELETE FROM department WHERE ?',
        {
            id: answer.deptID,
            name: answer.deptName
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have removed a department! Select where you want to go next.")
            
        }
        );
        askQuestions();


    });
};


//add Role
const addRole = () => {
    inquirer
    .prompt([
        {
            name: 'roleID',
            type: 'input',
            message: 'Enter role ID.'
        },
        {
            name: 'title',
            type: 'input',
            message: 'Enter role title.'
        },
        {
            name: 'salary',
            type: 'input',
            message:'Enter salary.'
        },
        {

            name: 'deptID',
            type: 'input',
            message:'Enter department ID.'
        }
    ])
    .then((answer) => {
        connection.query( 'INSERT INTO role SET ?',
        {
            id: answer.roleID,
            title: answer.title,
            salary: answer.salary,
            department_id: answer.deptID
            
            
        },
        
        (err) => {
            if (err) throw err;
            console.log( "You have added another role! Select where you want to go next.")
            console.table(res);
            
        }
        );
        askQuestions();


    });
};

