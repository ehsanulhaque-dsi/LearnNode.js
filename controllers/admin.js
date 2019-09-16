const Student = require('../models/student');
const Teacher = require('../models/teacher');
const Admin = require('../models/admin');
const delay = require('delay');



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

exports.getAdminList = (req, res, next) => {
    Admin.getAllAdmin()
        .then(admins => {
            res.render('admin/admin-list', {
                admins: admins,
                pageTitle: 'Admin list'
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

exports.postRegisterAdmin = (req, res, next) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userId = req.body.userId;

    const admin = new Admin(firstName, lastName, email, userId);
    admin
        .save()
        .then(admin => {
            console.log(admin);
            delay(100);
            res.redirect('/admin-list');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getAdminEdit = (req, res, next) => {
    const id = req.params.id;

    Admin
        .findById(id)
        .then(admin => {
            res.render("admin/edit-admin", {
                admin: admin,
                pageTitle: "Edit infromation"
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postUpdateAdmin = (req, res, next) => {
    const id = req.params.id;
    const updateFirstName = req.body.firstName;
    const updateLastName = req.body.lastName;
    const updateEmail = req.body.email;
    const userId = req.body.userId;



    const admin = new Admin(updateFirstName, updateLastName, updateEmail, userId);

    admin
        .updateAdmin(id)
        .then(admin => {
            delay(100);
            res.redirect('/admin-list');
        })
        .catch(err => {
            console.log(err);
        })


}

exports.deleteAdmin = (req, res, next) => {
    const id = req.params.id;
    Admin
        .deleteAdmin(id)
        .then(admin => {
            delay(100);
            res.redirect('/admin-list');
        })
        .catch(err => {
            console.log(err);
        });
}

