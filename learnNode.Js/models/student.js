const getDb = require('../util/database').getDb;

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
        db.collection('students')
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
}
