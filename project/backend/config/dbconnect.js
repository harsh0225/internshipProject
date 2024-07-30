const mongoose = require('mongoose');

exports.dbconnect = async () => {
       await mongoose.connect("mongodb://localhost:27017/canteen")
        .then(
            console.log("MongoDB connection establish successfully")
        )
        .catch((error) => {
            console.log(error)
        })
}