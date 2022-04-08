const express = require('express')
const nunjucks = require('nunjucks')
const path = require('path')
const router = require('./router')
const controller = require('./controller')

const app = express()

app.use('/public/', express.static(path.join(__dirname, './public/')))

nunjucks.configure('./views', {
  autoescape: true,
  watch: true,
  express: app,
})

app.controller = controller;
router(app)

app.listen(8089, () => {
  console.log('server started at: http://localhost:8089')
})
