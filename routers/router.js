var express = require('express');
var router = express.Router()
var service1 = require('./service1')
var service2 = require('./service2')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(service1)
router.use(service2)

module.exports = router