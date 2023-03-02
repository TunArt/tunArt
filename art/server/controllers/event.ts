import db from '../models/index';
import express, { Express, Request, Response } from 'express';
import { where } from 'sequelize';
const Event = db.event
const getAllEvents = (req:Request,res:Response)=>{
    try {
      let events =  Event.findAll()
      res.status(200).json(events)

    } catch (error) {
        res.status(400)

    }
}
const addEvent = (req:Request, res:Response)=>{
    try{
        let events=Event.create({
            eventName:req.body.eventName,
            description:req.body.description,
            price:req.body.price  ,        
            eventDate:req.body.eventDate,
            evenetTime:req.body.evenetTime,
            
        })
        res.status(200).json(events)
    }
    catch(err){
        console.log(err);
        res.status(400)
    }
}
const removeEvent = (req:Request,res:Response)=>{
    try {
        Event.destroy({
            where:{
                id:req.params.id
            }
        })
        res.status(200).json('deleted')
    } catch (error) {
        console.log(error)
        res.status(400)
    }
}
const updateEvent = (req:Request,res:Response)=>{
    try {
        if(!req.body) res.status(400).send('"Request body is missing required properties')
        else{
            Event.update({
                eventName:req.body.eventName,
                description:req.body.description,
                price:req.body.price  ,        
                eventDate:req.body.eventDate,
                evenetTime:req.body.evenetTime,  
            },{
            where:{
                id:req.params.id
            }})
        }
    } catch (error) {
        
    }
}
export default {updateEvent,removeEvent,addEvent,getAllEvents}