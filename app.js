const express = require('express');
const app = express();
const { User } = require('./models');
const userRouter = require('./routes/users');
const cookieParser = require('cookie-parser');

app.set('view engine', 'pug')
app.use(express.static('public'))
// middleware to access form data vvvv
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())

app.use((req, res, next) => {
    req.banana = 'banana'
    next()
})

app.use('/users', userRouter)
app.use('/banana', userRouter)

// path: / method: get
app.get('/', (req, res) => {
    // res.send('You have arrived at Breaddit'
    res.render('home', {title: 'Home Page', fruit: 'banana'})
})


// /about/, /foo/, /about-foo/, /about_foo/
// ! /about/foo, /something/somethingelse, /word/word/word
app.all(/^\/a[abcdef]+_.$/, (req, res) => {
    console.log(req.method, req.path)
    res.send('Page not found')
})

const port = 8080;
app.listen(port, () => console.log(`App is listening on port ${port}...`))