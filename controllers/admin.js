const Student = require('../models/student');
const Teacher = require('../models/teacher');

exports.getStudentList = (req, res, next) => {
    Student.getAllStudent()
        .then(students => {
            res.render('admin/student-list', {
                students: students,
                pageTitle: 'Student list'
            });

        })
        .catch(err => {
            console.log(err);
        });
};

exports.getTeacherList = (req, res, next) => {
    Teacher.getAllTeacher()
        .then(teachers => {
            res.render('admin/teacher-list', {
                teachers: teachers,
                pageTitle: 'Teacher list'
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.getAdminLogin = (req, res, next) => {
    res.render('admin/login', { pageTitle: 'Admin login' });
}

exports.getRegisterAdmin = (req, res, next) => {
    res.render('admin/register-admin', { pageTitle: 'Admin sign-up' });
}

exports.getForgotPassword = (req, res, next) => {
    res.render('admin/forgot-password', { pageTitle: 'Forgot password' });
}

exports.getVerifyLogin = (req, res, next) => {
    res.redirect('/student-list');
}

