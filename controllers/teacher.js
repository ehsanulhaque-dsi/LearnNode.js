const Teacher = require('../models/teacher');
const delay = require('delay');

exports.getRegisterTeacher = (req, res, next) => {
    res.render('teachers/register-teacher', { pageTitle: 'Teachers Registration' })
}

exports.postRegisterTeacher = (req, res, next) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userId = req.body.userId;
    const dept = req.body.dept;

    const teacher = new Teacher(firstName, lastName, email, userId, dept);
    teacher.save()
        .then(tescher => {
            delay(100);
            res.redirect('/teacher-list');
        })
        .catch(err => {
            console.log(err);
        });


}

exports.getEditTeacher = (req, res, next) => {
    const id = req.params.id;
    Teacher
        .findById(id)
        .then(teacher => {
            res.render('teachers/edit-teacher', {
                pageTitle: 'Edit teacher info',
                teacher: teacher
            })
        })
        .catch(err => {
            console.log(err);
        });

}

exports.postUpdateTeacher = (req, res, next) => {
    const id = req.params.id;
    const updateFirstName = req.body.firstName;
    const updateLastName = req.body.lastName;
    const updateEmail = req.body.email;
    const updateUserId = req.body.userId;
    const updateDept = req.body.dept;


    const teacher = new Teacher(updateFirstName, updateLastName, updateEmail, updateUserId, updateDept);

    teacher
        .updateTeacher(id)
        .then(teacher => {
            delay(100);
            res.redirect('/teacher-list');
        })
        .catch(err => {
            console.log(err);
        })


}

exports.postDeleteTeacher = (req, res, next) => {
    const id = req.params.id;
    Teacher
        .deleteTeacher(id)
        .then(teacher => {
            delay(100);
            res.redirect('/teacher-list');
        })
        .catch(err => {
            console.log(err);
        });
}