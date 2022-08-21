const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

router.get("/BookList", BookController.BookList )

router.get("/getbookyear", BookController.getbookyear )

router.get("/getspecificbook", BookController.getspecificbook )

router.get("/getpricebook", BookController.getpricebook )

router.get("/getrandombook", BookController.getrandombook )

module.exports = router;