const mongoose =require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Url=process.env.MONGO_URL;

const dbConnection =()=>{
    mongoose.connect(Url);

    mongoose.connection.on('connected',()=>{
        console.log("Database connected Succesfully");
    })
    mongoose.connection.on('error',(error)=>{
        console.error("Database connection error");
    })
}

module.exports=dbConnection