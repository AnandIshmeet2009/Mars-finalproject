const router = require('express').Router();

router.get('/register', (req, res) => {
    res.send('Register Page')
})



module.exports = router;