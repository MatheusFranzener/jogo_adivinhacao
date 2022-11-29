const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/'))
app.use(express.json())

const sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306
});

sql.query("use adivinhacao");

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Components/home.html');
})

app.get('/jogo', (req, res) => {
    res.sendFile(__dirname + '/Components/jogo.html');
})

app.get('/placar', (req, res) => {
    res.sendFile(__dirname + '/Components/placar.html');
})

app.get('/criar_placar', (req, res) => {
    sql.query("select nome, pontos from jogo", (error, results, fields) => {
        res.json(results)
    })
})

app.listen('8080', (req, res) => {
    console.log("servidor rodando http://localhost:8080")
});






