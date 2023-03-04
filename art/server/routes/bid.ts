import express from 'express';
const routes = express.Router()
import Bid from '../controllers/bid'

routes.get('/getBids', Bid.getAllBids)
routes.post('/addBid', Bid.addBid)
routes.put('/updateBid/:id', Bid.updateBid)
routes.delete('/deleteBid/:id', Bid.deleteBid)

export default routes