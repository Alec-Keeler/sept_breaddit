const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if (req.session.user) {
        next()
    } else {
        res.redirect('/users/signup')
    }
})


router.get('/', (req, res) => {
    res.send('you have arrived at the posts router')
})



module.exports = router;