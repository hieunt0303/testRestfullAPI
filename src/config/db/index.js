const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/education_dev');
        console.warn('success')

    } catch (error) {
        console.error('fail')
    }
}
module.exports = { connect }