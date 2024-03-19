const mongoose = require('mongoose');

const cricketSchema = new mongoose.Schema({
    name: {
        type: String
    },
    role: {
        type: String
    },
    age: {
        type: Number
    },

})

const cricketDB = mongoose.model('TSS_Cricket', cricketSchema);

module.exports = cricketDB;
