var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

var router = express.Router();

/* Get users listing. */
router.get('/', function(req, res, next) {
    res.send({ type: 'GET' });
});

/* Add a new user to the db */
router.post('/', function(req, res, next) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body,
        email: req.email,
        password: req.password
    })
});

/* Update a user in the db */
router.put('/:id', function(req, res, next) {
    res.send({ type: 'PUT' });
});

/* Delte a user in the db */
router.delete('/:id', function(req, res, next) {
    res.send({ type: 'DELETE' });
});

// app.js로 모듈 연결
module.exports = router;