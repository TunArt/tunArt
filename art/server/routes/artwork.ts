import express from 'express';
const routes = express.Router()
import Artwork from '../controllers/artwork'


routes.get('/getArtworks', Artwork.getAllArtworks)
routes.get('/getOneArtwork/:name', Artwork.getOneArtwork)
routes.post('/addArtwork/:artistId/:userId?',Artwork.addArtwork)
routes.get('/notVArtWorks', Artwork.AllnotV)
routes.put("/acceptsTheArtWork/:id",Artwork.acceptsArtWork)
export default routes