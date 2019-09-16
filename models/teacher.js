const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');



module.exports = class Teacher {
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
            .collection('teachers')
            .insertOne(this)
            .then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
    }

    static getAllTeacher() {
        const db = getDb();
        return db
            .collection('teachers')
            .find()
            .toArray()
            .then(teachers => {
                return teachers;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(id) {
        const db = getDb();
        return db.collection('teachers')
            .find({ _id: new mongodb.ObjectId(id) })
            .next()
            .then(teacher => {
                return teacher;
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateTeacher(id) {
        const db = getDb();
        return db
            .collection('teachers')
            .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: this });
    }

    static deleteTeacher(id) {
        const db = getDb();
        return db
            .collection('teachers')
            .deleteOne({ _id: new mongodb.ObjectId(id) })
            .catch(err => {
                console.log(err);
            })
    }
}