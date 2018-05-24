var express = require('./lib/express')
var path = require('path')
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended: false})
var mimeType = require('./lib/mime')

var app = express()

app.use(urlencodedParser)
app.use(mimeType)
app.use(express.static(path.join(__dirname), 'static'))
app.set('views', path.join(__dirname, 'views'))

app.use(function(req, res, next){
  console.log('middleWare 1')
  next()
})

app.use(function(req, res, next){
  console.log('middleWare 2')
  next()
})

app.use('/hello', function(req, res){
  console.log('/hello..')
  res.send('hello world')
})

app.use('/getWeather', function(req, res){
  console.log('/getWeather..')
  res.send({url: '/getWeather', city: req.query.city})
})

app.use('/search', function(req, res){
  console.log(req)
  res.send(req.body)
})

app.use('/about', function(req, res){
  res.render('about.html', {
    title: "我是谁",
    name: 'Helloyong',
    age: 20,
    blog: 'https://blog.csdn.net/Helloyongwei'
  })
})

app.use(function(req, res){
  res.send(404, 'Not Found')
})

module.exports = app
