const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const port = 5500
var app = express()
app.use(cors())
var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Please Click on one of these!'))
app.post('/controllers/register-controller',registerController.register)
app.post('/controllers/authenticate-controller',authenticateController.authenticate)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
