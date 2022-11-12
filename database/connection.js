const mongoose = require('mongoose');
// const mongo_url = "mongodb+srv://sajjani:sajjani123@cluster0.jd5hev6.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async() =>{
    try{
        // mongodb connection string
        const con = await mongoose.connect(mongo_url);
        console.log('MongoDB database connected');

    }catch(err){
        console.log(err);
        process.exit(1); // exit from the process (1 = true )
        }
}

