const express = require('express');
const axios = require('axios');
const app = express();
//linking basic html file to show menu
app.get('/', (req, res) => {
    res.status(200).sendFile('C:/Users/admin/Desktop/unicode tasks/task2/index.html');
});

//Now to fetch JSON data from all APIs
app.get('/api/characters', async (req, res) => {
    try {
        let characters = await axios.get('https://hp-api.onrender.com/api/characters');
        res.status(200).send(characters.data);
    }
    catch (err) {
        res.status(404).send("<h1>Failed to retreive</h1>");
    }
});

app.get('/api/spells', async (req, res) => {
    try {
        let spells = await (await fetch('https://hp-api.onrender.com/api/spells')).json();
        res.status(200).send(spells);
    }
    catch (err) {
        res.status(404).send("<h1>Failed to retreive</h1>");
    }
});

app.get('/api/staff', async (req, res) => {
    try {
        let staff = await (await fetch('https://hp-api.onrender.com/api/characters/staff')).json();
        res.status(200).send(staff);
    }
    catch (err) {
        res.status(404).send("<h1>Failed to retreive</h1>");
    }
});

app.get('/api/students', async (req, res) => {
    try {
        let characters = await (await fetch('https://hp-api.onrender.com/api/characters/students')).json();
        res.status(200).send(characters);
    }
    catch (err) {
        res.status(404).send("<h1>Failed to retreive</h1>");
    }
});

/*
The following method takes in the character id as a request parameter and returns
the character as a json response
*/
app.get('/api/character/:characterID', async (req, res) => {
    try {
        let { characterID } = req.params;
        console.log(req.params);
        console.log(characterID)
        let characters = await (await fetch('https://hp-api.onrender.com/api/characters')).json();
        const cid = characters.find((c) => {
            return c["id"] == characterID;
        });
        res.send(cid);
    }
    catch (err) {
        res.status(404).send("<h1>Failed to retreive</h1>");
    }
});


app.listen(5000, () => {
    console.log("Server is listening on port 5000");
});








