import express, { Express, Request, Response } from 'express';
import { v2 as cloudinary } from 'cloudinary';


cloudinary.config({
  cloud_name: '<your-cloud-name>',
  api_key: '<your-api-key>',
  api_secret: '<your-api-secret>',
});
const opts = {
    overwrite:true,
    invalidate:true,
    resource_type:"auto"    
    
}
const uploadImage = (img: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(img, opts, (error, result) => {
        if (result && result.secure_url) {
          console.log(result.secure_url);
          return resolve(result.secure_url);
        }
        console.log(error?.message);
        return reject({ message: error?.message });
      });
    });
  };

const multipleImages=(images)=>{
    return new Promise((resolve,reject)=>{

        const upload =images.map((base) =>{ uploadImage(base)})
        Promise.all(upload).then(values => resolve(values))
        .catch((err)=>{
            reject(err)
        })
    })
}
const uploadimg=(req:Request,res:Response)=>{
    uploadImage(req.body.image).then((url)=>res.send(url))
    .catch((err)=>{res.status(500).send(err)})
}
const uploadimages=(req:Request,res:Response)=>{
    multipleImages(req.body.images).then(urls=>res.send(urls)
    ).catch((err)=>{
        res.status(500).send(err)
    })
}
export default {uploadimg,uploadImage};
