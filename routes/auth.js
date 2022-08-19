const router = require('express').Router();

router.get('/register', (req, res) => {
    res.send('Register Page')
})


// router.get('/auth/register', (req, res) => {
//     res.send('Register Page')
// })



module.exports = router;
