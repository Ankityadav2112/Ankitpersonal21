const express = require('express');
//const abc = require('../introduction/intro')
const module1 = require('../logger/logger')
const module2 = require('../util/helper')
const module3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
   // console.log('My batch is', abc.name)
    console.log(module1.myinfo)
    console.log('Today date is ',module2.mydate)
    console.log('Present Month is',module2.mymonth)
    console.log('My Batch Info:',module2.mybatchinfo)
    console.log(module3.mystr)
    console.log('ANKIT to Lower case',module3.mylowercase)
    console.log('ankit to Upper case',module3.myuppercase)
    //abc.printName()
    res.send('My first ever api!')
});


router.get('/test-you', function(req, res){
    
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason