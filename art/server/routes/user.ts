import express from 'express';
const routes = express.Router()
import User from '../controllers/user'
import middleWare from '../middleware/index'

routes.get('/getUsers',User.getAllUsers)
routes.post('/addUser',User.addUser)
<<<<<<< HEAD
routes.put('/updateUser/:id',middleWare, User.updateUser)
routes.delete('/deleteUser/:id' , User.deleteUser)
=======
routes.put('/updateUser/:id', User.updateUser)
routes.delete('/deleteUser/:id', User.deleteUser)
>>>>>>> 71a3789d657d1f5fd843f023d6e5c4da8ebbc654
routes.get('/getUser/:email',User.getUser)
routes.get('/getUserId/:id',User.getUserwithId)
    
export default routes