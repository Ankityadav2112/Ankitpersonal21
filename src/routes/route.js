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

  // sol2

  app.get("/sol2", function (req, res) {

    let arr= [33,34,35,37,38]
    let len =arr.length
  
    let total = 0;
    for (var i in arr) {
        total += arr[i];
    }
    
    let firstnum =arr[0]
    let nth= arr.pop()
    let consecutiveSum= (len +1)* (firstnum+nth)/2
    let missingNumber= consecutiveSum - total
  
    res.send(  { data: missingNumber  }  );
  });


  //  post request - player and booking

  let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

app.post('/players', function (req, res) {
    
    let newPlayer = req.body
    let newPlayersName = newPlayer.name
    let isNameRepeated = false

    //let player = players.find(p => p.name == newPlayersName)

    for(let i = 0; i < players.length; i++) {
        if(players[i].name == newPlayersName) {
            isNameRepeated = true;
            break;
        }
    }

    //undefined is same as false/ a falsy value
    if (isNameRepeated) {
        //Player exists
        res.send("This player was already added!")
    } else {
        //New entry
        players.push(newPlayer)
        res.send(players)
    }
});

 

module.exports = router;
module.exports = app;