import express from 'express';
const routes = express.Router()
import Payment from '../controllers/payment'

routes.get('/getPayments', Payment.getAllPayments)
routes.post('/addPayment', Payment.addPayment)
routes.put('/updatePayment/:id', Payment.updatePayment)
routes.delete('/deletePayment/:id', Payment.deletePayment)
routes.post('/pay',Payment.pay)
routes.post('/verif/:id',Payment.verif)
export default routes