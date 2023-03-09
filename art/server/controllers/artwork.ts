import db from '../models/index';
import express, { Express, Request, Response } from 'express';
import { async } from '@firebase/util';
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

//method to get one artwork (search)
const getOneArtwork = async (req:Request ,res:Response) =>{
  try {
      let  artworks= await Artwork.findOne({ where: { name: req.params.name } })
      res.status(200).send(artworks)
}
catch (err){
  console.log(err)
}
}

//  method to add  a new artwork
const addArtwork = async (req: Request, res: Response) => {
  const {artistId,userId}=req.params
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
if(userId){
  try{
      const artwork = await Artwork.create({
        name: req.body.name,
        creationDate: req.body.creationDate,
        price: req.body.price,
        description: req.body.description,
        auction: req.body.auction,
        image: req.body.image,
        verified:req.body.verified,
        artistId: req.params.artistId,
        categoryId: req.body.categoryId, 
      });
      res.status(201).send("artwork created successfully");
    }
     catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
  else{
    try {
      const artwork = await Artwork.create({
        name: req.body.name,
        creationDate: req.body.creationDate,
        price: req.body.price,
        description: req.body.description,
        auction: req.body.auction,
        image: req.body.image,
        verified:req.body.verified,
        artistId: req.params.artistId,
        categoryId: req.body.categoryId, 
        userId: req.params.userId
      });
      res.status(201).send("artwork created successfully");
    } catch (error) {
      
    }
  }
};
  const modfyArtWork=async(req:Request,res:Response)=>{
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      await Artwork.update({
        rating:req.body.rating,
        comments:req.body.comments
    }, {
        where: {
            id: req.params.id
        }
    })
    } catch (error) {
      
    }
  }
  const acceptsArtWork=async(req:Request,res:Response)=>{
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      await Artwork.update({
        verified:true
    }, {
        where: {
            id: req.params.id
        }
    })
    } catch (error) {
      res.status(500).send("failed to add artwork")
      
    }
  }
  const AllnotV = async(req:Request,res:Response) => {
    try {
      const art=await  Artwork.findAll({where:
          {verified:false}  })
          res.status(200).json(art)
    } 
    catch (error) {
        res.status(500).send("failed to add artwork")
    }
  }


    // update User information in database
   const updateArtWork= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const artWork =  Artwork.update({
        name: req.body.name,
        bio: req.body.bio,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture,
        phoneNumber: req.body.phoneNumber
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("ArtWork updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

const deleteArtWork= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const artWork =  Artwork.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("ArtWork deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }
export default {getAllArtworks,getOneArtwork,addArtwork,AllnotV,modfyArtWork,acceptsArtWork};


