const router = require('express').Router(); //link express to the file
const axios = require('axios'); //import axios
const urlParse = require('url-parse'); //import url-parse
const qs = require('query-string'); // import querystring
require('dotenv').config(); //make the file  to use .env

const redirectUri = process.env.REDIRECT_URI;


function getGoogleAuthURL(){
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'
    const options = {
        redirect_uri : redirectUri,
        client_id : process.env.GOOGLE_CLIENT_ID,
        access_type : 'offline',
        response_type : 'code',
        scope : 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
        prompt : 'consent'
    }
   
    return `${rootUrl}?${qs.stringify(options)}`
}
    
function getTokens({code, clientId, clientSecret, redirectUri}){
    const url = 'https://oauth2.googleapis.com/token'
    const options = {
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: redirectUri,
        grant_type: 'authorization_code'
    }

     return axios.post(url, qs.stringify(options), {
        headers: {
            
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }).then((res) => res.data)
    .catch(err => console.log(err))
}

    router.get('/register', (req, res) => {
    res.redirect(getGoogleAuthURL());
})

    router.get('/callback', async (req, res)=>{
    const queryUrl = new urlParse(req.url)
    const code = qs.parse(queryUrl.query).code

    const {id_token, access_token} = await getTokens({
        code,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        redirectUri:  process.env.REDIRECT_URI
     
    })
    // console.log(id_token, access_token)
     
    const GoogleUser =  await axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=${access_token}`,{
        headers : {
            Authorization: `Bearer ${id_token}`
        }
    }).then(res => res.data)
    .catch(err => console.log(err))

     console.log(GoogleUser)
    
    
    })


module.exports = router; 