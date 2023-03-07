import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Bid = db.bid

//methods to get all the bids

const getAllBids = async (req:Request ,res:Response) =>{
    try {
        let  bids=await Bid.findAll(
          // {include:["message", "users"]}
          )
        res.status(200).send(bids)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new bid
const addBid = (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const bid = Bid.create({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        currentPrice: req.body.currentPrice,
        minPrice:req.body.minPrice,
        currentBidder: req.body.currentBidder,
        artWorkArtistId: req.body.artWorkArtistId,
        artWorkCategoryId: req.body.artWorkCategoryId,
      });
      res.status(201).send("bid created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

   // update bid information in database
   const updateBid = (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const bid =  Bid.update({
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        currentPrice: req.body.currentPrice,
        minPrice:req.body.minPrice,
        currentBidder: req.body.currentBidder,
        artWorkArtistId: req.body.artWorkArtistId,
        artWorkCategoryId: req.body.artWorkCategoryId,
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("bid updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

   // delete bid information in database

const deleteBid= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const bid =  Bid.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("bid deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }
  

export default {getAllBids,addBid,updateBid,deleteBid};


