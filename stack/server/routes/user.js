const express = require('express');
const User = require('../models/schema');
const bodyParser = require('body-parser');
const cors = require('cors');

const router = express.Router();

/* Get users listing. */
// { email : email_string }
router.get('/', function(req, res, next) {
    User.find().then(user => {
        res.send(user);
    }).catch(next);
});

/* Add a new user to the db */
router.post('/new', function(req, res, next) {

    User.findOne({ email: req.body.email }).then(user => {
        if (user) res.send('There is a email that already has that email address.');
        else {
            // create가 성공적이면, then 이후를 실행. 에러가 일어나면 catch가 실행.
            User.create(req.body).then(complete => {
                res.send(complete);
            }).catch(next);
        }
    });


});

/* Update a user in the db */
// { email : email_string, update : update_object }
router.put('/', function(req, res, next) {
    User.findOneAndUpdate({ email: req.body.email }, req.body.update).then(user => {
        User.findOne({ email: req.body.email }).then(user => {
            res.send(user);
        }).catch(next);
    }).catch(next);
});

/* Delte a user in the db */
// { email : email_string }
router.post('/delete', function(req, res, next) {
    User.findOneAndRemove(req.body).then(user => {
        res.send(user);
    }).catch(next);
});

// app.js로 모듈 연결
module.exports = router;