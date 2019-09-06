exports.getRegisterTeacher = ( req, res, next) =>{
    res.render('teachers/register-teacher', { pageTitle : 'Teacher Registration'})
}

exports.getEditTeacher = ( req, res, next) =>{
    res.render('teachers/edit-teacher', { pageTitle : 'Edit teacher info'})
}