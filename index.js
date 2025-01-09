const express = require('express');
const mongoose = require('mongoose')
const path = require('path');
const app = express()
const port = 8000
const articleRouter = require('./route/article')
const sectionRouter = require('./route/section')

mongoose.connect('mongodb://127.0.0.1:27017/blogAPP')
.then(()=>{console.log('database connected')})
.catch(()=>{console.log('some problem occured')})

app.set('view engine', 'ejs'); // Example using EJS
app.set('views', path.join(__dirname, 'views')); // Example path

app.use(express.urlencoded({extended : false}))

app.use( '/',sectionRouter)
app.use('/article', articleRouter)

app.listen(8000, ()=>{
    console.log('server started')
})

