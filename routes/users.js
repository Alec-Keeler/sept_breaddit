const express = require('express');
const router = express.Router();
const { User } = require('../models');

router.use((req, res, next) => {
    console.log('hello from users router', req.path)
    next()
})

// /users/
router.get('/users', async (req, res) => {
    const users = await User.findAll()
    // console.log(users)
    res.render('users', { title: 'Users List', users })
})

// method: get path: /users/:id
router.get('/users/:id(\\d+)', async (req, res) => {
    const user = await User.findByPk(req.params.id)
    res.render('profile', { title: 'Profile Page', user })
})


module.exports = router;