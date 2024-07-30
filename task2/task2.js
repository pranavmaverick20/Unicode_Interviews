const express = require('express');
const app = express();

app.get('/',(req,res)=>{
res.status(200).sendFile('C:/Users/admin/Desktop/unicode tasks/task2/index.html');
});

app.get('/api/characters', async (req, res) => {
    let characters=await (await fetch('https://hp-api.onrender.com/api/characters')).json();
    res.status(200).send(characters);
});

app.get('/api/spells', async (req, res) => {
    let spells=await (await fetch('https://hp-api.onrender.com/api/spells')).json();
    res.status(200).send(spells);
});

app.get('/api/staff', async (req, res) => {
    let staff=await (await fetch('https://hp-api.onrender.com/api/characters/staff')).json();
    res.status(200).send(staff);
});

app.get('/api/students', async (req, res) => {
    let characters=await (await fetch('https://hp-api.onrender.com/api/characters/students')).json();
    res.status(200).send(characters);
});




app.listen(5000, () => {
    console.log("Server is listening on port 5000");
})








