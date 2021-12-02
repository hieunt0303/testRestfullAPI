const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect(process.env.LINK_MONGODB);
        console.warn('success')

    } catch (error) {
        console.error('fail')
    }
}
module.exports = { connect }