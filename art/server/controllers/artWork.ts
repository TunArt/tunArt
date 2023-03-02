// import db from '../models/index';
// import express, { Express, Request, Response } from 'express';
// const ArtWork = db.ArtWork

// //methods to get all the ArtWorks
// const getAllArtWorks = (req:Request ,res:Response) =>{
//     try {
//         let  ArtWorks= ArtWork.findAll()
//         res.status(200).send(ArtWorks)
// }
// catch (err){
//     console.log(err)
// }
// }

// //  method to add  a new ArtWork
// const addArtWork = (req: Request, res: Response) => {
//     try {
//       if (!req.body) {
//         throw new Error("Request body is missing required properties.");
//       }
//       const ArtWork = ArtWork.create({
//         name: req.body.name,
//         bio: req.body.bio,
//         email: req.body.email,
//         password: req.body.password,
//         picture: req.body.picture,
//         phoneNumber: req.body.phoneNumber
//       });
//       res.status(201).send("ArtWork created successfully");
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ error: err.message });
//     }
//   };

//    // update User information in database
//    const updateArtWork= (req:Request, res:Response)=> {
//     try {
//         if (!req.body) {
//           throw new Error("Request body is missing required properties.");
//         }

//     const ArtWork =  ArtWork.update({
//         name: req.body.name,
//         bio: req.body.bio,
//         email: req.body.email,
//         password: req.body.password,
//         picture: req.body.picture,
//         phoneNumber: req.body.phoneNumber
//     }, {
//         where: {
//             id: req.params.id
//         }
//     })
//     res.status(200).send("ArtWork updated successfully")
// }
// catch (err) {
//     console.log(err);
//     res.status(400).send({ error: err.message });
//   }
// }

// const deleteArtWork= (req:Request, res:Response)=> {
//     try {
//         if (!req.body) {
//           throw new Error("Request body is missing required properties.");
//         }
//    const ArtWork =  ArtWork.destroy({
//             where: {
//                 id: req.params.id
//             }
//         })
//         res.status(200).send("ArtWork deleted successfully")
//     }
//     catch (err) {
//         console.log(err);
//         res.status(400).send({ error: err.message });
//       }
//     }
  

// export default {getAllArtWorks,addArtWork,updateArtWork,deleteArtWork};


