const express = require('express');
const app = express()

app.set('view engine', 'pug')

// path: / method: get
app.get('/', (req, res) => {
    // res.send('You have arrived at Breaddit'
    res.render('home', {title: 'Home Page', class: 'banana'})
})


const port = 8080;
app.listen(port, () => console.log(`App is listening on port ${port}...`))