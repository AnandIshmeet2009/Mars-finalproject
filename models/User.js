const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    
    Fullname: {
        type: String,
        },

    Age: {
        type: String,
        },

    email: {
        type: String,
        required: true
    },
     
    
})

const User = mongoose.model('User', UserSchema);


module.exports = User;
