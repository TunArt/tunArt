import express from 'express';
const routes = express.Router()
import User from '../controllers/user'


routes.get('/getUsers', User.getAllUsers)
routes.post('/addUser', User.addUser)
routes.put('/updateUser/:id', User.updateUser)
routes.delete('/deleteUser/:id', User.deleteUser)

export default routes