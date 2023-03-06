// get the client
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

/*
// simple query
db.query(
  'SELECT * FROM `games`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

// with placeholder
db.query(
  'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
  ['Page', 45],
  function(err, results) {
    console.log(results);
  }
);
*/

server.get('/api/games', (req, res) => {
  db.query(
    'SELECT * FROM `games`',
    (err, results, fields) => {
      res.status(200).json(results)
    }
  )
});

server.listen(3000, () => {console.log('Connected')});