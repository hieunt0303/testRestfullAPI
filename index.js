const dotenv = require("dotenv").config();
const express = require('express')
const path = require('path');
const route = require('./src/routes')
const bodyParser = require('body-parser');
const app = express()
const cors = require("cors");
const helmet = require("helmet");
const port = process.env.PORT || 3004
const db = require('./src/config/db')
db.connect()
console.log(process.env)
app.use(express.static(path.join(__dirname, 'src', 'public')))
console.log(__dirname)

// set lại route handlebars
app.set('views', path.join(__dirname, 'src', 'resources', 'views'));
// cho phép http hiển thị json kiểu uncorder
app.use(express.urlencoded())

app.use(helmet());

// route init
route(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




