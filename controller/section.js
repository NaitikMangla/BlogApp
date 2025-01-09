const model = require('../model/article')

function getSectionPage(section)
{
    return async (req, res, next) => {
        // all the articles created so far should be displayed
        let articles = await model.find({}) // send array of JSON
        res.status(200).render('section', {section, articles})
    }
}

module.exports = {getSectionPage}