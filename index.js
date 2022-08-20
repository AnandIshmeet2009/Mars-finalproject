const express = require('express'); //link express to the file
const app = express();
const mongoose = require('mongoose'); //import mongoose
const authRoute = require('./routes/auth');  //authfile line
require('dotenv').config(); //import dotenv

app.use(express.static(__dirname + '/public')); //link to public folder
app.set('view engine', 'ejs')   //set view engine to ejs

//DB connect
mongoose.connect(process.env.DB_URI,  
{ useNewUrlParser: true, 
useUnifiedTopology : true 
}).then(() => console.log('DB connected!'))
.catch(err => console.log(err));

//Routes
app.use('/auth', authRoute);

app.get('/', (req, res) =>{
     res.render('hello'); 
})

app.get('/about', (req, res) =>{ 
    res.render('about');
})

const PORT = process.env.PORT || 3000;  // || = OR, && = AND

app.listen(PORT,  () =>{
    console.log(`Server is running on port ${PORT}`);
}) 
