import express from 'express';
const routes = express.Router()
import Category from '../controllers/category'

routes.get('/getCategories', Category.getAllCategories)
routes.post('/addCategory', Category.addCategory)
routes.put('/updateCategory/:id', Category.updateCategory)
routes.delete('/deleteCategory/:id', Category.deleteCategory)

export default routes