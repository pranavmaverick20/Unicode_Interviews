const express = require('express');
const app = express();
const mongoose = require('mongoose');

//To parse json values 
app.use(express.json());

const Student = require('./model.js');

app.post('/api/students', async (req, res) => {
    try {
        let data = req.body;
        if (data.house.toLowerCase() == "random") {
            data.house = houseGenerator();
        }
        console.log(data)
        const student = await Student.create(data);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "Failed to send" })
    }
});
//added reading the DB using .find() method
app.get('/api/students', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(404).json({ success: false, msg: "Failed to retrieve students" });
    }
});


function houseGenerator() {
    let num = Math.ceil(Math.random() * 4);//returns a random value between 1 to 4 (inclusive)
    if (num == 1) {
        return "Gryffindor";
    }
    else if (num == 2) {
        return "Slytherin";
    }
    else if (num == 3) {
        return "Ravenclaw";
    }
    else {
        return "Hufflepuff";
    }
}

start = async () => {
    try {
        await mongoose.connect("mongodb+srv://pranavahuja20:Unicode_Task3@harrypotterstudents.12oqvj7.mongodb.net/Unicode_Task3?retryWrites=true&w=majority&appName=HarryPotterStudents");
        console.log("Connected to DB!");
    }
    catch (error) {
        console.log("Failed to connect");
    }
    app.listen(5000, () => {
        console.log("Server listening on port 5000");

    })
}
start();












