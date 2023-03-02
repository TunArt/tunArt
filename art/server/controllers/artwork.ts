import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Artwork = db.artwork

//methods to get all the artworks
const getAllArtworks = async (req:Request ,res:Response) =>{
    try {
        let  artworks= await Artwork.findAll()
        res.status(200).send(artworks)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new artwork
const addArtwork = async (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const artwork = await Artwork.create({
        name: req.body.name,
        creationDate: req.body.creationDate,
        price: req.body.price,
        rating: req.body.rating,
        description: req.body.description,
        auction: req.body.auction,
        image: req.body.image,
        verified:req.body.verified,
        artistId: req.body.artistId,
        categoryId: req.body.categoryId, 
        userId: req.body.userId
      });
      res.status(201).send("artwork created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

export default {getAllArtworks,addArtwork};


