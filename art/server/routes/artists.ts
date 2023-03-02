import express from 'express';
const routes = express.Router()
import Artist from '../controllers/artists'


routes.get('/getArtists', Artist.getAllArtists)
routes.post('/addArtist', Artist.addArtist)
routes.put('/updateArtist/:id', Artist.updateArtist)
routes.delete('/deleteArtist/:id', Artist.deleteArtist)

export default routes
