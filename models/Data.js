const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({    

    Fullname: {
    type: String,
    required: true
    },

    Age: {
    type: Number,
    required: true
    },

email: {
    type: String,
    required: true
},

PhoneNumber: {
    type: Number,
    required: true
},


Whydoyouwanttogotomars: {
    type: String,
    required: true
},

Aboutyou: {
    type: String,
    required: true
},


})


const Data = mongoose.model('Data', DataSchema);

module.exports = Data;
