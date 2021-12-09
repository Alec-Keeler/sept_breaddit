const express = require('express')
const router = express.Router()
const csurf = require('csurf')
const csrfProtection = csurf({ cookie: true })
const { Post } = require('../db/models')

const authCheck = (req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/login')
    }
}


router.get('/', csrfProtection, async(req, res) => {
    const posts = await Post.findAll()
    res.render('posts', {posts, csrfToken: req.csrfToken()})
})

router.get('/new', authCheck, csrfProtection, (req, res) => {
    res.render('new-post', {csrfToken: req.csrfToken()})
})

router.post('/new', csrfProtection, async(req, res) => {
    const {title, content} = req.body
    const post = await Post.create({
        title,
        content,
        subId: 1,
        userId: req.session.user.userId
    })
    res.redirect('/posts')
})

router.post('/:id/delete', csrfProtection, async(req, res) => {
    const post = await Post.findByPk(req.params.id)
    if (post) {
        await post.destroy();
        res.redirect('/posts')
    } else {
        res.send('what the heck there was an error')
    }
})

module.exports = router;