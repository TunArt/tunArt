import express from 'express';
const routes = express.Router()
import Product from '../controllers/product'


routes.get('/getProducts', Product.getAllProducts)
routes.post('/addProduct', Product.addProduct)
routes.put('/updateProduct/:id', Product.updateProduct)
routes.delete('/deleteProduct/:id', Product.deleteProduct)
routes.put("/soled/:id",Product.seller)

export default routes