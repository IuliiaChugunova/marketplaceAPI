/*
Student name: Iuliia Chugunova
Student ID: 301150836
File: product.controller.js
Date: October 18th, 2023
Description: Responsible for handling incoming requests and returning responses to the client
*/

import { response } from 'express';
import Product from '../models/product.model.js';
import extend from 'lodash/extend.js'

//display create product
const create = async (req, res) => { 
    const product = new Product(req.body) 
    try {
        await product.save()
        return res.status(200).json({ 
            message: "Successfully created!"
        })
    } catch (err) {
        return res.status(400).json({
        error: "Could not create a product" 
        })
    } 
}

//Display list of of products
const list = async (req, res) => { 
    let products = []
    try { 
        if (req.query.name) {
            products = await Product.find({ name: { $regex: req.query.name, $options: 'i' } });
        } else {
            products = await Product.find();
        }
        res.json(products);
     } catch (err) {
        return res.status(400).json({
        error: "Can't display products" 
        })
     } 
}

//display a particular product by id
const productByID = async (req, res, next, id) => { 
    try {
        let product = await Product.findById(id) 
        if (!product) {
            return res.status(400).json({ 
            error: "Product not found"
            })
        }

        req.profile = product 
        next()
    } catch (err) {
        return res.status(400).json({ 
        error: "Could not retrieve product"
        }) 
    }
}

//Get data about product
const read = (req, res) => {
    const product = new Product(req.profile);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    return res.json(product); 
}

//Update product
const update = async (req, res) => { 
    try {
        let product = req.profile
        product = extend(product, req.body)
        await product.save()
        res.json(product) 
    } catch (err) {
        return res.status(400).json({
        error: "Failed to update"
        })
    } 
    }

//Delete product
const remove = async (req, res) => { 
    try {
        let product = req.profile
        let deletedProduct = await product.deleteOne() 
        res.json(deletedProduct) 
    } catch (err) {
        return res.status(400).json({
        error: "Failed to delete"
        })
    } 
}


export default { create, read, productByID, list, remove, update }
    
