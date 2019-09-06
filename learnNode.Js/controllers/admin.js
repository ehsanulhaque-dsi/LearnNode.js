exports.getStudentList = (req, res, next ) => {
    res.render('admin/student-list', {pageTitle : 'Home page'});
}

exports.getTeacherList = (req, res, next ) => {
    res.render('admin/teacher-list', {pageTitle : 'Home page'});
}

exports.getAdminLogin = (req, res, next ) => {
    res.render('admin/login', {pageTitle : 'Admin login'});
}

exports.getRegisterAdmin = (req, res, next ) => {
    res.render('admin/register-admin', {pageTitle : 'Admin sign-up'});
}

exports.getForgotPassword = (req, res, next ) => {
    res.render('admin/forgot-password', {pageTitle : 'Forgot password'});
}

exports.getVerifyLogin = (req, res, next ) => {
    res.redirect('/student-list');
}

