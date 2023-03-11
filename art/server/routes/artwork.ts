import express from 'express';
const routes = express.Router()
import Artwork from '../controllers/artwork'


routes.get('/getArtworks', Artwork.getAllArtworks)
routes.post('/addArtwork',Artwork.addArtwork)
routes.get('/notVArtWorks', Artwork.AllnotV)
routes.put("/acceptsTheArtWork/:id",Artwork.acceptsArtWork)
export default routes