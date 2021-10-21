const mongoose = require('mongoose')
const Course = require('../models/Course')

class handler {
    delete(req, res){
        Course.collection.deleteOne({ slug: req.body.slug})
        .then(() => {
            res.send(`delete success slug: ${req.body.slug}`)
        })
    }
    create(req, res) {
        Course.collection.insertOne(req.body)
            .then(() => {
                Course.find().lean()
                    .then(courses => {
                        res.send(courses)
                    })
            })
    }
    update(req, res) {
        Course.updateOne({ slug: req.body.slug }, { name: req.body.name })
            .then(() => {
                Course.find({ slug: req.body.slug }).lean()
                    .then(course => {
                        res.send(course)
                    })
            })
    }
    read(req, res) {
        Course.find().lean()
            .then(courses => {
                res.send(courses)
            })
            .catch(err => {
                res.status(500).send(err)
            })
    }
}

module.exports = new handler()