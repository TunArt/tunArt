import express from 'express';
const routes = express.Router()
import Artist from '../controllers/artists'


routes.get('/getArtists', Artist.getAllArtists)
routes.post('/addArtist', Artist.addArtist)
routes.put('/updateArtist/:id', Artist.updateArtist)
routes.put('/updateImgArtist/:id', Artist.updateImgArtist)
routes.delete('/deleteArtist/:id', Artist.deleteArtist)
routes.get('/getArtist/:email',Artist.getArtist)
routes.get('/getIdArtist/:id',Artist.getArtistwithId)
export default routes
