const students = [];

module.exports = class Student{
    constructor(firstname, lastname, id, dept){
        this.firstname = firstname;
        this.lastname = lastname;
        this.id = id;
        this.dept = dept;
    }

    save(){
        students.push(this);
    }

    static getAllStudents(){
        return students
    }
}
