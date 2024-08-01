const express = require('express');
const app = express();
const mongoose = require('mongoose');
const  router  = require('./routers.js');

//To parse json values 
app.use(express.json());

app.use('/api/students',router);

(async () => {
    try {
        await mongoose.connect("mongodb+srv://Unicode_Task3:Unicode_Task3@harrypotterstudents.12oqvj7.mongodb.net/Unicode_Task3?retryWrites=true&w=majority&appName=HarryPotterStudents");
        console.log("Connected to DB!");
        app.listen(5000, () => {
            console.log("Server listening on port 5000");

        });
    }
    catch (error) {
        console.log("Failed to connect");
    }
})();












