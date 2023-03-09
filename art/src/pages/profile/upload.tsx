import cloudinary from 'cloudinary';

export default async function handler(req:Request, res:Response) {
    const width = 10;
const height = 10;

    const uploadOptions = {
        folder: 'artworks', // optional folder name
        transformation: [
          { width: width, height: height, crop: "limit" }
        ]
      };
  const formData :any= req.body;

  try {
    const result = await cloudinary.v2.uploader.upload(formData.files.file.path,uploadOptions );

    res.json(result);
    } catch (error) {
    console.error(error);
    res.json( error );
  }
}