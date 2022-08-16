const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users





const bookSchema = mongoose.Schema( {
    bookname: String,
    authorname: String,
   
    
    category: {
        type: String,
        enum: ["js", "java", "python"] 
    },
    price: Number,
   
}, { timestamps: true });

module.exports = mongoose.model('user',bookSchema)






// String, Number
// Boolean, Object/json, array