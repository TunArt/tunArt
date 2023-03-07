import express from 'express';
const routes = express.Router()
import Message from '../controllers/message'


routes.get('/getMessages', Message.getAllMessages)
routes.post('/addMessage',Message.addMessage)

export default routes