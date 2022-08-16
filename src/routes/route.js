const express = require('express');
const router = express.Router();
const app = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

// problem 1

app.get("/sol1", function (req, res) {

    let arr= [1,2,3,5,6,7]
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
  
    let nth= arr.pop()
    let consecutiveSum= nth * (nth+1) / 2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });
 

module.exports = router;
module.exports = app;