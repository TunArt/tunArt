import express, { Express, Request, Response } from 'express';
import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';

interface UploadOptions {
  overwrite: boolean;
  invalidate: boolean;
  resource_type?: "raw" | "image" | "auto" | "video";
}

cloudinary.config({
  cloud_name: 'dp54rkywx',
  api_key: '713536381247618',
  api_secret: 'wZ2D6sEQD8rukhd9v7byz9U_B_s',
});

const opts: UploadOptions = {
  overwrite: true,
  invalidate: true,
  resource_type: "auto"    
}

const uploadImage = (img: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
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

const multipleImages = (images: string[]): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    const upload = images.map((base) => uploadImage(base));
    Promise.all(upload)
      .then(values => resolve(values))
      .catch((err: any) => {
        reject(err)
      })
  });
}

const uploadimg = (req: Request, res: Response): void => {
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmm",req.body.image);
  
  uploadImage(req.body.image)
    .then((url: string) => res.send(url))
    .catch((err: any) => {
      res.status(500).send(err);
    })
}

const uploadimages = (req: Request, res: Response): void => {
  multipleImages(req.body.images)
    .then((urls: string[]) => res.send(urls))
    .catch((err: any) => {
      res.status(500).send(err);
    })
}

export default { uploadimg, uploadimages };
