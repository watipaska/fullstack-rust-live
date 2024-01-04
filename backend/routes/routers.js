const express = require('express');
const router = express.Router();
const StudentAdd = require('../Modules/Schemas'); // Import the StudentAdd model
// POST route to add a new student
router.post("/StudentAdd", (req, res) => {
    const {
        firstname,
        surname,
        gender,
        current_status,
        date_of_birth,
        other_name,
        current_class,
        registration_number,
        date_of_admission,
        parent_mobile_number,
        address,
        others,
        passport,
    } = req.body;

    // Create a new StudentAdd document using the model and the data from req.body
    const newStudent = new StudentAdd({
        firstname,
        surname,
        gender,
        current_status,
        date_of_birth,
        other_name,
        current_class,
        registration_number,
        date_of_admission,
        parent_mobile_number,
        address,
        others,
        passport,
    });

    newStudent.save()
        .then(() => {
            console.log('Data saved successfully');
            res.status(200).json({ data: 'Data saved successfully' });
        })
        .catch(error => {
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'Error saving data' });
        });
});

// GET route to retrieve all students
router.get('/students', (req, res) => {
    // Use the StudentAdd model to find all student records in the database
    StudentAdd.find()
        .then((students) => {
            // Send the retrieved student data as a JSON response
            res.json(students);
        })
        .catch((error) => {
            console.error('Error fetching student data:', error);
            res.status(500).json({ error: 'Error fetching student data' });
        });
});

module.exports = router;
