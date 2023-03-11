import db from '../models/index';
import express, { Express, Request, Response } from "express";
const Artist = db.artist
import cloudinary from '../claoudinary/claoudinary' ;


//methods to get all the artists
const getAllArtists =async (req:Request ,res:Response) =>{
    try {
        let artists= await Artist.findAll({
          include : ['artworks']
        })
      console.log(artists)
        res.status(200).send(artists)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new artist
const addArtist = async (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }

      const artist = await Artist.create({
        name: req.body.name,
        bio: req.body.bio,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture,
        phoneNumber: req.body.phoneNumber,
        birthDate: req.body.birthDate
      });
      console.log(artist);
      res.status(201).send("artist created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

   // update artist information in database
   const updateArtist= async (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const artist =  await Artist.update({
        name: req.body.name,
        bio: req.body.bio,
        email: req.body.email,
        password: req.body.password,
        picture: req.body.picture,
        phoneNumber: req.body.phoneNumber,
        birthDate: req.body.birthDate
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("artist updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

const updateImgArtist =async(req:Request,res:Response)=>{
  try {
    if (!req.body) {
      throw new Error("Request body is missing required properties.");
    }
const img =  await Artist.update({
    picture: req.body.picture,
}, {
    where: {
        id: req.params.id
    }
})
res.status(200).send("artist updated successfully")
}
catch (err) {
console.log(err);
res.status(400).send(err);
}

  }


   // delete artist information in database

const deleteArtist= async (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const artist = await Artist.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("artist deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }
    const getArtist=async(req:Request,res:Response)=>{
      try {
        const artist=await Artist.findOne({ where:{ email:req.params.email}})
        if (artist === null) {
          res.status(401).send( console.error("fails"));
        } else {
          res.status(200).json(artist)// 'My Title'
        }
        
      } catch (error) {
        console.log(error);
      }
    }
    const getArtistwithId=async(req:Request,res:Response)=>{
      try {
        const artist=await Artist.findOne({ where:{ id:req.params.id}})
        if (artist === null) {
          console.log('Not found!');
        } else {
          res.status(200).json(artist)// 'My Title'
        }
        
      } catch (error) {
        console.log(error)
      }
    }

export default {getAllArtists,addArtist,updateArtist,deleteArtist,getArtist,getArtistwithId,updateImgArtist};


