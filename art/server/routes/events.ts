import express from 'express';
const routes = express.Router()
import Event from '../controllers/event'
import middleWare from '../middleware/index'
routes.get("/getAll",Event.getAllEvents)
routes.post("/add",Event.addEvent)
routes.put("/update",middleWare,Event.updateEvent)
routes.delete("/remove/:id",Event.removeEvent)

export default routes