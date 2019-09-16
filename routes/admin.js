const path = require('path');

const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router.get('/', adminController.getAdminLogin);
router.get('/student-list', adminController.getStudentList);
router.get('/teacher-list', adminController.getTeacherList);
router.get('/admin-list', adminController.getAdminList);
router.get('/verify-login', adminController.getVerifyLogin);
router.get('/register', adminController.getRegisterAdmin);
router.get('/forgot-password', adminController.getForgotPassword);
router.post('/register-admin', adminController.postRegisterAdmin);

router.get('/edit-admin/:id', adminController.getAdminEdit);
router.use('/delete-admin/:id', adminController.deleteAdmin);
router.post('/update-admin/:id', adminController.postUpdateAdmin);





module.exports = router;


