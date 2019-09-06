const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getAdminLogin);
router.get('/student-list', adminController.getStudentList);
router.get('/teacher-list', adminController.getTeacherList);
router.get('/verify-login', adminController.getVerifyLogin);
router.get('/register', adminController.getRegisterAdmin);
router.get('/forgot-password', adminController.getForgotPassword);

module.exports = router;


