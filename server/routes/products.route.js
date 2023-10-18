/*
Student name: Iuliia Chugunova
Student ID: 301150836
File: products.route.js
Date: October 18th, 2023
Description: defines routes depending on user's request and send responses
*/

import express from 'express';
import productCtrl from '../controllers/product.controller.js'; 
const router = express.Router();
router.route('/api/products')
  .get(productCtrl.list)
  .post(productCtrl.create);

router.route('/api/products/:productById') 
  .get(productCtrl.read)
  .put(productCtrl.update) 
  .delete(productCtrl.remove);

router.param('productById', productCtrl.productByID);
export default router;

