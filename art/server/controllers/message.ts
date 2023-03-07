
import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Message = db.message


//methods to get all the messages
const getAllMessages = async (req:Request ,res:Response) =>{
    try {
        let  messages= await Message.findAll(
          // {include:["users"]}
          )
        res.status(200).send(messages)
}
catch (err){
    console.log(err)
}
}


const addMessage = async (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const message = await Message.create(req.body);
      res.status(201).send("message added successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };



    
export default {getAllMessages, addMessage};


