import db from '../models/index';
import express, { Express, Request, Response } from "express";
const Artist = db.artist

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
        phoneNumber: req.body.phoneNumber
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
        phoneNumber: req.body.phoneNumber
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
  

export default {getAllArtists,addArtist,updateArtist,deleteArtist};


