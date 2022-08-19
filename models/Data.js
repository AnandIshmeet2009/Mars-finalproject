const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    Fullname: {
        type: String,
        required: true
    },

     
    Age: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },
     
    Phonenumber: {
        type: String,
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

    Gender: {
        type: String,
        required: true
    },

})

const Data = mongoose.model('Data', DataSchema);


module.exports = Data;
