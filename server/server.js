/*
Student name: Iuliia Chugunova
Student ID: 301150836
File: server.js
Date: October 18th, 2023
Description: configure the server, connect server to database
*/

import config from '../config/config.js';
import app from '../server/express.js';
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

//connect to MongoDB
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
useUnifiedTopology: true } )

  .then(() => {
        console.log("Connected to the database!");
  })
    
//message if can't connect db
mongoose.connection.on('error', () => {
throw new Error(`unable to connect to database: ${config.mongoUri}`) 
});
app.get("/", (req, res) => {
res.json({ message: "Welcome to DressStore application." });
});
app.listen(config.port, (err) => { 
if (err) {
console.log(err); 
}
console.info('Server started on port http://localhost:%s.', config.port); 
})