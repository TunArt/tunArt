import express from 'express';
const routes = express.Router()
import Artist from '../controllers/artists'


routes.get('/getArtists/:ArtistId', Artist.getAllArtists)
routes.get('/getArtists', Artist.getArtists)
routes.post('/addArtist', Artist.addArtist)
routes.put('/updateArtist/:email', Artist.updateArtist)
routes.put('/updateImgArtist/:email', Artist.updateImgArtist)
routes.delete('/deleteArtist/:id', Artist.deleteArtist)
routes.get('/getArtist/:email',Artist.getArtist)
routes.get('/getIdArtist/:id',Artist.getArtistwithId)
export default routes
