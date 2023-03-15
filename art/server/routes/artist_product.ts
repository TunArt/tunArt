import express from 'express';
const routes = express.Router()
import Artist_product from '../controllers/artist_product'


routes.post('/productB/:ArtistId/:productId', Artist_product.ArtistBought)
routes.get('/artistBought/:artistId', Artist_product.getAllitemforAArtist)
routes.delete('/productCanceled/:ArtistId/:productId', Artist_product.deleteItem )
routes.put('/productUpDate/:id',Artist_product.update)
export default routes