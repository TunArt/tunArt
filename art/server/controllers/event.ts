import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Event = db.event
const getAllEvents = (req:Request,res:Response)=>{
    try {
      let events =  Event.findAll()
      res.status(200).json(events)

    } catch (error) {
        res.status(400)
    }
}