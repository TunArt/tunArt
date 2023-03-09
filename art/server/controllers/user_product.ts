import db from '../models/index';
import { Request, Response } from 'express';
const User_Product = db.user_product;
const User = db.user;
const Product = db.product;
const UserBought = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, productId } = req.params;
    const UP = await User_Product.create({
      userId: userId,
      productId: productId,
      quantityBought: req.body.quantityBought,
    });
    res.status(201).send('Added');
  } catch (error) {
    res.status(400).send('failed');
  }
};

const getAllitemforAuser = async (req:Request, res:Response) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId, {
  
      include: [
        {
          model: Product,
          through: { model: db.user_product },
          include: [{ model: User, through: { model: db.user_product } }],
        },
      ],
    });
    console.log(user.dataValues)
    res.status(200).json(user.dataValues);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
};
const deleteItem=async(req:Request,res:Response)=>{
const {userId,productId}=req.params
try {
  const del=await User_Product.destroy({where :{userId:userId ,productId:productId},})
  res.status(200).json(del) 
} catch (error) {
  console.error(error);
    res.status(500).json({ error: 'Unable to delete products.' });
}
}
export default { UserBought, getAllitemforAuser,deleteItem };
