const express = require('express');
const {getSectionPage} = require('../controller/section')
const router = express.Router()

router.get('/home', getSectionPage('home'))
router.get('/admin', getSectionPage('admin'))

module.exports = router