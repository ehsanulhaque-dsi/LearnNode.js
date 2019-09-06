const path = require('path');

const express = require('express');
const teacherController = require('../controllers/teacher');

const router = express.Router();

router.use('/register-teacher', teacherController.getRegisterTeacher);
router.use('/edit-teacher', teacherController.getEditTeacher);


module.exports = router;


