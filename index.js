// Importing and requiring mysql2
const mysql = require('mysql2');

// Connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    PORT: 3001,
    user: 'DB_USER',
    password: 'DB_PASSWORD',
    database: 'DB_NAME'
  },
  console.log(`Connected to the employee_tracker_db database.`)
);

module.exports = connection;

// Calling the function to start the app + throwing potential errs
connection.connect((err) => {
    if (err) throw err;
    start();
  });

  inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all employees',
        'View all departments',
        'View all roles',
        'Add employee',
        'Add department',
        'Add role',
        'Update employee role',
      ],
    },
  ])
  .then((answers) => {
    console.log(answers.action);
  });

    //   .then 'answers' === option => query 'result' . . .