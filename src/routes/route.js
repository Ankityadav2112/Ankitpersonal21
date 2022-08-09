const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// problem 01

router.get('/movies', function (req, res){
    let movies = ['MS DHONI', 'PUSHPA', '1983','DON']
    res.send(movies)
})
// problem 02 & 03
router.get('/movies/:IndexNumber', function (req, res){
    let movies = ["MS DHONI", "PUSHPA", "1983"]
    let requestParams = req.params
    if(requestParams.IndexNumber<movies.length){
        res.send(movies[requestParams.IndexNumber])
    }else{
        res.send('Enter a valid IndexNumber')

    } 
})

// problem 04

router.get("/Films", function (req, res){
    let Films = [ {
        'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
       
    res.send(Films)
})

//problem 05

router.get("/films/:filmId", function(req, res){
    const films = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

       let filmId = req.params.filmId

      
       for(let i = 0; i < films.length; i++){
           let film = films[i]
           if(film.id == filmId) {
               
               return res.send(film)
           }
       }

       
       res.send("The film id doesn't exit")
})









module.exports = router;