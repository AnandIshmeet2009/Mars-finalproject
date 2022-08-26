const express = require('express'); //link express to the file
const app = express();
const mongoose = require('mongoose'); //import mongoose
const session = require('express-session'); //import session
const authRoute = require('./routes/auth');  //authfile line
const homeRoute = require('./routes/home'); //homefile linek
require('dotenv').config(); //import dotenv


//DB connect
mongoose.connect(process.env.DB_URI,  
{ useNewUrlParser: true, 
useUnifiedTopology : true 
}).then(() => console.log('DB connected!'))
.catch(err => console.log(err));

//Middlewares
app.use(express.static(__dirname + '/public')); //link to public folder
app.set('view engine', 'ejs') 
app.use(
    session({
        secret : 'Ishmeet',
        cookie : {
            maxAge : 60000 * 60 * 24 // 1 day
        },
        saveUninitialized : true,
        resave : false
    })
)

//Routes
app.use('/auth', authRoute);
app.use ('/home', homeRoute);


app.get('/', (req, res) =>{
     res.render('index'); 
})

app.get('/about', (req, res) =>{ 
    res.render('about');
})

const PORT = process.env.PORT || 3000;  // || = OR, && = AND

app.listen(PORT,  () =>{
    console.log(`Server is running on port ${PORT}`);
}) 
