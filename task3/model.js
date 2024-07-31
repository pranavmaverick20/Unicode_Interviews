const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
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
        type: String,
        required: [true, "Please enter wizard or not"]
    },

    wizard: {
        type: Boolean,
        required: [true, "Please Enter ID"]
    }

});

const Student = mongoose.model("Student", StudentSchema)
module.exports = Student;