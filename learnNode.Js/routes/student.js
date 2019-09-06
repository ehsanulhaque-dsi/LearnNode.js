const path = require('path');

const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

//router.get('/', studentController.getStudents);
router.use('/add-student',studentController.addStudent);
router.get('/register-student', studentController.getRegisterStudent);
router.get('/edit-student', studentController.getEditStudent);

module.exports = router;


