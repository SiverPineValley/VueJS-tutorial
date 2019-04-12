const express = require('express');
const User = require('../models/schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router();

/* Get users listing. */
router.get('/', function(req, res, next) {
    User.find().then(user => {
        res.send(user);
    })
});

/* Add a new user to the db */
router.post('/', function(req, res, next) {
    // create가 성공적이면, then 이후를 실행
    User.create(req.body).then(user => {
        res.send(user);
    });
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