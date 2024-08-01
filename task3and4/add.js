const axios = require('axios');
axios.post("http://localhost:5000/api/students", {
    "id": "02",
    "name": "Hermione Granger",
    "gender": "female",
    "house": "Gryffindor",
    "wizard": false
});