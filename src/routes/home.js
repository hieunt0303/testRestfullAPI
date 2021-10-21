const express = require('express')
const router = express.Router()
const handler = require('../app/controllers/handler')


router.get('/edit', handler.update)
router.post('/create', handler.create)
router.delete('/delete', handler.delete)
router.get('/showAll', handler.read)

module.exports = router