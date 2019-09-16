const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

module.exports = class admin {
    constructor(firstName, lastName, email, userId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userId = userId;
    }

    save() {
        const db = getDb();
        return db
            .collection('admins')
            .insertOne(this)
            .then(result => {
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
    }

    static getAllAdmin() {
        const db = getDb();
        return db
            .collection('admins')
            .find()
            .toArray()
            .then(admins => {
                return admins;
            })
            .catch(err => {
                console.log(err);
            });
    }

    static findById(id) {
        const db = getDb();
        return db.collection('admins')
            .find({ _id: new mongodb.ObjectId(id) })
            .next()
            .then(admin => {
                return admin;
            })
            .catch(err => {
                console.log(err);
            });
    }

    updateAdmin(id) {
        const db = getDb();
        return db
            .collection('admins')
            .updateOne({ _id: new mongodb.ObjectId(id) }, { $set: this });
    }

    static deleteAdmin(id) {
        const db = getDb();
        return db
            .collection('admins')
            .deleteOne({ _id: new mongodb.ObjectId(id) })
            .catch(err => {
                console.log(err);
            })
    }
}