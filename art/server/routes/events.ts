import express from 'express';
const routes = express.Router()
import Event from '../controllers/event'
import middleWare from '../middleware/index'
routes.get("/getAll",middleWare,Event.getAllEvents)
routes.post("/add",middleWare,Event.addEvent)
routes.put("/update",middleWare,Event.updateEvent)
routes.delete("/remove",middleWare,Event.removeEvent)

export default routes