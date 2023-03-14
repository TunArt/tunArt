import db from '../models/index';
import { Request, Response } from 'express';
const Artist_Product = db.artist_product;
const Artist = db.artist;
const Product = db.product;
const ArtistBought = async (req: Request, res: Response): Promise<void> => {
  try {
    const { ArtistId, productId } = req.params;
    const UP = await Artist_Product.create({
      artistId: ArtistId,
      productId: productId,
      quantityBought: req.body.quantityBought,
    });
    res.status(201).send('Added');
  } catch (error) {
    res.status(400).send('failed');
  }
};

const getAllitemforAArtist = async (req:Request, res:Response) => {
  console.log(req.params.artistId)
  try {
    const { artistId } = req.params;
    const artist = await Artist.findByPk(artistId, {
      include: [
        {
          model: Product,
          through: { model: db.artist_product },
          include: [{ model: Artist, through: { model: db.artist_product } }],
        },
      ],
    });
    console.log(artist.dataValues)
    res.status(200).json(artist.dataValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
};
const deleteItem=async(req:Request,res:Response)=>{
const {ArtistId,productId}=req.params
try {
  const del=await Artist_Product.destroy({where :{artistId:ArtistId ,productId:productId},})
  res.status(200).json(del) 
} catch (error) {
  console.error(error);
    res.status(500).json({ error: 'Unable to delete products.' });
}
}
export default { ArtistBought, getAllitemforAArtist,deleteItem };
