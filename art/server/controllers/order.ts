import db, { user } from '../models/index';
import express, { Express, Request, Response } from 'express';
const Order = db.order

const addOder=async (req:Request,res:Response)=>{
    try {
        const {productId,prix,state,paymentId}=req.body
        const {userId}=req.params
        await Order.create({
            userId:userId,
            productId:productId,
            state:state,
            paymentId:paymentId,
            prix:prix
        })
        res.json('added')
        
    } catch (error) {
        console.error(error)
    }
}
export default {addOder}