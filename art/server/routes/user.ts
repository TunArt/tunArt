import express from 'express';
const routes = express.Router()
import User from '../controllers/user'
import middleWare from '../middleware/index'

routes.get('/getUsers',User.getAllUsers)
routes.post('/addUser',User.addUser)
routes.put('/updateUser/:id',middleWare, User.updateUser)
routes.delete('/deleteUser/:id' , User.deleteUser)
routes.get('/getUser/:email',User.getUser)
routes.get('/getUserId/:id',User.getUserwithId)
    
export default routes