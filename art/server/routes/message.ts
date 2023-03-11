import express from 'express';
import Message from '../controllers/message'
const routes = express.Router()


routes.get('/getMessages', Message.getAllMessages)
routes.post('/addMessage',Message.addMessage)

export default routes