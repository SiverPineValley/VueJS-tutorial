const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user Schema & model
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    email: {
        type: String,
        required: [true, 'Email field is required']
    },
    password: {
        type: String,
        required: [true, 'Email field is required']
    },
    available: {
        type: Boolean,
        default: false
    }
    // add in geo location

});

// Collection 이름 지정
const User = mongoose.model('user', UserSchema);

module.exports = User;