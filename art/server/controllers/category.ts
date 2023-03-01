import db from '../models/index';
import express, { Express, Request, Response } from 'express';
const Category = db.category

//methods to get all the categories
const getAllCategories = (req:Request ,res:Response) =>{
    try {
        let  categories= Category.findAll()
        res.status(200).send(categories)
}
catch (err){
    console.log(err)
}
}

//  method to add  a new category 
const addCategory = (req: Request, res: Response) => {
    try {
      if (!req.body) {
        throw new Error("Request body is missing required properties.");
      }
      const category = Category.create({
        name:req.body.name
      });
      res.status(201).send("category created successfully");
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  };

  // update category information in database
  const updateCategory = (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
    const category =  Category.update({
       name:req.body.name
    }, {
        where: {
            id: req.params.id
        }
    })
    res.status(200).send("category updated successfully")
}
catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
}

  // delete category information in database

const deleteCategory= (req:Request, res:Response)=> {
    try {
        if (!req.body) {
          throw new Error("Request body is missing required properties.");
        }
   const category =  Category.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).send("category deleted successfully")
    }
    catch (err) {
        console.log(err);
        res.status(400).send(err);
      }
    }

    
export default {getAllCategories,addCategory,updateCategory,deleteCategory};


