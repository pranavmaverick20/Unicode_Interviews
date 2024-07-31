const mongoose = require('mongoose');
const Student = mongoose.Schema({
    id: {
        type: String,
        required: [true, "Please enter ID"]
    },
    name: {
        type: String,
        required: [true, "Please enter name"]
    },
    gender: {
        type: String,
        required: [true, "Please enter gender"]
    },
    house: {
        type: Boolean,
        required: [true, "Please enter wizard or not"]
    },

    wizard: {
        type: String,
        required: [true, "Please Enter ID"]
    }

});
module.exports = Student;