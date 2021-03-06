const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })
const bcrypt = require('bcryptjs')

const asyncHandler = (handler) => {
    return (req, res, next) => {
        return handler(req, res, next).catch(next);
    };
};

router.use((req, res, next) => {
    console.log('hello from users router', req.path)
    next()
})

const testBanana = (req, res, next) => {
    console.log(req.banana)
    next()
}

// /users/
router.get('/', testBanana, asyncHandler(async (req, res) => {
    const users = await User.findAll()
    if (req.banana) {
        res.render('users', { title: 'Users List', users })
    } else {
        res.send('where is the banana')
    }
}))

// method: get path: /users/:id
router.get('/:id(\\d+)', async (req, res, next) => {
    const user = await User.findByPk(req.params.id)
    res.render('profile', { title: 'Profile Page', user })
})

router.get('/signup', csrfProtection, (req, res) => {
    res.render('signup', { csrfToken: req.csrfToken(), errors: [], data: {} })
})

const emailChecker = (req, res, next) => {
    const exp = /[\w\d-]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/
    req.errors = []
    if (exp.test(req.body.email)) {
        next()
    } else {
        req.errors.push('Please provide a valid email')
        next()
    }
}


router.post('/signup', emailChecker, csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.body)
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 12)
    if (req.errors.length === 0) {
        const user = await User.create({
            username,
            email,
            hashedPassword
        })
        req.session.user = {userId: user.id, username}
        res.redirect('/users')
    } else {
        console.log(req.errors)
        const errors = req.errors
        res.render('signup', {csrfToken: req.csrfToken(), errors, data: req.body})
    }
}))

router.get('/login', csrfProtection, (req, res) => {
    res.render('login', {csrfToken: req.csrfToken()})
})

router.post('/login', csrfProtection, async(req, res) => {
    const { email } = req.body;
    const user = await User.findOne({
        where: {
            email
        }
    })
    const isPass = await bcrypt.compare(req.body.password, user.hashedPassword)
    if (isPass) {
        req.session.user = { userId: user.id, username: user.username }
        res.redirect('/')
    } else {
        res.redirect('/users/login')
    }
})

router.get('/logout', (req, res) => {
    delete req.session.user
    // res.redirect('/')
    req.session.save(() => {
        res.redirect('/')
    })
})


module.exports = router;