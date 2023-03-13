const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const server = express();

server.use(express.static(path.resolve('public')));

// create the connection to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gamesdb'
});

server.get('/game/:id', (req, res) => {
  res.status(200).sendFile(path.resolve('public/games.html'));
});

server.get('/api/games', (req, res) => {
  db.query('SELECT * FROM games',(err, rows) => {
    if (err) throw err.message;
      res.status(200).json(rows);
    }
  );
});

server.get('/api/games/:id', (req, res) => {
  db.query(`SELECT * FROM games WHERE id = ${req.params.id}`,(err, rows) => {
    if (err) throw err.message;
    res.status(200).json(rows);
  });
});

server.listen(3000, () => {console.log('Connected')});