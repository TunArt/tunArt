import { Request, Response } from 'express';
import db from '../models/index';

const { user_Favorite,artwork} = db;

const getFavoriteOfUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user= await user_Favorite.findAll({
      where:{
        userId:userId
      }
    })
    console.log("mmmmmmmmmmmmmmmmm",user)
    res.status(200).json(user)
  }
   catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Unable to retrieve products.' });
  }
};

export default { getFavoriteOfUser };
