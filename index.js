// Importing and requiring mysql2 and express
const express = require('express');
const mysql = require('mysql2');

// Port destination
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connection to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'DB_USER',
    password: 'DB_PASSWORD',
    database: 'DB_NAME'
  },
  console.log(`Connected to the employee_tracker_db database.`)
);