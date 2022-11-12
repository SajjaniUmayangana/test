const express = require('express');
const app = express();
const morgan = require('morgan'); // A Node. js and Express middleware to log HTTP requests and errors 
                                  // allows us to log a request on the console whenever we make a request
const bodyParser = require('body-parser');
const path = require('path');
const connectDB = require('./database/connection');
const { parseArgs } = require('util');







// MONGODB CONNECTION--------------------------------
connectDB();



// BODY PARSE MIDDLEWARE ----------------------------------------------------------------
// PARSE REQUEST TO BODY-PARSE (help to get data from input feilds)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// SET VIEW ENGINE 
app.set("view engine","ejs");



// LOAD ASSETS USING MIDDLEWARE METHOD USE ----------------------------------------------------------------
app.use("/css", express.static(path.resolve(__dirname,"assets/css")))
app.use("/images", express.static(path.resolve(__dirname,"assets/images")))
app.use("/javaScript", express.static(path.resolve(__dirname,"assets/javaScript")))



// LOAD DIFFERENT ROUTERS --------------------------------------
app.use('/',require('./routes/router'))



// Listen to the server ------------------------------------
const PORT = 3000
app.listen(PORT, ()=>{
    console.log("Server listening on port" + PORT);
});


