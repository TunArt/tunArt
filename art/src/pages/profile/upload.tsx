import cloudinary from 'cloudinary';

export default async function handler(req:Request, res:Response) {
  const formData :any= req.body;

  try {
    const result = await cloudinary.v2.uploader.upload(formData.files.file.path, {
      upload_preset: 'my-uploads'
    });

    res.json(result);
    } catch (error) {
    console.error(error);
    res.json( error );
  }
}