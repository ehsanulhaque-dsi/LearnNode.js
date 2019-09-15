const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const adminRouters = require('./routes/admin');

app.use(studentRoutes);
app.use(teacherRoutes);
app.use(adminRouters);

app.use(errorController.get404);

mongoConnect(() => {
    console.log("Connected!!!");
    app.listen(3000);
});

