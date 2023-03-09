const path = require('path');
const express = require('express');
const mysql = require('mysql2');

const server = express();

server.use(express.static(path.resolve('public')));

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gamesdb'
});

server.get('/api/games', (req, res) => {
  db.query(
    'SELECT * FROM `games`',
    (err, results, fields) => {
      res.status(200).json(results)
    }
  )
});

server.listen(3000, () => {console.log('Connected')});