const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoDB = require('./config/mongoConfig');
mongoDB('mongodb://localhost:27017/despesa');

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo deu errado ao processar sua requisição');
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());

const RCMS = require('./models/Rcms');

const rcmsRouter = require('./routes/rcmsRoutes');

app.use('/rcms', rcmsRouter);

module.exports = app;
