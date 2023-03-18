import db from '../models/index';
import express, { Express, Request, Response } from 'express';
import axios from 'axios';
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

const pay = async (req:Request,res:Response)=>{
  const url="https://developers.flouci.com/api/generate_payment"
const payload ={
  "app_token": "c7c49995-2ef6-4a4d-8a63-7092b025bb7b", 
    "app_secret": process.env.FLOUCI_SEC,
    "amount": req.body.amount,
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": req.body.url,
    "fail_link": "http://localhost:3002/404",
    "developer_tracking_id": "f78f1859-edb5-4abf-b27b-f0a01d404340"
}
await axios
.post(url,payload)
.then(result =>{
   res.json(result.data)
})
.catch(err =>console.log(err) )
}
const verif = async (req: Request, res: Response) => {
  const id = req.params.id;
  const url = `https://developers.flouci.com/api/verify_payment/${id}`;
  const config = {
    headers: {
      'apppublic': 'c7c49995-2ef6-4a4d-8a63-7092b025bb7b',
      'appsecret': process.env.FLOUCI_SEC,
    },
  };
  await axios
    .get(url, config)
    .then((result) => {
      res.json(result.data);
    })
    .catch((err) => console.error(err));
};

export default {getAllPayments,addPayment,updatePayment,deletePayment,pay,verif};


