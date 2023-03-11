import express from "express";
const routes=express.Router()
import Favorite from "../controllers/user_Favorite"

routes.get("/getAll/:userId",Favorite.getFavoriteOfUser)   
export default routes