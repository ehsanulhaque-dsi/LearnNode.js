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

    student
        .save()
        .then(student => {
            delay(100);
            res.redirect('/student-list');
        })
        .catch(err => {
            console.log(err);
        });




}

exports.getEditStudent = (req, res, next) => {
    const id = req.params.id;

    Student.findById(id)
        .then(student => {
            res.render('students/edit-student', {
                pageTitle: "Edit infromation",
                student: student
            });
        })
}

exports.postUpdateStudent = (req, res, next) => {
    const id = req.params.id;
    const updateFirstName = req.body.firstName;
    const updateLastName = req.body.lastName;
    const updateEmail = req.body.email;
    const updateUserId = req.body.userId;
    const updateDept = req.body.dept;
    console.log(req.body);


    const student = new Student(updateFirstName, updateLastName, updateEmail, updateUserId, updateDept);

    student
        .updateStudent(id)
        .then(student => {
            delay(100);
            res.redirect('/student-list');
        })
        .catch(err => {
            console.log(err);
        })


}

exports.postDeleteStudent = (req, res, next) => {
    const id = req.params.id;
    Student
        .deleteStudent(id)
        .then(student => {
            delay(100);
            res.redirect('/student-list');
        })
        .catch(err => {
            console.log(err);
        });
}