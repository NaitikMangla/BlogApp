const model = require('../model/article');
// methods to actually perform crud :
async function getArticle(req, res, next)
{
    try {
        let title = req.params.title
        let data = await model.findOne({title : title})
        res.status(200).render('article', data) // article page is rendered according to returned data
    } catch (err) {
        next(err)
    }
}
async function deleteArticle(req, res, next) {
    try {
        let title = req.params.title
        await model.deleteOne({title : title})
        res.json({ success: true, redirectUrl: 'http://localhost:8000/home' }); // go to home after deletion
    } catch (err) {
        next(err)
    }
}



async function createArticle(req, res, next){
    try {
        let data = req.body
        await model.create(data)
        res.status(201).redirect('http://localhost:8000/home') // go to home after creation
    } catch (err) {
        next(err)
    }
}
async function updateArticle(req, res, next){
    try {
        console.log('req is recieved')
        let title = req.params.title
        let data = req.body // json
        await model.updateOne({title : title}, data)
        res.status(200).redirect('http://localhost:8000/home') // go to home after upadte in data
    } catch (err) {
        next(err)
    }
}
async function getCreatePage(req, res, next) {
    try {
        res.status(200).render('create')
    } catch (err) {
        next(err)
    }
}
async function getUpdatePage(req, res, next) {
    try {
        let title = req.params.title
        let data = await model.findOne({title})
        res.status(200).render('update',data) // update page would contain sent data already
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getArticle,
    getCreatePage,
    getUpdatePage,
    createArticle,
    updateArticle,
    deleteArticle
}