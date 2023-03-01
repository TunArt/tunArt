import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const User = db.user

//methods to get all the users

const getAllUsers = (req:Request ,res:Response) =>{
    try {
        let  users= User.findAll()
        res.status(200).send(users)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new user
const addUser = (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const user = User.create({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber,
        picture: req.body.picture
      });
      res.status(201).send("user created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send({ error: err.message });
    }
  };

   // update User information in database
   const updateUser= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const user =  User.update({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        birthDate: req.body.birthDate,
        phoneNumber: req.body.phoneNumber,
        picture: req.body.picture
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("user updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send({ error: err.message });
  }
}

   // delete User information in database

const deleteUser= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const user =  User.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("user deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ error: err.message });
      }
    }
  

export default {getAllUsers,addUser,updateUser,deleteUser};


