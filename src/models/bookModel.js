const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookNmae: String,
    Price:{
    indianPrice: String},
    Year: Number,
    Tags : [ String ],
    authorName : String,
    totalPages : Number,
    stockAvilable: Boolean,
    
    sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
