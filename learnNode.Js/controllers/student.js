const Student = require('../models/student');

exports.getStudents = (req, res, next ) => {
    res.render('students/home', { pageTitle: "Home page"});
}

exports.addStudent = (req, res, next ) => {
    const student1 = new Student("Ehsanul", "haque", "15-26705-1", "Computer Science");
    student1.save();

    const student2 = new Student("Baky", "forhad", "15-26705-2", "Computer Science");
    student2.save();

    const students = Student.getAllStudents();
    let output = '';
    students.forEach(student => {
        output =  student.firstname;
        console.log("First name :" + output);
        output =  student.lastname;
        console.log("Last name :" + output);
    }); 
    res.send("Student info is now showing in consloe!");

}

exports.getRegisterStudent =(req, res, next) => {
    //res.send("thsi is form register form");
    res.render('students/register-student', { pageTitle : 'Student Registration'});
}

exports.getEditStudent = (req, res, next ) => {
    res.render('students/edit-student', {pageTitle : "Edit infromation"});
}