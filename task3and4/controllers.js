const Student = require('./model.js');



const addSingle = async (req, res) => {
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
        res.status(404).json({ success: false, msg: "Failed to send" });
        console.log(err);
    }
};

//This function is just for adding all data to database the first time

const addMany = async (req, res) => {
    try {
        let data = req.body;
        console.log(data)
        const student = await Student.create(data);
        res.status(200).json(student);
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "Failed to send" });
        console.log(err);
    }
};

//added reading the DB using .find() method

const readDB = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        res.status(404).json({ success: false, msg: "Failed to retrieve students" });
    }
}

//This is task 4

const delMuggles = async (req, res) => {
    try {
        const muggles = await Student.find({ wizard: false });
        if (!muggles) {
            return res.status(404).send("No muggles found");
        }
        const mugglesid = muggles.map((muggle) => muggle.id);
        const n = await Student.deleteMany({ id: mugglesid });
        res.status(200).json({ success: true, msg: "Muggles expelled" });
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "Failed to retrieve students" });
    }

};

//this is bonus of task 4

const changeHouse = async (req, res) => {
    try {
        const { sid, house } = req.params;
        const studentId = (await Student.findOne({ id: sid }))._id;
        if (!studentId) {
            return res.status(404).send("No student found");
        }
        await Student.findByIdAndUpdate(studentId, { house: house });
        res.status(200).json(await Student.findOne({ id: sid }));
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "Failed to retrieve students" });
    }
};

//this is bonus task

const dynamicSearch = async (req, res) => {
    try {
        const { str } = req.params;
        let students = await Student.find();
        console.log(students);
        students = students.filter((s) => s.name.toLowerCase().startsWith(str.toLowerCase()));
        res.status(200).json(students);

        if (students.length === 0) {
            return res.status(404).json({ message: 'No students found' });
        }
    }
    catch (err) {
        res.status(404).json({ success: false, msg: "Failed to retrieve students" });
    }

};

//extra code to delete all

const deleteAll = async (req, res) => {
    try {
        await Student.deleteMany();
        res.status(200).send("Deleted All");
    }
    catch (err) {
        res.status(500).json({ success: false, msg: "Error occurred" });
    }
};

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

module.exports = {
    addSingle,
    addMany,
    readDB,
    delMuggles,
    changeHouse,
    dynamicSearch,
    deleteAll
};