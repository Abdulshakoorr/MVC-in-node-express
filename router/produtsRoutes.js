const express = require('express');
const productsRouter = express.Router();
const {getAllProducts , getSingleProduct, createProduct, upDateProduct, overRideProduct, DeleteProduct} = require("../controllers/productController")

productsRouter.get('/', getAllProducts )
.get('/:id',getSingleProduct)
.post('/', createProduct)
.put('/:id', overRideProduct)
.patch('/:id', upDateProduct)
.delete('/:id', DeleteProduct)


module.exports = productsRouter;