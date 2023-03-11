import express from 'express';
const routes = express.Router()
import Artwork from '../controllers/artwork'


routes.get('/getArtworks/:count', Artwork.getAllArtworks)
routes.get('/getOneArtwork/:name', Artwork.getOneArtwork)
routes.get('/getTopArtworks', Artwork.getTopArtworks)
routes.post('/addArtwork/:artistId/:userId?',Artwork.addArtwork)
routes.get('/getArtworks', Artwork.getAllArtworks)
routes.post('/addArtwork/:artistId',Artwork.addArtwork)
routes.get('/notVArtWorks', Artwork.AllnotV)
routes.put("/acceptsTheArtWork/:id",Artwork.acceptsArtWork)
export default routes