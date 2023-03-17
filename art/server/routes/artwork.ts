import express from 'express';
const routes = express.Router()
import Artwork from '../controllers/artwork'


routes.get('/getArtworks', Artwork.getAllArtworks)
routes.get('/getAllVerified', Artwork.AllArtworks)
routes.get('/getTopArtworks', Artwork.getTopArtworks)
routes.get('/getLimitedArtworks/:count', Artwork.getLimitedlArtworks)
routes.get('/getOneArtwork/:name', Artwork.getOneArtwork)
routes.get('/getBidArtworks/',Artwork.getBidArtworks) 
routes.get('/getSomeArtworks/:id',Artwork.getSomeArtworks)
routes.post('/addArtwork/:artistId',Artwork.addArtwork)
routes.get('/notVArtWorks', Artwork.AllnotV)
routes.put("/acceptsTheArtWork/:id",Artwork.acceptsArtWork)
routes.put("/updateArtwork/:id",Artwork.updateArtWork)
routes.delete("/deleteArtwork/:id",Artwork.deleteArtWork)
export default routes