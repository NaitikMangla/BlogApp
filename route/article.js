const express = require('express');
const {
    getArticle,
    getCreatePage,
    getUpdatePage,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controller/article')

const router = express.Router()

router.route('/')
.post(createArticle)

router.route('/create').get(getCreatePage)
router.route('/update/:title').get(getUpdatePage).post(updateArticle)
router.route('/:title')
.get(getArticle)
.delete(deleteArticle)


module.exports = router