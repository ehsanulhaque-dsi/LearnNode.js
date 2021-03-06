const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');


module.exports = class Student {
    constructor(firstName, lastName, email, userId, dept) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userId = userId;
        this.dept = dept;
    }

    save() {
        const db = getDb();
        return db
            .collection('students')
            .insertOne(this)
            .then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
    }

    static getAllStudent() {
        const db = getDb();
        return db
            .collection('students')
            .find()
            .toArray()
            .then(students => {
                return students;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(id) {
        const db = getDb();
        return db.collection('students')
            .find({ _id: new mongodb.ObjectId(id) })
            .next()
            .then(student => {
                return student;
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateStudent(id) {
        const db = getDb();
        return db
            .collection('students')
            .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: this });
    }

    static deleteStudent(id) {
        const db = getDb();
        return db
            .collection('students')
            .deleteOne({ _id: new mongodb.ObjectId(id) })
            .catch(err => {
                console.log(err);
            })
    }
}
