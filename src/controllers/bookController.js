const { count } = require("console")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

    let allBooks= await BookModel.find( ).count()
    res.send({msg: allBooks})
}

const BookList= async function (req, res) {
    let list = await BookModel.find().select({ bookNmae: 1, authorName: 1, _id: 0 })
    res.send({ msg: list })
}

const getbookyear = async function (req, res) {
    let listyear = await BookModel.find( {  $or: [  {  "Year": 2007 }] } ).select( { bookNmae: 1, _id: 0})
             
    res.send(listyear)
}

const getspecificbook= async function (req, res) {
    let booklist = await BookModel.find({authorName : "Yuvraj Singh" })
    res.send({ msg: booklist })

}

const getpricebook= async function (req, res) {
    let bookprice = await BookModel.find({"Price.indianPice" : {$in: ["500"]}} ).select({bookNmae:1,_id:0})
    res.send({ msg: bookprice })
}

const getrandombook= async function (req, res) {
    let allBooks = await BookModel.find({$or:[ {stockAvilable: true},{ totalPages: {$gt: 300}}]})
    res.send({msg: allBooks })

}







module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.BookList= BookList
module.exports.getbookyear= getbookyear
module.exports.getspecificbook= getspecificbook
module.exports.getpricebook = getpricebook
module.exports.getrandombook = getrandombook
