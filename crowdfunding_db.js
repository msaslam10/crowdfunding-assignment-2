require('dotenv').config(); // to load env

const mysql = require('mysql2');
const bodyParser = require('body-parser');

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Default to port 3000

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// as application is small so we use app.get() instead of router.get()

// API to get fundraiser information
app.get('/api/fundraisers', (req, res) => {
  const query = `
      SELECT FUNDRAISER.FUNDRAISER_ID, ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, NAME as CATEGORY
      FROM FUNDRAISER
      JOIN CATEGORY ON FUNDRAISER.CATEGORY_ID = CATEGORY.CATEGORY_ID
      WHERE ACTIVE = true;
  `;
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// API to fetch all the categories
app.get('/api/categories', (req, res) => {
  const query = `SELECT * FROM CATEGORY`;
  db.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
  });
});