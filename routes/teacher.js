const path = require('path');

const express = require('express');
const teacherController = require('../controllers/teacher');

const router = express.Router();

router.get('/register-teacher', teacherController.getRegisterTeacher);
router.post('/register-teacher', teacherController.postRegisterTeacher);
router.get('/edit-teacher/:id', teacherController.getEditTeacher);


module.exports = router;


