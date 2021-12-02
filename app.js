const express = require('express');
const app = express();
const { User } = require('./models');
const userRouter = require('./routes/users');

app.set('view engine', 'pug')

app.use('/users', userRouter)
app.use('/banana', userRouter)

// path: / method: get
app.get('/', (req, res) => {
    // res.send('You have arrived at Breaddit'
    res.render('home', {title: 'Home Page', fruit: 'banana'})
})


// app.get('/users', async(req, res) => {
//     const users = await User.findAll()
//     // console.log(users)
//     res.render('users', {title: 'Users List', users})
// })

// // method: get path: /users/:id
// app.get('/users/:id(\\d+)', async(req, res) => {
//     const user = await User.findByPk(req.params.id)
//     res.render('profile', {title: 'Profile Page', user})
// })

// /about/, /foo/, /about-foo/, /about_foo/
// ! /about/foo, /something/somethingelse, /word/word/word
app.all(/^\/a[abcdef]+_.$/, (req, res) => {
    console.log(req.method, req.path)
    res.send('Page not found')
})

const port = 8080;
app.listen(port, () => console.log(`App is listening on port ${port}...`))