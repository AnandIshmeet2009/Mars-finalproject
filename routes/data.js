const router = require('express').Router();
const Data = require('../models/Data');


const newData = new Data({
    Fullname:  Fullname,
    Age: Age,
    email: email,
    PhoneNumber: PhoneNumber,
    Whydoyouwanttogotomars: Whydoyouwanttogotomars,
    Aboutyou: Aboutyou
})

newData.save()
.then(() =>{
    users.fineOne({email: req.session.user.email})
    .then(doc => {
        let data = doc.data
        data.push(Fullname,Age,email,PhoneNumber,Whydoyouwanttogotomars,Aboutyou)
        doc.markMODIFIED('data')
        doc.save()
        .then(() => {
            res.redirect('/register')
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}) 
.catch(err => console.log(err))



module.exports = router;