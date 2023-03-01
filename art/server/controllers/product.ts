import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Product = db.product

//methods to get all the products

const getAllProducts = (req:Request ,res:Response) =>{
    try {
        let  products= Product.findAll()
        res.status(200).send(products)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new product
const addProduct = (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const product = Product.create({
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        comments: req.body.comments,
        price: req.body.price,
        quantity: req.body.quantity,
        brand: req.body.brand,
        picture: req.body.picture
      });
      res.status(201).send("product created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

   // update product information in database
   const updateProduct = (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }

    const product =  Product.update({
        name: req.body.name,
        description: req.body.description,
        rating: req.body.rating,
        comments: req.body.comments,
        price: req.body.price,
        quantity: req.body.quantity,
        brand: req.body.brand,
        picture: req.body.picture
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("product updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

   // delete product information in database
   
const deleteProduct= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const product =  Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("product deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }
  

export default {getAllProducts,addProduct,updateProduct,deleteProduct};


