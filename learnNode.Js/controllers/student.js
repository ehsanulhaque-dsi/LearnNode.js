const Student = require('../models/student');
const delay = require('delay');

exports.getStudents = (req, res, next) => {
    res.render('students/home', { pageTitle: "Home page" });
}

exports.getRegisterStudent = (req, res, next) => {
    //res.send("thsi is form register form");
    res.render('students/register-student', { pageTitle: 'Student Registration' });
}

exports.postRegisterStudent = (req, res, nexr) => {
    const firstName = req.body.firstName;

    const lastName = req.body.lastName;
    const email = req.body.email;
    const userId = req.body.userId;
    const dept = req.body.dept;

    const student = new Student(firstName, lastName, email, userId, dept);

    student.save();

    delay(100);

    res.redirect('/student-list');
    

}

exports.getEditStudent = (req, res, next) => {
    res.render('students/edit-student', { pageTitle: "Edit infromation" });
}