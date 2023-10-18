/*
Student name: Iuliia Chugunova
Student ID: 301150836
File: product.model.js
Date: October 18th, 2023
Description: defines data structure of product, allows connect to database and operate on the data 
*/

import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required"
  },
  description: {
    type: String,
    trim: true,
    required: "Description is required"
  },
  price: {
    type: Number,
    required: "Price is required"
  },
  quantity: {
    type: Number,
    required: "Quantity is required"
  },
  category: {
    type: String,
    trim: true,
    required: "Category is required"
  }
});

export default mongoose.model('Product', productSchema);
