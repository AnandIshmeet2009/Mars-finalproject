const router = require('express').Router(); //link express to the file
const axios = require('axios'); //import axios
const urlParse = require('url-parse'); //import url-parse
const qs = require('querystring'); // import querystring
require('dotenv').config(); //make the file  to use .env

const redirectUri = process.env.REDIRECT_URI;


function getGoogleAuthUrl() {
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth?';
    const options = {
        client_id: process.env.GOOGLE_CLIENT_ID,
        redirect_uri: redirectUri,
        response_type: 'code',
        scope: 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        access_type: 'offline',
        prompt: 'consent'
    };
    return `${rootUrl}${qs.stringify(options)}`;

}
    router.get('/register', (req, res) => {
    res.redirect(getGoogleAuthUrl());
    res.send('Register Page')
})


router.get('/callback', (req, res) => {
    const queryUrl = new urlParse(req.url)
    const data = qs.parse(queryUrl.query).code

    console.log(data)
})


// router.get('/auth/register', (req, res) => {
//     res.send('Register Page')
// })



module.exports = router; 