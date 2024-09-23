require('dotenv').config();  // to load env 

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;  // Default to port 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
