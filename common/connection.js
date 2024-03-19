const mongoose = require('mongoose');


const MongoDB_con = () => {
    mongoose.connect(process.env.MongoUrl)
    .then(() => {
        console.log("MongoDB connected successfully......");
    })
    .catch((err) => {
        console.log("Connection error ", err)
    })
}



module.exports =  MongoDB_con;