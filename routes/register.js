const router = require('express').Router();


router.get('/register', (req, res) => {
    res.render('register.ejs')
})


module.exports = router;