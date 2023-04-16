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