import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Payment = db.payment

//methods to get all the payments
const getAllPayments = (req:Request ,res:Response) =>{
    try {
        let  payments= Payment.findAll()
        res.status(200).send(payments)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new payment
const addPayment = (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const payment = Payment.create({
        paymentType: req.body.paymentType ,
        serviceProvider: req.body.serviceProvider,
        accountNo: req.body.accountNo,
        expireDate: req.body.expireDate,
        userId: req.body.userId,
        artistId: req.body.artistId,  
      });
      res.status(201).send("payment created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

  // update payment information in database
  const updatePayment = (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const payment =  Payment.update({
        paymentType: req.body.paymentType ,
        serviceProvider: req.body.serviceProvider,
        accountNo: req.body.accountNo,
        expireDate: req.body.expireDate,
        userId: req.body.userId,
        artistId: req.body.artistId, 
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("payment updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

   // delete payment information in database

const deletePayment= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const payment =  Payment.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("payment deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }


export default {getAllPayments,addPayment,updatePayment,deletePayment};


