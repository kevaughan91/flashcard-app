const express = require('express');
const router = express.Router();
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'flashcards'
});


/* GET api listing. */
router.get('/decks', (req, res) => {
    let sql = "SELECT * FROM Decks";
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        if (results) {
            res.send(results);
        } else {
            res.send("no results found");
        }
    });
});


module.exports = router;