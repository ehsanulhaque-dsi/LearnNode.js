const Teacher = require('../models/teacher');
const delay = require('delay');

exports.getRegisterTeacher = (req, res, next) => {
    res.render('teachers/register-teacher', { pageTitle: 'Teachers Registration' })
}

exports.postRegisterTeacher = (req, res, next) => {
    console.log('request body: ');
    console.log(req.body);
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userId = req.body.userId;
    const dept = req.body.dept;

    const teacher = new Teacher(firstName, lastName, email, userId, dept);
    teacher.save();
    delay(100);
    res.redirect('/teacher-list');

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