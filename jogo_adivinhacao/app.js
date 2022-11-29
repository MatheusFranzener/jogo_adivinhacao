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
    res.sendFile(__dirname + '../Components/home.hmtl');
})

app.get('/jogo', (req, res) => {
    res.sendFile(__dirname + '../Components/jogo.hmtl');
})

app.get('/placar', (req, res) => {
    res.sendFile(__dirname + '../Components/placar.hmtl');
})

app.listen('8080', (req, res) => {
    console.log("servidor rodando 8080")
});






