/*
Student name: Iuliia Chugunova
Student ID: 301150836
File: config.js
Date: October 18th, 2023
Description: contains configuration information such us port, environment status, connection string
*/

import dotenv from 'dotenv';
dotenv.config();

const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
    mongoUri: process.env.MONGODB_URI
}
export default config;

   