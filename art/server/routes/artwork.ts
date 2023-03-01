import express from 'express';
const routes = express.Router()
import Artwork from '../controllers/artwork'


routes.get('/getArtworks', Artwork.getAllArtworks)
routes.post('/addArtwork', Artwork.addArtwork)

export default routes