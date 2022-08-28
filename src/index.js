const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const moment = require("moment")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Ankit2112:578wjXzPtv9O6n76@cluster0.b51n5rh.mongodb.net/ankitmiddleware1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {

        const timeStamp =moment().unix();
        const date=moment().format('L');
        const time =moment().format('LTS');
        const ipAdress= req.ip;
        const r= req.path


        console.log (timeStamp,date,time,ipAdress,r);
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
