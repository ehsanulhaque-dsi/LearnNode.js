const path = require('path');

const express = require('express');
const studentController = require('../controllers/student');

const router = express.Router();

//router.get('/', studentController.getStudents);
router.get('/register-student', studentController.getRegisterStudent);
router.post('/register-student', studentController.postRegisterStudent);
router.get('/edit-student/:id', studentController.getEditStudent);
router.post('/update-student/:id', studentController.postUpdateStudent);
router.use('/delete-student/:id', studentController.postDeleteStudent);


module.exports = router;


