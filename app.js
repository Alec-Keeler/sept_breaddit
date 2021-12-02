const express = require('express');
const app = express();
const { User } = require('./models');

app.set('view engine', 'pug')

// path: / method: get
app.get('/', (req, res) => {
    // res.send('You have arrived at Breaddit'
    res.render('home', {title: 'Home Page', fruit: 'banana'})
})

app.get('/users', async(req, res) => {
    const users = await User.findAll()
    // console.log(users)
    res.render('users', {title: 'Users List', users})
})


const port = 8080;
app.listen(port, () => console.log(`App is listening on port ${port}...`))